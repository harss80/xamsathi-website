-- Enable extensions
create extension if not exists pgcrypto;

-- Profiles: one row per user
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text unique,
  class_grade smallint check (class_grade between 1 and 12),
  role text check (role in ('student','admin')) default 'student',
  created_at timestamptz default now()
);

-- Courses by class
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  class_grade smallint not null check (class_grade between 1 and 12),
  active boolean default true,
  created_at timestamptz default now()
);

-- Enrollment linking user to course (optional if using class only)
create table if not exists public.enrollments (
  user_id uuid references public.profiles(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  status text default 'active',
  created_at timestamptz default now(),
  primary key (user_id, course_id)
);

-- Tests under a course
create table if not exists public.tests (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  difficulty text,
  duration_min smallint default 60,
  active boolean default true,
  created_at timestamptz default now()
);

-- Questions for a test
create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  test_id uuid not null references public.tests(id) on delete cascade,
  body text not null,
  options text[] not null,
  correct_indices int[] not null,
  explanation text,
  tags text[],
  pool_key text, -- group similar questions for auto-variation if needed
  active boolean default true,
  created_at timestamptz default now()
);

-- Attempts per user per test
create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  test_id uuid not null references public.tests(id) on delete cascade,
  started_at timestamptz default now(),
  submitted_at timestamptz,
  score numeric,
  total int,
  question_order uuid[] -- store shuffled order for reproducibility
);

-- Answers per attempt
create table if not exists public.answers (
  attempt_id uuid references public.attempts(id) on delete cascade,
  question_id uuid references public.questions(id) on delete cascade,
  selected_indices int[] not null,
  correct boolean,
  time_spent_sec int default 0,
  primary key (attempt_id, question_id)
);

-- RLS
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.tests enable row level security;
alter table public.questions enable row level security;
alter table public.attempts enable row level security;
alter table public.answers enable row level security;

-- Profiles policies
create policy if not exists "Profiles: user can read own" on public.profiles
  for select using (auth.uid() = id);
create policy if not exists "Profiles: user can update own" on public.profiles
  for update using (auth.uid() = id);

-- Courses: students can see only matching class courses; admins can manage
create policy if not exists "Courses: select if same class" on public.courses
  for select using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.class_grade = courses.class_grade
    )
  );

-- Tests: select if course is same class
create policy if not exists "Tests: select if same class" on public.tests
  for select using (
    exists (
      select 1 from public.profiles p
      join public.courses c on c.class_grade = p.class_grade
      where p.id = auth.uid() and c.id = tests.course_id
    )
  );

-- Questions: select if test accessible; hide correct_indices via views if needed
create policy if not exists "Questions: select if test accessible" on public.questions
  for select using (
    exists (
      select 1 from public.tests t
      join public.courses c on c.id = t.course_id
      join public.profiles p on p.class_grade = c.class_grade
      where t.id = questions.test_id and p.id = auth.uid()
    )
  );

-- Attempts: only owner can read/insert
create policy if not exists "Attempts: owner can select" on public.attempts
  for select using (auth.uid() = user_id);
create policy if not exists "Attempts: owner can insert" on public.attempts
  for insert with check (auth.uid() = user_id);

-- Answers: only owner
create policy if not exists "Answers: owner select" on public.answers
  for select using (exists (select 1 from public.attempts a where a.id = answers.attempt_id and a.user_id = auth.uid()));
create policy if not exists "Answers: owner insert" on public.answers
  for insert with check (exists (select 1 from public.attempts a where a.id = answers.attempt_id and a.user_id = auth.uid()));

-- Admin helper: allow service role to bypass RLS (automatic with service key).

-- Trigger to insert profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
