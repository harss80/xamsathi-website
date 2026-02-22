
// Utility to load Razorpay script
let razorpaySdkPromise: Promise<boolean> | null = null;

type RazorpayPaymentSuccessResponse = {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
};

type RazorpayPrefill = {
    name?: string;
    email?: string;
    contact?: string;
};

type RazorpayOptions = {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: RazorpayPaymentSuccessResponse) => void | Promise<void>;
    prefill?: RazorpayPrefill;
    theme?: { color?: string };
};

type RazorpayInstance = {
    open: () => void;
};

type RazorpayConstructor = {
    new (options: RazorpayOptions): RazorpayInstance;
};

const getRazorpay = (): RazorpayConstructor | null => {
    if (typeof window === "undefined") return null;
    const w = window as unknown as { Razorpay?: unknown };
    return (typeof w.Razorpay === "function") ? (w.Razorpay as RazorpayConstructor) : null;
};

const loadScriptOnce = (src: string) => {
    if (typeof window === "undefined") return Promise.resolve(false);
    if (getRazorpay()) return Promise.resolve(true);
    if (razorpaySdkPromise) return razorpaySdkPromise;

    razorpaySdkPromise = new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
        if (existing) {
            if (getRazorpay()) {
                resolve(true);
                return;
            }
            existing.addEventListener("load", () => resolve(true));
            existing.addEventListener("error", () => resolve(false));
            return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });

    return razorpaySdkPromise;
};

declare global {
    interface Window {
        Razorpay?: unknown;
    }
}

export const initiatePayment = async (
    userId: string,
    courseId: string,
    onSuccess: (paymentId: string) => void,
    onError: (err: unknown) => void
) => {
    try {
        const sdkPromise = loadScriptOnce("https://checkout.razorpay.com/v1/checkout.js");

        // 1. Create Order (in parallel with SDK load)
        const orderPromise = fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/payments/create-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-user-id": userId // Ideally use real auth token
            },
            body: JSON.stringify({
                courseId: courseId
            })
        });

        const [sdkOk, orderRes] = await Promise.all([sdkPromise, orderPromise]);

        if (!sdkOk) {
            onError("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const orderData = await orderRes.json().catch(() => ({} as unknown));
        if (!orderRes.ok) {
            const maybe = (orderData && typeof orderData === "object") ? (orderData as Record<string, unknown>) : {};
            const msg =
                (maybe["detail"] ? String(maybe["detail"]) : "") ||
                (maybe["details"] ? (typeof maybe["details"] === "string" ? String(maybe["details"]) : JSON.stringify(maybe["details"])) : "") ||
                (maybe["error"] ? String(maybe["error"]) : "") ||
                "Failed to create order";
            throw new Error(msg);
        }

        // 2. Open Razorpay Options
        const od = (orderData && typeof orderData === "object") ? (orderData as Record<string, unknown>) : {};
        const keyId = (process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || (typeof od["keyId"] === "string" ? od["keyId"] : "")).trim();
        const amount = typeof od["amount"] === "number" ? od["amount"] : Number(od["amount"]);
        const currency = typeof od["currency"] === "string" ? od["currency"] : "INR";
        const orderId = typeof od["orderId"] === "string" ? od["orderId"] : "";

        if (!keyId || !Number.isFinite(amount) || !orderId) {
            throw new Error("Invalid order response. Please try again.");
        }

        const options: RazorpayOptions = {
            key: keyId,
            amount,
            currency,
            name: "Xamsathi Test Series",
            description: "Xamsathi Test Series Purchase",
            order_id: orderId,
            handler: async function (response: RazorpayPaymentSuccessResponse) {
                // 3. Verify Payment
                try {
                    const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/payments/verify`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "x-user-id": userId
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            courseId: courseId
                        })
                    });

                    const verifyData = await verifyRes.json().catch(() => ({} as unknown));
                    if (verifyRes.ok && verifyData.success) {
                        onSuccess(response.razorpay_payment_id);
                    } else {
                        const v = (verifyData && typeof verifyData === "object") ? (verifyData as Record<string, unknown>) : {};
                        const msg =
                            (v["error"] ? String(v["error"]) : "") ||
                            (v["details"] ? (typeof v["details"] === "string" ? String(v["details"]) : JSON.stringify(v["details"])) : "") ||
                            "Signature verification failed";
                        onError(msg);
                    }
                } catch (verifyParamsErr) {
                    onError(verifyParamsErr);
                }
            },
            prefill: {
                name: "Student Name", // Optional: Fetch from user profile
                email: "student@example.com",
                contact: "9999999999"
            },
            theme: {
                color: "#6366f1"
            }
        };

        const RazorpayCtor = getRazorpay();
        if (!RazorpayCtor) {
            onError("Razorpay SDK not available. Please refresh and try again.");
            return;
        }

        const paymentObject = new RazorpayCtor(options);
        paymentObject.open();

    } catch (err) {
        console.error("Payment Error:", err);
        onError(err);
    }
};

export const preloadRazorpay = async () => {
    try {
        await loadScriptOnce("https://checkout.razorpay.com/v1/checkout.js");
    } catch {
        // ignore
    }
};
