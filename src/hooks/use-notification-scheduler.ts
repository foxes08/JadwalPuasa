"use client";

import * as React from "react";

interface PrayerTimings {
    [key: string]: string;
}

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

const PRAYER_KEY_MAP: Record<string, string> = {
    imsak: "Imsak",
    subuh: "Fajr",
    dzuhur: "Dhuhr",
    ashar: "Asr",
    maghrib: "Maghrib",
    isya: "Isha",
};

const PRAYER_MESSAGES: Record<string, { emoji: string; message: string }> = {
    imsak: { emoji: "🌙", message: "Waktu Imsak sebentar lagi" },
    subuh: { emoji: "🕌", message: "Waktu Subuh sebentar lagi" },
    dzuhur: { emoji: "☀️", message: "Waktu Dzuhur sebentar lagi" },
    ashar: { emoji: "🌤️", message: "Waktu Ashar sebentar lagi" },
    maghrib: { emoji: "🌅", message: "Waktu berbuka puasa sebentar lagi" },
    isya: { emoji: "🌃", message: "Waktu Isya sebentar lagi" },
};

function parseTimeToMinutes(timeStr: string): number {
    const clean = timeStr.split(" ")[0];
    const [h, m] = clean.split(":").map(Number);
    return h * 60 + m;
}

function formatTime(timeStr: string): string {
    return timeStr.split(" ")[0];
}

export function useNotificationScheduler(timings: PrayerTimings | null) {
    const notifiedRef = React.useRef<Set<string>>(new Set());

    React.useEffect(() => {
        if (!timings) return;

        function getPrefs(): NotificationPrefs | null {
            try {
                const saved = localStorage.getItem("notification-prefs");
                if (saved) return JSON.parse(saved);
            } catch {}
            return null;
        }

        function checkAndNotify() {
            const prefs = getPrefs();
            if (!prefs || !prefs.enabled) return;
            if (typeof Notification === "undefined" || Notification.permission !== "granted") return;
            if (!timings) return;

            const now = new Date();
            const currentMinutes = now.getHours() * 60 + now.getMinutes();

            Object.entries(PRAYER_KEY_MAP).forEach(([prefKey, timingKey]) => {
                if (!prefs.prayers[prefKey as keyof typeof prefs.prayers]) return;

                const prayerTime = timings[timingKey];
                if (!prayerTime) return;

                const prayerMinutes = parseTimeToMinutes(prayerTime);
                const reminderTime = prayerMinutes - prefs.reminderMinutes;
                const notifId = `${prefKey}-${now.toDateString()}`;

                // Check if current time matches the reminder time (within 1 minute window)
                if (currentMinutes === reminderTime && !notifiedRef.current.has(notifId)) {
                    notifiedRef.current.add(notifId);

                    const info = PRAYER_MESSAGES[prefKey];
                    const title = `${info.emoji} ${info.message}`;
                    const body = `${prefs.reminderMinutes} menit menuju ${prefKey.charAt(0).toUpperCase() + prefKey.slice(1)} (${formatTime(prayerTime)} WIB)`;

                    // Try Service Worker notification first (works in background)
                    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
                        navigator.serviceWorker.controller.postMessage({
                            type: "SHOW_NOTIFICATION",
                            title,
                            body,
                            tag: notifId,
                        });
                    } else {
                        // Fallback to basic notification
                        new Notification(title, { body, tag: notifId });
                    }
                }
            });
        }

        // Check every 30 seconds
        const interval = setInterval(checkAndNotify, 30000);
        checkAndNotify(); // initial check

        return () => clearInterval(interval);
    }, [timings]);
}
