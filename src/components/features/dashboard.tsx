"use client";

import * as React from "react";
import { getRamadhanSchedule, type ScheduleData } from "@/lib/api";
import { INDONESIAN_CITIES, type City } from "@/lib/cities";
import { HeroSection } from "@/components/features/hero-section";
import { PrayerTimesGrid } from "@/components/features/prayer-times-grid";
import { MonthlyView } from "@/components/features/monthly-view";
import { BlogSection } from "@/components/features/blog-section";
import { RamadhanProgress } from "@/components/features/ramadhan-progress";
import { useNotificationScheduler } from "@/hooks/use-notification-scheduler";
import { motion } from "framer-motion";

function parseTime(timeStr: string): [number, number] {
    const clean = timeStr.split(" ")[0];
    const [h, m] = clean.split(":").map(Number);
    return [h, m];
}

function formatTime(h: number, m: number): string {
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

export default function Dashboard() {
    const [location, setLocation] = React.useState<City>(INDONESIAN_CITIES[0]);
    const [schedule, setSchedule] = React.useState<ScheduleData[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [todaySchedule, setTodaySchedule] = React.useState<ScheduleData | null>(null);

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await getRamadhanSchedule(location.lat, location.lng);
            setSchedule(data);

            const now = new Date();
            const todayDay = now.getDate();
            const todayMonth = now.getMonth() + 1;
            const today = data.find(
                (d) =>
                    parseInt(d.date.gregorian.day) === todayDay &&
                    d.date.gregorian.month.number === todayMonth
            );
            setTodaySchedule(today || null);
            setLoading(false);
        }
        fetchData();
    }, [location]);

    // Notification scheduler
    useNotificationScheduler(todaySchedule?.timings ?? null);

    // Compute next prayer with interval
    const [tick, setTick] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => setTick((t) => t + 1), 60000);
        return () => clearInterval(interval);
    }, []);

    const nextPrayer = React.useMemo(() => {
        if (!todaySchedule) return { name: "...", time: "00:00" };
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const prayers = [
            { name: "Imsak", key: "Imsak" },
            { name: "Subuh", key: "Fajr" },
            { name: "Dzuhur", key: "Dhuhr" },
            { name: "Ashar", key: "Asr" },
            { name: "Maghrib", key: "Maghrib" },
            { name: "Isya", key: "Isha" },
        ];
        for (const p of prayers) {
            const [h, m] = parseTime(todaySchedule.timings[p.key]);
            if (h * 60 + m > currentMinutes) {
                return { name: p.name, time: formatTime(h, m) };
            }
        }
        const [fh, fm] = parseTime(todaySchedule.timings.Imsak);
        return { name: "Imsak (Besok)", time: formatTime(fh, fm) };
    }, [todaySchedule, tick]);

    const hijriString = todaySchedule
        ? `${todaySchedule.date.hijri.day} ${todaySchedule.date.hijri.month.en} ${todaySchedule.date.hijri.year} H`
        : undefined;

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
                    <p className="text-xs text-gray-400">Memuat jadwal...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12 pb-16">
            {/* Hero */}
            <HeroSection
                location={location}
                onLocationChange={setLocation}
                nextPrayerName={nextPrayer.name}
                nextPrayerTime={nextPrayer.time}
                hijriString={hijriString}
            />

            {/* Prayer Times Grid */}
            {todaySchedule && (
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto px-4 md:px-6"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-5 bg-gray-900 rounded-full" />
                        <h2 className="text-lg font-bold text-gray-900">Waktu Sholat Hari Ini</h2>
                    </div>
                    <PrayerTimesGrid timings={todaySchedule.timings} />
                </motion.section>
            )}

            {/* Ramadhan Progress */}
            <section className="container mx-auto px-4 md:px-6">
                <RamadhanProgress />
            </section>

            {/* Monthly Preview (10 days) */}
            <section className="container mx-auto px-4 md:px-6">
                <MonthlyView schedule={schedule} preview={true} />
            </section>

            {/* Blog */}
            <section className="container mx-auto px-4 md:px-6">
                <BlogSection />
            </section>
        </div>
    );
}
