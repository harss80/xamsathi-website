"use client";

import { useState, useRef, useEffect } from "react";
import { User, Camera, Mail, Phone, MapPin, School, BookOpen, Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function ProfilePage() {
    const [user, setUser] = useState({
        name: "Harsh Budhauliya",
        email: "harsh@example.com",
        phone: "+91 98765 43210",
        course: "JEE Advanced 2026",
        class_grade: 11,
        school: "Delhi Public School",
        bio: "Aspiring Engineer. Physics Enthusiast. Aiming for IIT Bombay.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh"
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    // Mock loading user data (in real app, fetch from API)
    useEffect(() => {
        const savedUser = localStorage.getItem("xamsathi_user");
        if (savedUser) {
            try {
                const parsed = JSON.parse(savedUser);
                setUser((prev) => {
                    const next: any = { ...prev, ...parsed };
                    const cg = parsed?.class_grade;
                    if (typeof cg === "number") next.class_grade = cg;
                    else if (typeof cg === "string") {
                        const n = Number(String(cg).replace(/[^0-9]/g, ""));
                        if (!Number.isNaN(n) && n >= 1 && n <= 12) next.class_grade = n;
                    }
                    return next;
                });
            } catch { }
        }
    }, []);

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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.png', '.jpg', '.webp']
        },
        maxFiles: 1
    });

    const handleSave = async () => {
        setIsLoading(true);

        try {
            // Get user token/id from localStorage if using token authentication
            const token = localStorage.getItem("xamsathi_token") || localStorage.getItem("token") || "";
            // Also need User ID if passed in headers, though usually token is enough. 
            // In existing frontend code, we saw x-user-id header usage.
            // Let's grab user id from localStorage "xamsathi_user" -> "id" or "_id"
            const savedUserStr = localStorage.getItem("xamsathi_user");
            let userId = "";
            if (savedUserStr) {
                const parsed = JSON.parse(savedUserStr);
                userId = parsed.id || parsed._id || parsed.user_id;
            }

            const getBackendBase = () => {
                const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
                if (envBase) return envBase;
                if (typeof window !== "undefined") {
                    const host = window.location.hostname;
                    if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
                }
                return "http://localhost:3001";
            };

            const base = getBackendBase();
            const payload: any = { ...user };
            if (preview) {
                payload.avatar = preview; // Preview is the Data URL (Base64)
            }

            const res = await fetch(`${base}/api/me/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": userId || "", // Headers based on existing backend logic
                    "Authorization": token ? `Bearer ${token}` : ""
                },
                body: JSON.stringify({
                    name: user.name,
                    phone: user.phone,
                    class_grade: Number(user.class_grade),
                    bio: user.bio,
                    avatar: preview || user.avatar
                })
            });

            if (res.ok) {
                const data = await res.json();
                if (data.user) {
                    // Update local storage
                    const newUser = { ...JSON.parse(localStorage.getItem("xamsathi_user") || "{}"), ...data.user };
                    // Ensure avatar is updated
                    if (data.user.avatar) newUser.avatar = data.user.avatar;
                    localStorage.setItem("xamsathi_user", JSON.stringify(newUser));

                    setUser(prev => ({ ...prev, avatar: data.user.avatar, name: data.user.name }));
                    if (preview) setPreview(null);
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="md:col-span-1">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-indigo-600/20 to-transparent" />

                        <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-slate-800 shadow-xl overflow-hidden bg-slate-800 relative">
                                <Image
                                    src={preview || user.avatar}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                                {isEditing && (
                                    <div {...getRootProps()} className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                                        <input {...getInputProps()} />
                                        <Camera className="w-8 h-8 text-white" />
                                    </div>
                                )}
                            </div>
                            {isEditing && (
                                <button {...getRootProps()} className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full border-4 border-slate-900 shadow-lg hover:bg-indigo-500 transition-colors">
                                    <input {...getInputProps()} />
                                    <Camera className="w-4 h-4 text-white" />
                                </button>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
                        <p className="text-indigo-400 font-medium text-sm mb-4">{user.course}</p>

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
                        </div>

                        {isEditing && (
                            <div className="mt-8 p-4 bg-indigo-900/20 border border-indigo-500/20 rounded-xl flex items-start gap-3">
                                <div className="p-2 bg-indigo-500/20 rounded-lg shrink-0">
                                    <Upload className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-indigo-300 font-bold text-sm mb-1">Upload Profile Photo</h4>
                                    <p className="text-indigo-200/60 text-xs mb-3">
                                        Drag and drop or click to upload a new profile picture. This will be visible on the Leaderboard.
                                    </p>
                                    <div
                                        {...getRootProps()}
                                        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${isDragActive ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800'}`}
                                    >
                                        <input {...getInputProps()} />
                                        <div className="flex flex-col items-center gap-2">
                                            <Camera className="w-8 h-8 text-slate-500" />
                                            <span className="text-slate-400 text-sm">Drop image here or click to browse</span>
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
