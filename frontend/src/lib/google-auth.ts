// Google OAuth configuration
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
const REDIRECT_URI = typeof window !== 'undefined' ? `${window.location.origin}/api/auth/google/callback` : '';

export function initGoogleSignIn() {
  if (typeof window === 'undefined' || !window.google) return;

  window.google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleSignIn,
  });

  const buttonElement = document.getElementById('google-signin-button');
  if (buttonElement) {
    window.google.accounts.id.renderButton(
      buttonElement,
      {
        theme: 'filled_blue',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
      }
    );
  }
}

async function handleGoogleSignIn(response: any) {
  try {
    const base = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
    const url = new URL('/api/auth/google', base).toString();
    
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
    
    // Redirect to dashboard
    window.location.href = '/dashboard';
  } catch (error) {
    console.error('Google sign-in error:', error);
    alert('Google sign-in failed. Please try again.');
  }
}

// Load Google OAuth script
export function loadGoogleScript() {
  if (typeof window === 'undefined') return;
  
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  script.onload = initGoogleSignIn;
  document.head.appendChild(script);
}

// TypeScript declarations
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (element: HTMLElement, options: any) => void;
          prompt: () => void;
        };
      };
    };
  }
}
