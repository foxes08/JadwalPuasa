"use client";

import * as React from "react";
import { Bell, BellOff, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationPrefs {
    enabled: boolean;
    reminderMinutes: number;
    prayers: {
        imsak: boolean;
        subuh: boolean;
        dzuhur: boolean;
        ashar: boolean;
        maghrib: boolean;
        isya: boolean;
    };
}

const DEFAULT_PREFS: NotificationPrefs = {
    enabled: false,
    reminderMinutes: 10,
    prayers: {
        imsak: true,
        subuh: true,
        dzuhur: false,
        ashar: false,
        maghrib: true,
        isya: false,
    },
};

const PRAYER_LABELS: Record<string, string> = {
    imsak: "Imsak",
    subuh: "Subuh",
    dzuhur: "Dzuhur",
    ashar: "Ashar",
    maghrib: "Maghrib",
    isya: "Isya",
};

function loadPrefs(): NotificationPrefs {
    if (typeof window === "undefined") return DEFAULT_PREFS;
    try {
        const saved = localStorage.getItem("notification-prefs");
        if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_PREFS;
}

function savePrefs(prefs: NotificationPrefs) {
    localStorage.setItem("notification-prefs", JSON.stringify(prefs));
}

export function NotificationSettings() {
    const [prefs, setPrefs] = React.useState<NotificationPrefs>(DEFAULT_PREFS);
    const [open, setOpen] = React.useState(false);
    const [permission, setPermission] = React.useState<NotificationPermission>("default");
    const panelRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setPrefs(loadPrefs());
        if ("Notification" in window) {
            setPermission(Notification.permission);
        }
    }, []);

    React.useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    async function handleToggleEnabled() {
        if (!prefs.enabled) {
            // Request permission
            if ("Notification" in window) {
                const perm = await Notification.requestPermission();
                setPermission(perm);
                if (perm !== "granted") return;
            }
            // Register service worker
            if ("serviceWorker" in navigator) {
                await navigator.serviceWorker.register("/sw.js");
            }
        }
        const updated = { ...prefs, enabled: !prefs.enabled };
        setPrefs(updated);
        savePrefs(updated);
    }

    function handleTogglePrayer(key: string) {
        const updated = {
            ...prefs,
            prayers: { ...prefs.prayers, [key]: !prefs.prayers[key as keyof typeof prefs.prayers] },
        };
        setPrefs(updated);
        savePrefs(updated);
    }

    function handleReminderChange(minutes: number) {
        const updated = { ...prefs, reminderMinutes: minutes };
        setPrefs(updated);
        savePrefs(updated);
    }

    const activeCount = Object.values(prefs.prayers).filter(Boolean).length;

    return (
        <div ref={panelRef} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                    prefs.enabled
                        ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                        : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                }`}
            >
                {prefs.enabled ? (
                    <Bell className="h-4 w-4" />
                ) : (
                    <BellOff className="h-4 w-4" />
                )}
                {prefs.enabled ? `Notifikasi (${activeCount})` : "Notifikasi"}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-50">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-bold text-gray-900">Pengingat Sholat</h4>
                                <button
                                    onClick={handleToggleEnabled}
                                    className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                                        prefs.enabled ? "bg-gray-900" : "bg-gray-200"
                                    }`}
                                >
                                    <span
                                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                                            prefs.enabled ? "translate-x-5" : ""
                                        }`}
                                    />
                                </button>
                            </div>
                            {permission === "denied" && (
                                <p className="text-[10px] text-red-400 mt-1">
                                    Notifikasi diblokir. Aktifkan di pengaturan browser.
                                </p>
                            )}
                            {prefs.enabled && (
                                <p className="text-[10px] text-gray-400 mt-1">
                                    Notifikasi aktif saat tab browser terbuka
                                </p>
                            )}
                        </div>

                        {prefs.enabled && (
                            <>
                                {/* Reminder timing */}
                                <div className="p-4 border-b border-gray-50">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="h-3 w-3 text-gray-400" />
                                        <span className="text-xs font-semibold text-gray-600">Ingatkan sebelum</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        {[5, 10, 15, 30].map((m) => (
                                            <button
                                                key={m}
                                                onClick={() => handleReminderChange(m)}
                                                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                                                    prefs.reminderMinutes === m
                                                        ? "bg-gray-900 text-white"
                                                        : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                                                }`}
                                            >
                                                {m} mnt
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Prayer toggles */}
                                <div className="p-2">
                                    {Object.entries(PRAYER_LABELS).map(([key, label]) => (
                                        <button
                                            key={key}
                                            onClick={() => handleTogglePrayer(key)}
                                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <span className={`text-sm ${
                                                prefs.prayers[key as keyof typeof prefs.prayers]
                                                    ? "font-semibold text-gray-900"
                                                    : "text-gray-400"
                                            }`}>
                                                {label}
                                            </span>
                                            <div
                                                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                                                    prefs.prayers[key as keyof typeof prefs.prayers]
                                                        ? "bg-gray-900 border-gray-900"
                                                        : "border-gray-200"
                                                }`}
                                            >
                                                {prefs.prayers[key as keyof typeof prefs.prayers] && (
                                                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
