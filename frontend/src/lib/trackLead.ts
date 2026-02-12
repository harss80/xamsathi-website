type TrackLeadPayload = {
  user_id?: string;
  action: string;
  entity_type?: string;
  entity_id?: string;
  path?: string;
  referrer?: string;
  meta?: Record<string, unknown>;
};

export function trackLead(payload: TrackLeadPayload) {
  try {
    const inferredUserId = (() => {
      try {
        if (typeof window === 'undefined') return undefined;
        const raw = localStorage.getItem('xamsathi_user');
        if (!raw) return undefined;
        const parsed = JSON.parse(raw) as Record<string, unknown>;
        const id =
          (typeof parsed.id === 'string' && parsed.id) ||
          (typeof parsed._id === 'string' && parsed._id) ||
          (typeof parsed.userId === 'string' && parsed.userId) ||
          undefined;
        return id;
      } catch {
        return undefined;
      }
    })();

    const body = JSON.stringify({
      ...payload,
      user_id: payload.user_id || inferredUserId,
      path: payload.path || (typeof window !== "undefined" ? window.location.pathname : undefined),
      referrer: payload.referrer || (typeof document !== "undefined" ? document.referrer : undefined),
    });

    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/track/lead", blob);
      return;
    }

    fetch("/api/track/lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {}
}
