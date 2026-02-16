"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { User, Camera, Mail, Phone, BookOpen, Upload, Loader2 } from "lucide-react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

type TargetExam = "neet" | "jee" | "cbse" | "other";
type Stream = "pcm" | "pcb" | "commerce" | "arts" | "na";
type Medium = "english" | "hindi" | "other";

function readCookie(name: string): string | null {
    try {
        const m = document.cookie.match(
            new RegExp(`(?:^|; )${name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}=([^;]*)`)
        );
        return m ? decodeURIComponent(m[1]) : null;
    } catch {
        return null;
    }
}

function getBackendBase(): string {
    const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
    if (envBase) return envBase;
    if (typeof window !== "undefined") {
        const host = window.location.hostname;
        if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
    }
    return "http://localhost:3001";
}

export default function ProfilePage() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const studentPhotoInputRef = useRef<HTMLInputElement | null>(null);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        class_grade: 10,
        school: "",
        bio: "",
        avatar: "",
        target_exam: "cbse" as TargetExam,
        stream: "na" as Stream,
        medium: "english" as Medium,
        city: "",
        guardian_phone: "",
        student_photo: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [studentPhotoPreview, setStudentPhotoPreview] = useState<string | null>(null);
    const [loadError, setLoadError] = useState<string>("");

    const userId = useMemo(() => {
        try {
            const savedUserStr = localStorage.getItem("xamsathi_user");
            if (!savedUserStr) return "";
            const parsed = JSON.parse(savedUserStr) as Record<string, unknown>;
            const id = parsed.id || parsed._id || parsed.user_id;
            return typeof id === "string" ? id : "";
        } catch {
            return "";
        }
    }, []);

    const token = useMemo(() => {
        try {
            return localStorage.getItem("xamsathi_token") || localStorage.getItem("token") || readCookie("xamsathi_token") || "";
        } catch {
            return "";
        }
    }, []);

    useEffect(() => {
        const hydrateFromLocalStorage = () => {
            try {
                const savedUserStr = localStorage.getItem("xamsathi_user");
                if (!savedUserStr) return;
                const parsed = JSON.parse(savedUserStr) as Record<string, unknown>;
                setUser((prev) => {
                    const next = { ...prev };
                    if (typeof parsed.name === "string") next.name = parsed.name;
                    if (typeof parsed.email === "string") next.email = parsed.email;
                    if (typeof parsed.phone === "string") next.phone = parsed.phone;
                    if (typeof parsed.bio === "string") next.bio = parsed.bio;
                    if (typeof parsed.avatar === "string") next.avatar = parsed.avatar;
                    if (typeof parsed.school === "string") next.school = parsed.school;
                    if (typeof parsed.city === "string") next.city = parsed.city;
                    if (typeof parsed.guardian_phone === "string") next.guardian_phone = parsed.guardian_phone;
                    if (typeof parsed.student_photo === "string") next.student_photo = parsed.student_photo;
                    const cg = parsed.class_grade;
                    if (typeof cg === "number" && cg >= 1 && cg <= 12) next.class_grade = cg;
                    const te = parsed.target_exam;
                    if (te === "neet" || te === "jee" || te === "cbse" || te === "other") next.target_exam = te;
                    const st = parsed.stream;
                    if (st === "pcm" || st === "pcb" || st === "commerce" || st === "arts" || st === "na") next.stream = st;
                    const md = parsed.medium;
                    if (md === "english" || md === "hindi" || md === "other") next.medium = md;
                    return next;
                });
            } catch {
                // ignore
            }
        };

        const fetchFromBackend = async () => {
            if (!userId) return;
            setLoadError("");
            try {
                const base = getBackendBase();
                const res = await fetch(`${base}/api/me`, {
                    headers: {
                        "x-user-id": userId,
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                    credentials: "include",
                });
                if (!res.ok) return;
                const data = (await res.json()) as { user?: unknown };
                const u = data && typeof data === "object" ? (data as { user?: Record<string, unknown> }).user : undefined;
                if (!u || typeof u !== "object") return;

                setUser((prev) => {
                    const next = { ...prev };
                    if (typeof u.name === "string") next.name = u.name;
                    if (typeof u.email === "string") next.email = u.email;
                    if (typeof u.phone === "string") next.phone = u.phone;
                    if (typeof u.bio === "string") next.bio = u.bio;
                    if (typeof u.avatar === "string") next.avatar = u.avatar;
                    if (typeof u.school === "string") next.school = u.school;
                    if (typeof u.city === "string") next.city = u.city;
                    if (typeof u.guardian_phone === "string") next.guardian_phone = u.guardian_phone;
                    if (typeof u.student_photo === "string") next.student_photo = u.student_photo;
                    if (typeof u.class_grade === "number" && u.class_grade >= 1 && u.class_grade <= 12) next.class_grade = u.class_grade;
                    const te = u.target_exam;
                    if (te === "neet" || te === "jee" || te === "cbse" || te === "other") next.target_exam = te;
                    const st = u.stream;
                    if (st === "pcm" || st === "pcb" || st === "commerce" || st === "arts" || st === "na") next.stream = st;
                    const md = u.medium;
                    if (md === "english" || md === "hindi" || md === "other") next.medium = md;
                    return next;
                });

                localStorage.setItem("xamsathi_user", JSON.stringify(u));
                window.dispatchEvent(new Event("storage"));
            } catch {
                setLoadError("Failed to load profile. Please refresh.");
            }
        };

        hydrateFromLocalStorage();
        void fetchFromBackend();
    }, [token, userId]);

    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            // Convert to Base64
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result as string;
                // Basic client-side size check (approximate)
                if (base64String.length > 500 * 1024) { // 500KB limit for now
                    alert("Image is too large. Please upload an image smaller than 500KB.");
                    return;
                }
                setPreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const onDropStudentPhoto = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result as string;
            if (!base64String) return;
            if (base64String.length > 5.2 * 1024 * 1024) {
                alert("Image is too large. Please upload a smaller image.");
                return;
            }
            setStudentPhotoPreview(base64String);
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.png', '.jpg', '.webp']
        },
        maxFiles: 1
    });

    const {
        getRootProps: getStudentPhotoRootProps,
        getInputProps: getStudentPhotoInputProps,
        isDragActive: isStudentPhotoDragActive,
    } = useDropzone({
        onDrop: onDropStudentPhoto,
        accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.webp'] },
        maxFiles: 1,
    });

    const handleSave = async () => {
        setIsLoading(true);

        try {
            if (!userId) {
                alert("Missing user session. Please login again.");
                return;
            }

            const base = getBackendBase();
            const res = await fetch(`${base}/api/me/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": userId,
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    name: user.name,
                    phone: user.phone,
                    class_grade: Number(user.class_grade),
                    bio: user.bio,
                    avatar: preview || user.avatar,
                    target_exam: user.target_exam,
                    stream: user.stream,
                    medium: user.medium,
                    school: user.school,
                    city: user.city,
                    guardian_phone: user.guardian_phone,
                    student_photo: studentPhotoPreview || user.student_photo,
                })
            });

            if (res.ok) {
                const data = await res.json();
                if (data.user) {
                    // Update local storage
                    const newUser = { ...JSON.parse(localStorage.getItem("xamsathi_user") || "{}"), ...data.user };
                    // Ensure avatar is updated
                    if (data.user.avatar) newUser.avatar = data.user.avatar;
                    if (data.user.student_photo) newUser.student_photo = data.user.student_photo;
                    localStorage.setItem("xamsathi_user", JSON.stringify(newUser));

                    setUser(prev => ({ ...prev, ...(data.user as Record<string, unknown>) } as typeof prev));
                    if (preview) setPreview(null);
                    if (studentPhotoPreview) setStudentPhotoPreview(null);
                    window.dispatchEvent(new Event("storage"));
                    setIsEditing(false);
                }
            } else {
                console.error("Failed to save profile");
                alert("Failed to save profile. Please try again.");
            }
        } catch (error) {
            console.error("Error saving profile:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-white mb-8">My Profile</h1>

            {loadError ? (
                <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-4 py-3 rounded-xl text-sm">
                    {loadError}
                </div>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="md:col-span-1">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-indigo-600/20 to-transparent" />

                        <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-slate-800 shadow-xl overflow-hidden bg-slate-800 relative">
                                <Image
                                    src={preview || user.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Xamsathi"}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                                {isEditing && (
                                    <div {...getRootProps()} className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                                        <input
                                            {...getInputProps()}
                                            ref={(el) => {
                                                fileInputRef.current = el;
                                            }}
                                        />
                                        <Camera className="w-8 h-8 text-white" />
                                    </div>
                                )}
                            </div>
                            {isEditing && (
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    aria-label="Upload photo"
                                    className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full border-4 border-slate-900 shadow-lg hover:bg-indigo-500 transition-colors"
                                >
                                    <Camera className="w-4 h-4 text-white" />
                                </button>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
                        <p className="text-indigo-400 font-medium text-sm mb-4">{user.course || ""}</p>

                        <div className="w-full space-y-3">
                            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-800">
                                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">Rank</span>
                                <span className="text-white font-bold">#12</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-800">
                                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">Tests Taken</span>
                                <span className="text-white font-bold">8</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Form */}
                <div className="md:col-span-2">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <User className="w-5 h-5 text-indigo-500" /> Personal Details
                            </h3>
                            <button
                                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                disabled={isLoading}
                                className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${isEditing
                                    ? "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20"
                                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600"
                                    }`}
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : isEditing ? "Save Changes" : "Edit Profile"}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="profile_name" className="text-sm font-medium text-slate-400">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        id="profile_name"
                                        type="text"
                                        disabled={!isEditing}
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="profile_email" className="text-sm font-medium text-slate-400">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        id="profile_email"
                                        type="email"
                                        disabled={true} // Email usually not editable directly
                                        value={user.email}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-400 cursor-not-allowed"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="profile_phone" className="text-sm font-medium text-slate-400">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        id="profile_phone"
                                        type="tel"
                                        disabled={!isEditing}
                                        value={user.phone}
                                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="profile_class_grade" className="text-sm font-medium text-slate-400">Class / Grade</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <select
                                        id="profile_class_grade"
                                        disabled={!isEditing}
                                        value={String(user.class_grade)}
                                        onChange={(e) => setUser({ ...user, class_grade: Number(e.target.value) })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i + 1} value={String(i + 1)}>
                                                Class {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-2 space-y-2">
                                <label htmlFor="profile_bio" className="text-sm font-medium text-slate-400">Bio</label>
                                <textarea
                                    id="profile_bio"
                                    disabled={!isEditing}
                                    value={user.bio}
                                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                                    rows={3}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all resize-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="profile_target_exam" className="text-sm font-medium text-slate-400">Target Exam</label>
                                <select
                                    id="profile_target_exam"
                                    disabled={!isEditing}
                                    value={user.target_exam}
                                    onChange={(e) => setUser({ ...user, target_exam: e.target.value as TargetExam })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <option value="cbse">CBSE</option>
                                    <option value="neet">NEET</option>
                                    <option value="jee">JEE</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="profile_stream" className="text-sm font-medium text-slate-400">Stream</label>
                                <select
                                    id="profile_stream"
                                    disabled={!isEditing}
                                    value={user.stream}
                                    onChange={(e) => setUser({ ...user, stream: e.target.value as Stream })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <option value="na">N/A</option>
                                    <option value="pcm">PCM</option>
                                    <option value="pcb">PCB</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="arts">Arts</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="profile_medium" className="text-sm font-medium text-slate-400">Medium</label>
                                <select
                                    id="profile_medium"
                                    disabled={!isEditing}
                                    value={user.medium}
                                    onChange={(e) => setUser({ ...user, medium: e.target.value as Medium })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="profile_school" className="text-sm font-medium text-slate-400">School</label>
                                <input
                                    id="profile_school"
                                    type="text"
                                    disabled={!isEditing}
                                    value={user.school}
                                    onChange={(e) => setUser({ ...user, school: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="profile_city" className="text-sm font-medium text-slate-400">City</label>
                                <input
                                    id="profile_city"
                                    type="text"
                                    disabled={!isEditing}
                                    value={user.city}
                                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="profile_guardian_phone" className="text-sm font-medium text-slate-400">Guardian Phone</label>
                                <input
                                    id="profile_guardian_phone"
                                    type="tel"
                                    disabled={!isEditing}
                                    value={user.guardian_phone}
                                    onChange={(e) => setUser({ ...user, guardian_phone: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                />
                            </div>
                        </div>

                        {isEditing && (
                            <div className="mt-8 p-4 bg-indigo-900/20 border border-indigo-500/20 rounded-xl flex items-start gap-3">
                                <div className="p-2 bg-indigo-500/20 rounded-lg shrink-0">
                                    <Upload className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-indigo-300 font-bold text-sm mb-1">Upload Student Photo</h4>
                                    <p className="text-indigo-200/60 text-xs mb-3">
                                        Drag and drop or click to upload student photo. This will be used on Leaderboard.
                                    </p>
                                    <div
                                        {...getStudentPhotoRootProps()}
                                        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${isStudentPhotoDragActive ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800'}`}
                                    >
                                        <input
                                            {...getStudentPhotoInputProps()}
                                            ref={(el) => {
                                                studentPhotoInputRef.current = el;
                                            }}
                                        />
                                        <div className="flex flex-col items-center gap-2">
                                            <Camera className="w-8 h-8 text-slate-500" />
                                            <span className="text-slate-400 text-sm">Drop image here or click to browse</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                                            <Image
                                                src={studentPhotoPreview || user.student_photo || "https://api.dicebear.com/7.x/identicon/svg?seed=Student"}
                                                alt="Student photo"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
