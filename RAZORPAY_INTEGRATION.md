# Razorpay Integration Checklist & Guide

This guide helps you integrate Razorpay for your "Premium on a Budget" test series.
**Status:** Implementation Ready. Execute these steps once your Razorpay account is approved.

## 1. Razorpay Dashboard Setup (Once Approved)
- [ ] **Log in** to [Razorpay Dashboard](https://dashboard.razorpay.com/).
- [ ] **Generate Keys:**
    - Go to **Settings** -> **API Keys**.
    - Click **Generate Key**.
    - Copy `Key ID` and `Key Secret`.
- [ ] **Set Environment Variables:**
    - Add these to your `backend/.env` file:
      ```env
      RAZORPAY_KEY_ID=rzp_test_... (or rzp_live_...)
      RAZORPAY_KEY_SECRET=...
      RAZORPAY_WEBHOOK_SECRET=... (Create a strong random string yourself for now)
      ```
    - Add Key ID to `frontend/.env.local`:
      ```env
      NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
      ```

## 2. Webhook Setup (Crucial for Reliability)
Webhooks ensure that if a user closes the browser after payment but before your site updates, the backend still unlocks the course.
- [ ] Go to **Settings** -> **Webhooks**.
- [ ] Click **Add New Webhook**.
- [ ] **Webhook URL:** `https://your-api-domain.com/api/payments/webhook` (For local testing, use ngrok).
- [ ] **Secret:** Use the `RAZORPAY_WEBHOOK_SECRET` you defined in `.env`.
- [ ] **Active Events:** Check `order.paid` and `payment.captured`.

## 3. Launching the Integration (Code Steps)

### A. Backend (Install SDK)
You need to install the razorpay package in your backend.
```bash
cd backend
npm install razorpay
npm install @types/razorpay --save-dev
```

### B. Backend Routes (Implemented)
We have prepared `src/routes/payments.ts` which handles:
1.  `POST /create-order`: Creates an order on Razorpay servers.
2.  `POST /verify`: Verifies the signature sent by the frontend after success.
3.  `POST /webhook`: Handles async updates (optional strictly for MVP but recommended).

### C. Frontend (Checkout Flow)
Located in `src/lib/payment.ts` (or similar utility).
1.  Load Razorpay Script (`<script src="https://checkout.razorpay.com/v1/checkout.js"></script>`).
2.  Call `/api/payments/create-order` to get an `orderId`.
3.  Initialize `new window.Razorpay(options)` with `orderId` and your `Key ID`.
4.  On `handler` (success), call `/api/payments/verify`.

## 4. Testing (SandBox Mode)
- [ ] Ensure you are using `rzp_test_...` keys.
- [ ] Use Razorpay's **Test Card Details**:
    - Card Number: `4111 1111 1111 1111`
    - Expiry: Any future date
    - CVV: Any 3 digits
    - OTP: `123456`

## 5. Go Live
- [ ] Switch env variables to `rzp_live_...`.
- [ ] Verify Webhook URL is the production URL.
- [ ] Do a real transaction of ₹1 to verify.
