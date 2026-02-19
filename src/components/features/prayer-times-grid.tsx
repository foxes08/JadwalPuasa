"use client";

import { motion } from "framer-motion";
import { type PrayerTimes } from "@/lib/api";

interface PrayerTimesGridProps {
    timings: PrayerTimes;
}

const PRAYER_ITEMS = [
    { key: "Imsak", label: "Imsak", icon: "🌙", description: "Berhenti makan & minum" },
    { key: "Fajr", label: "Subuh", icon: "🌅", description: "Sholat Subuh" },
    { key: "Sunrise", label: "Terbit", icon: "☀️", description: "Matahari terbit" },
    { key: "Dhuhr", label: "Dzuhur", icon: "🌤️", description: "Sholat Dzuhur" },
    { key: "Asr", label: "Ashar", icon: "⛅", description: "Sholat Ashar" },
    { key: "Maghrib", label: "Maghrib", icon: "🌇", description: "Berbuka puasa" },
    { key: "Isha", label: "Isya", icon: "🌃", description: "Sholat Isya" },
];

function cleanTime(time: string) {
    return time.split(" ")[0];
}

export function PrayerTimesGrid({ timings }: PrayerTimesGridProps) {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {PRAYER_ITEMS.map((item, idx) => (
                <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                    <div className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                        <span className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                            {item.icon}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                            {item.label}
                        </span>
                        <span className="text-xl md:text-2xl font-bold tabular-nums text-gray-900">
                            {cleanTime(timings[item.key])}
                        </span>
                        <span className="text-[10px] text-gray-300 mt-1 hidden md:block">
                            {item.description}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
