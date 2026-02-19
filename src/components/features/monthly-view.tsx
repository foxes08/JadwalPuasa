"use client";

import * as React from "react";
import { type ScheduleData } from "@/lib/api";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MonthlyViewProps {
    schedule: ScheduleData[];
    preview?: boolean;
}

function cleanTime(t: string) {
    return t.split(" ")[0];
}

export function MonthlyView({ schedule, preview = false }: MonthlyViewProps) {
    if (!schedule || schedule.length === 0) return null;

    const [now, setNow] = React.useState(new Date());

    React.useEffect(() => {
        // Update date every minute
        const interval = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(interval);
    }, []);

    const todayDay = now.getDate();
    const todayMonth = now.getMonth() + 1;

    // If preview mode, find today's index and show 10 days from there
    let displaySchedule = schedule;
    if (preview) {
        const todayIdx = schedule.findIndex(
            (d) =>
                parseInt(d.date.gregorian.day) === todayDay &&
                d.date.gregorian.month.number === todayMonth
        );
        const startIdx = Math.max(0, todayIdx);
        displaySchedule = schedule.slice(startIdx, startIdx + 10);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
        >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-50">
                        <Calendar className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            {preview ? "Jadwal 10 Hari" : "Jadwal Ramadhan 1447 H"}
                        </h2>
                        <p className="text-xs text-gray-400">
                            {preview
                                ? "Hari ini dan 9 hari ke depan"
                                : `19 Februari – 20 Maret 2026 (${schedule.length} hari)`}
                        </p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-50 bg-gray-50/50">
                            <th className="px-4 py-3 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest w-16">
                                Hari
                            </th>
                            <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                Tanggal
                            </th>
                            <th className="px-4 py-3 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                Imsak
                            </th>
                            <th className="px-4 py-3 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                Subuh
                            </th>
                            <th className="px-4 py-3 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                Dzuhur
                            </th>
                            <th className="px-4 py-3 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                Ashar
                            </th>
                            <th className="px-4 py-3 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                Maghrib
                            </th>
                            <th className="px-4 py-3 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                Isya
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displaySchedule.map((day, idx) => {
                            const dayNum = parseInt(day.date.gregorian.day);
                            const monthNum = day.date.gregorian.month.number;
                            const isToday = dayNum === todayDay && monthNum === todayMonth;

                            // Calculate Ramadan day number
                            const globalIdx = schedule.indexOf(day);
                            const ramadanDay = globalIdx >= 0 ? globalIdx + 1 : idx + 1;

                            return (
                                <tr
                                    key={idx}
                                    className={`border-b border-gray-50 transition-colors hover:bg-gray-50/50 ${
                                        isToday ? "bg-gray-50 border-l-[3px] border-l-gray-900" : ""
                                    }`}
                                >
                                    <td className="px-4 py-3 text-center">
                                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                                            isToday ? "bg-gray-900 text-white" : "text-gray-400"
                                        }`}>
                                            {ramadanDay}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm ${isToday ? "font-bold text-gray-900" : "text-gray-600"}`}>
                                                {dayNum} {day.date.gregorian.month.en}
                                            </span>
                                        </div>
                                    </td>
                                    <td className={`px-4 py-3 text-center tabular-nums ${isToday ? "font-bold text-gray-900" : "text-gray-600"}`}>
                                        {cleanTime(day.timings.Imsak)}
                                    </td>
                                    <td className={`px-4 py-3 text-center tabular-nums ${isToday ? "font-bold text-gray-900" : "text-gray-600"}`}>
                                        {cleanTime(day.timings.Fajr)}
                                    </td>
                                    <td className={`px-4 py-3 text-center tabular-nums ${isToday ? "font-bold text-gray-900" : "text-gray-600"}`}>
                                        {cleanTime(day.timings.Dhuhr)}
                                    </td>
                                    <td className={`px-4 py-3 text-center tabular-nums ${isToday ? "font-bold text-gray-900" : "text-gray-600"}`}>
                                        {cleanTime(day.timings.Asr)}
                                    </td>
                                    <td className={`px-4 py-3 text-center tabular-nums ${isToday ? "font-bold text-gray-900" : "text-gray-600"}`}>
                                        {cleanTime(day.timings.Maghrib)}
                                    </td>
                                    <td className={`px-4 py-3 text-center tabular-nums ${isToday ? "font-bold text-gray-900" : "text-gray-600"}`}>
                                        {cleanTime(day.timings.Isha)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* CTA for preview mode */}
            {preview && (
                <div className="p-5 border-t border-gray-100 text-center">
                    <Link
                        href="/jadwal"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors group"
                    >
                        Lihat Jadwal 30 Hari
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            )}
        </motion.div>
    );
}
