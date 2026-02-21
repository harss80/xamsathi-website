
// Utility to load Razorpay script
const loadScript = (src: string) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

declare global {
    interface Window {
        Razorpay: any;
    }
}

export const initiatePayment = async (
    userId: string,
    courseId: string,
    onSuccess: (paymentId: string) => void,
    onError: (err: any) => void
) => {
    try {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            onError("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // 1. Create Order
        const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/payments/create-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-user-id": userId // Ideally use real auth token
            },
            body: JSON.stringify({
                courseId: courseId
            })
        });

        const orderData = await orderRes.json().catch(() => ({} as any));
        if (!orderRes.ok) {
            const msg =
                (orderData?.detail && String(orderData.detail)) ||
                (orderData?.details && (typeof orderData.details === "string" ? orderData.details : JSON.stringify(orderData.details))) ||
                (orderData?.error && String(orderData.error)) ||
                "Failed to create order";
            throw new Error(msg);
        }

        // 2. Open Razorpay Options
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || orderData.keyId,
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Eduman Premium Series",
            description: "Test Series Subscription",
            order_id: orderData.orderId,
            handler: async function (response: any) {
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

                    const verifyData = await verifyRes.json().catch(() => ({} as any));
                    if (verifyRes.ok && verifyData.success) {
                        onSuccess(response.razorpay_payment_id);
                    } else {
                        const msg =
                            (verifyData?.error && String(verifyData.error)) ||
                            (verifyData?.details && (typeof verifyData.details === "string" ? verifyData.details : JSON.stringify(verifyData.details))) ||
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

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    } catch (err) {
        console.error("Payment Error:", err);
        onError(err);
    }
};
