
export function getBackendBase(): string {
    const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "").trim();
    if (envBase) return envBase;

    if (typeof window !== "undefined") {
        const host = window.location.hostname;
        if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
    }

    // In production, we don't want to default to localhost.
    // If we're here, it means the developer forgot to set the environment variable.
    // We should probably return "" so it uses relative path (if there's a proxy)
    // or fail clearly.
    return "";
}
