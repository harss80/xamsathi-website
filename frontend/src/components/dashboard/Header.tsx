"use client";

import { Bell, Search, Menu, User } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
    onMenuClick: () => void;
    user: {
        name: string;
        course: string;
        avatar: string;
    };
}

export default function Header({ onMenuClick, user }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 lg:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Search Bar - Hidden on small mobile */}
                <div className="relative group hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search for tests, courses..."
                        className="bg-slate-800/50 border border-slate-700 text-sm text-slate-200 rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-white leading-none">{user.name}</p>
                        <p className="text-xs text-indigo-400 mt-1">{user.course}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 cursor-pointer">
                        {user.avatar ? (
                            <Image
                                src={user.avatar}
                                alt="Profile"
                                width={36}
                                height={36}
                                className="w-full h-full rounded-full bg-slate-900 object-cover"
                            />
                        ) : (
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
