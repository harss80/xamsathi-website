type TrackLeadPayload = {
  action: string;
  entity_type?: string;
  entity_id?: string;
  path?: string;
  referrer?: string;
  meta?: Record<string, unknown>;
};

export function trackLead(payload: TrackLeadPayload) {
  try {
    const body = JSON.stringify({
      ...payload,
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
