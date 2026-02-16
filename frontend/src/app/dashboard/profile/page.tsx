"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Camera, Mail, Phone, BookOpen, Upload, Loader2,
    MapPin, School, GraduationCap, Shield, Edit3, Save, X,
    Star, Target, Trophy, Clock, ChevronDown, MessageCircle
} from "lucide-react";
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
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result as string;
                if (base64String.length > 500 * 1024) {
                    alert("Image too large (max 500KB)");
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
            if (base64String.length > 5 * 1024 * 1024) {
                alert("Image too large (max 5MB)");
                return;
            }
            setStudentPhotoPreview(base64String);
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.webp'] },
        maxFiles: 1
    });

    const {
        getRootProps: getStudentPhotoRootProps,
        getInputProps: getStudentPhotoInputProps,
    } = useDropzone({
        onDrop: onDropStudentPhoto,
        accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.webp'] },
        maxFiles: 1,
    });

    const handleSave = async () => {
        setIsLoading(true);
        try {
            if (!userId) return;
            const base = getBackendBase();
            const res = await fetch(`${base}/api/me/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": userId,
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    ...user,
                    class_grade: Number(user.class_grade),
                    avatar: preview || user.avatar,
                    student_photo: studentPhotoPreview || user.student_photo,
                })
            });

            if (res.ok) {
                const data = await res.json();
                if (data.user) {
                    const newUser = { ...JSON.parse(localStorage.getItem("xamsathi_user") || "{}"), ...data.user };
                    localStorage.setItem("xamsathi_user", JSON.stringify(newUser));
                    setUser(prev => ({ ...prev, ...data.user }));
                    setPreview(null);
                    setStudentPhotoPreview(null);
                    window.dispatchEvent(new Event("storage"));
                    setIsEditing(false);
                }
            } else {
                alert("Failed to save changes");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pb-20 px-4 md:px-0">
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 pt-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-1"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Profile</span>
                        </h1>
                        <p className="text-slate-400 font-medium">Manage your educational journey and preferences.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex gap-3"
                    >
                        <AnimatePresence mode="wait">
                            {isEditing ? (
                                <motion.div
                                    key="editing-btns"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex gap-3"
                                >
                                    <button
                                        onClick={() => {
                                            setIsEditing(false);
                                            setPreview(null);
                                            setStudentPhotoPreview(null);
                                        }}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-all border border-slate-700"
                                    >
                                        <X className="w-4 h-4" /> Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={isLoading}
                                        className="flex items-center gap-2 px-8 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/25 text-white font-bold transition-all active:scale-95 disabled:opacity-50"
                                    >
                                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4" /> Save Changes</>}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.button
                                    key="edit-btn"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center gap-2 px-8 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold transition-all border border-white/10 hover:border-white/20 active:scale-95"
                                >
                                    <Edit3 className="w-4 h-4 text-indigo-400" /> Edit Profile
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {loadError && (
                    <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm font-medium flex items-center gap-2">
                        <Shield className="w-4 h-4" /> {loadError}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side: Identity Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
                            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-600/10 to-transparent" />

                            <div className="relative flex flex-col items-center">
                                <div className="relative mb-6">
                                    <div className="w-36 h-36 rounded-full border-[6px] border-slate-900/50 shadow-2xl overflow-hidden bg-slate-800 relative ring-1 ring-white/10">
                                        <Image
                                            src={preview || user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name || 'Xamsathi'}`}
                                            alt={user.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <AnimatePresence>
                                            {isEditing && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute inset-0 z-20"
                                                >
                                                    <div
                                                        {...getRootProps()}
                                                        className="w-full h-full bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer group/upload"
                                                    >
                                                        <input {...getInputProps()} ref={fileInputRef} />
                                                        <Camera className="w-8 h-8 text-white mb-2 group-hover/upload:scale-110 transition-transform" />
                                                        <span className="text-[10px] font-black uppercase tracking-tighter text-white/70">Change Photo</span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {!isEditing && (
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-xl">
                                            <Shield className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>

                                <h2 className="text-2xl font-black text-white text-center mb-1">{user.name || "Set your name"}</h2>
                                <p className="text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-6">{user.target_exam || "Aspirant"}</p>

                                <div className="w-full grid grid-cols-2 gap-3">
                                    <div className="p-4 rounded-3xl bg-white/5 border border-white/5 text-center">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Board Rank</div>
                                        <div className="text-xl font-black text-white flex items-center justify-center gap-1">
                                            <Trophy className="w-4 h-4 text-amber-500" /> #12
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-3xl bg-white/5 border border-white/5 text-center">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">XP Points</div>
                                        <div className="text-xl font-black text-white flex items-center justify-center gap-1">
                                            <Star className="w-4 h-4 text-indigo-400 fill-indigo-400/20" /> 2.5k
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats Card */}
                        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8">
                            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Activity Stats
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Tests Completed", val: "8", icon: Target, color: "text-emerald-400" },
                                    { label: "Average Accuracy", val: "84%", icon: Star, color: "text-indigo-400" },
                                    { label: "Study Streak", val: "5 Days", icon: Trophy, color: "text-amber-400" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                            <span className="text-sm font-bold text-slate-300">{stat.label}</span>
                                        </div>
                                        <span className="text-white font-black">{stat.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Detailed Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Basic Info Section */}
                                <div className="md:col-span-2">
                                    <h3 className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                        <User className="w-3 h-3" /> Basic Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <ProfileInput
                                            label="Full Name"
                                            icon={User}
                                            value={user.name}
                                            disabled={!isEditing}
                                            onChange={(v) => setUser({ ...user, name: v })}
                                        />
                                        <ProfileInput
                                            label="Email Address"
                                            icon={Mail}
                                            value={user.email}
                                            disabled={true}
                                        />
                                        <ProfileInput
                                            label="Phone Number"
                                            icon={Phone}
                                            value={user.phone}
                                            disabled={!isEditing}
                                            onChange={(v) => setUser({ ...user, phone: v })}
                                        />
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Class / Grade</label>
                                            <div className="relative group">
                                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500/50 group-focus-within:text-indigo-400 transition-colors" />
                                                <select
                                                    disabled={!isEditing}
                                                    value={String(user.class_grade)}
                                                    onChange={(e) => setUser({ ...user, class_grade: Number(e.target.value) })}
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-sm font-bold focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all appearance-none outline-none"
                                                >
                                                    {[...Array(12)].map((_, i) => (
                                                        <option key={i + 1} value={String(i + 1)} className="bg-slate-900">Class {i + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Deep Info Section */}
                                <div className="md:col-span-2 mt-8">
                                    <h3 className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                        <BookOpen className="w-3 h-3" /> Academic Preferences
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <ProfileSelect
                                            label="Target Exam"
                                            icon={Target}
                                            value={user.target_exam}
                                            disabled={!isEditing}
                                            options={[{ v: 'cbse', l: 'CBSE' }, { v: 'neet', l: 'NEET' }, { v: 'jee', l: 'JEE' }, { v: 'other', l: 'Other' }]}
                                            onChange={(v) => setUser({ ...user, target_exam: v as TargetExam })}
                                        />
                                        <ProfileSelect
                                            label="Stream"
                                            icon={BookOpen}
                                            value={user.stream}
                                            disabled={!isEditing}
                                            options={[{ v: 'na', l: 'N/A' }, { v: 'pcm', l: 'PCM' }, { v: 'pcb', l: 'PCB' }, { v: 'commerce', l: 'Commerce' }, { v: 'arts', l: 'Arts' }]}
                                            onChange={(v) => setUser({ ...user, stream: v as Stream })}
                                        />
                                        <ProfileSelect
                                            label="Medium"
                                            icon={MessageCircle}
                                            value={user.medium}
                                            disabled={!isEditing}
                                            options={[{ v: 'english', l: 'English' }, { v: 'hindi', l: 'Hindi' }, { v: 'other', l: 'Other' }]}
                                            onChange={(v) => setUser({ ...user, medium: v as Medium })}
                                        />
                                        <ProfileInput
                                            label="School Name"
                                            icon={School}
                                            value={user.school}
                                            disabled={!isEditing}
                                            onChange={(v) => setUser({ ...user, school: v })}
                                        />
                                        <ProfileInput
                                            label="City"
                                            icon={MapPin}
                                            value={user.city}
                                            disabled={!isEditing}
                                            onChange={(v) => setUser({ ...user, city: v })}
                                        />
                                        <ProfileInput
                                            label="Guardian Phone"
                                            icon={Phone}
                                            value={user.guardian_phone}
                                            disabled={!isEditing}
                                            onChange={(v) => setUser({ ...user, guardian_phone: v })}
                                        />
                                    </div>
                                </div>

                                {/* Bio Section */}
                                <div className="md:col-span-2 mt-8">
                                    <h3 className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                                        <Edit3 className="w-3 h-3" /> Bio & About
                                    </h3>
                                    <textarea
                                        disabled={!isEditing}
                                        value={user.bio}
                                        onChange={(e) => setUser({ ...user, bio: e.target.value })}
                                        rows={4}
                                        placeholder="Tell us about yourself..."
                                        className="w-full bg-white/5 border border-white/5 rounded-3xl py-6 px-6 text-white text-sm font-medium focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all outline-none resize-none"
                                    />
                                </div>

                                {/* Official Student Photo Card (Special Upload) */}
                                <AnimatePresence>
                                    {isEditing && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="md:col-span-2 mt-8 overflow-hidden"
                                        >
                                            <div className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-[2.5rem] relative">
                                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                                    <div className="space-y-4 flex-1">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                                                <Upload className="w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white font-black text-lg">Official Student Photo</h4>
                                                                <p className="text-slate-400 text-xs font-medium">This photo will represent you on global leaderboards.</p>
                                                            </div>
                                                        </div>

                                                        <div
                                                            {...getStudentPhotoRootProps()}
                                                            className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center cursor-pointer hover:border-indigo-500/50 hover:bg-white/5 transition-all group/official"
                                                        >
                                                            <input {...getStudentPhotoInputProps()} ref={studentPhotoInputRef} />
                                                            <div className="flex flex-col items-center gap-2">
                                                                <Camera className="w-10 h-10 text-slate-600 group-hover/official:text-indigo-400 transition-colors" />
                                                                <span className="text-slate-400 text-sm font-bold">Drop your formal photo here or browse</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="shrink-0">
                                                        <div className="relative w-40 h-40 rounded-[2rem] overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
                                                            <Image
                                                                src={studentPhotoPreview || user.student_photo || "https://api.dicebear.com/7.x/pixel-art/svg?seed=Formal"}
                                                                alt="Student photo preview"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                            {studentPhotoPreview && (
                                                                <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay" />
                                                            )}
                                                        </div>
                                                        <p className="text-[10px] text-center mt-3 font-black uppercase text-indigo-400 tracking-widest">Preview</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// --- Internal Components ---

interface ProfileInputProps {
    label: string;
    icon: any;
    value: string;
    onChange?: (v: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

function ProfileInput({ label, icon: Icon, value, onChange, placeholder, disabled }: ProfileInputProps) {
    return (
        <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
            <div className="relative group">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500/50 group-focus-within:text-indigo-400 transition-colors" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={disabled}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-sm font-bold placeholder:text-slate-600 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all outline-none"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

interface ProfileSelectProps {
    label: string;
    icon: any;
    value: string;
    options: Array<{ v: string | number; l: string }>;
    onChange?: (v: string) => void;
    disabled?: boolean;
}

function ProfileSelect({ label, icon: Icon, value, options, onChange, disabled }: ProfileSelectProps) {
    return (
        <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
            <div className="relative group">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500/50 group-focus-within:text-indigo-400 transition-colors" />
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={disabled}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-sm font-bold focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all appearance-none outline-none"
                >
                    {options.map((opt) => (
                        <option key={opt.v} value={opt.v} className="bg-slate-900 text-white">{opt.l}</option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}

