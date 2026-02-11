// Google OAuth configuration
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

function getBackendBase(): string {
  const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim();
  if (envBase) return envBase;
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') return 'http://localhost:3001';
  }
  throw new Error('Missing NEXT_PUBLIC_BACKEND_URL');
}

// Load Google OAuth script
export function loadGoogleScript(buttonIds?: string[]) {
  if (typeof window === 'undefined') return;

  // Check if script is already loaded
  if (document.querySelector('script[src="https://accounts.google.com/gsi/client"]')) {
    // If script is already loaded but button not rendered (e.g., navigation), try to init again
    initGoogleSignIn(buttonIds);
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  script.onload = () => initGoogleSignIn(buttonIds);
  document.head.appendChild(script);
}

export function initGoogleSignIn(buttonIds: string[] = ['google-signin-button']) {
  if (typeof window === 'undefined') return;
  const google = window.google;
  if (!google) return;

  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'your-google-client-id') {
    console.error('Google Client ID is missing or invalid in .env.local');
    // Optional: Show a visual error in the button placeholder
    buttonIds.forEach((id) => {
      const buttonElement = document.getElementById(id);
      if (buttonElement) {
        buttonElement.innerHTML = '<span style="color:red; font-size: 0.8rem;">Error: Missing Google Client ID</span>';
      }
    });
    return;
  }

  try {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleSignIn,
    });

    buttonIds.forEach((id) => {
      const buttonElement = document.getElementById(id);
      if (!buttonElement) return;
      buttonElement.innerHTML = '';
      google.accounts.id.renderButton(buttonElement, {
        theme: 'outline',
        size: 'large',
        text: 'continue_with',
        shape: 'pill',
      });
    });
  } catch (error) {
    console.error('Error initializing Google Sign-In:', error);
  }
}

type GoogleCredentialResponse = {
  credential?: string;
};

async function handleGoogleSignIn(response: GoogleCredentialResponse) {
  try {
    let base = '';
    try {
      base = getBackendBase();
    } catch (e) {
      const msg = e instanceof Error ? e.message : '';
      console.error('Google sign-in error:', e);
      if (msg.includes('NEXT_PUBLIC_BACKEND_URL')) {
        alert('Backend configuration missing. Please refresh after latest deployment.');
        return;
      }
      alert('Google sign-in failed. Please try again.');
      return;
    }
    const url = new URL('/api/auth/google', base).toString();
    if (!response.credential) throw new Error('Missing credential');

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: response.credential }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Google sign-in failed');
    }

    // Save token and user data
    localStorage.setItem('xamsathi_token', data.token);
    localStorage.setItem('xamsathi_user', JSON.stringify(data.user));

    try {
      const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:';
      const secure = isHttps ? '; Secure' : '';
      document.cookie = `xamsathi_token=${encodeURIComponent(data.token)}; Path=/; Domain=.xamsathi.in; Max-Age=${60 * 60 * 24 * 30}; SameSite=Lax${secure}`;
    } catch {}

    // Redirect to dashboard
    window.location.href = '/dashboard';
  } catch (error) {
    console.error('Google sign-in error:', error);
    alert('Google sign-in failed. Please try again.');
  }
}

// TypeScript declarations
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (r: GoogleCredentialResponse) => void }) => void;
          renderButton: (element: HTMLElement, options: Record<string, unknown>) => void;
          prompt: () => void;
        };
      };
    };
  }
}
