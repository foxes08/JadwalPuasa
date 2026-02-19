"use client";

import { motion } from "framer-motion";

export function RamadhanProgress() {
    const now = new Date();
    const ramadhanStart = new Date(2026, 1, 19); // Feb 19, 2026
    const ramadhanEnd = new Date(2026, 2, 20);   // Mar 20, 2026
    const totalDays = 30;

    // Calculate current Ramadan day
    const diffMs = now.getTime() - ramadhanStart.getTime();
    const currentDay = Math.max(1, Math.min(totalDays, Math.ceil(diffMs / 86400000)));
    const daysLeft = totalDays - currentDay;
    const percentage = Math.round((currentDay / totalDays) * 100);

    // Determine phase
    let phase = "";
    let phaseDesc = "";
    if (currentDay <= 10) {
        phase = "10 Hari Rahmat";
        phaseDesc = "Hari-hari penuh rahmat Allah SWT";
    } else if (currentDay <= 20) {
        phase = "10 Hari Ampunan";
        phaseDesc = "Hari-hari penuh pengampunan";
    } else {
        phase = "10 Hari Pembebasan";
        phaseDesc = "Hari-hari pembebasan dari api neraka";
    }

    // Check if Ramadan hasn't started or has ended
    const isBeforeRamadan = now < ramadhanStart;
    const isAfterRamadan = now > ramadhanEnd;

    if (isBeforeRamadan || isAfterRamadan) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Progress Ramadhan</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{phase}</p>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-extrabold text-gray-900">{currentDay}</span>
                    <span className="text-sm text-gray-300 font-medium"> / {totalDays}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="absolute inset-y-0 left-0 bg-gray-900 rounded-full"
                />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">{percentage}%</span> selesai
                </p>
                <p className="text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">{daysLeft}</span> hari lagi
                </p>
            </div>

            {/* Phase indicator */}
            <div className="mt-5 pt-5 border-t border-gray-50">
                <div className="flex gap-1.5">
                    {[1, 2, 3].map((p) => {
                        const isActive = (p === 1 && currentDay <= 10) ||
                            (p === 2 && currentDay > 10 && currentDay <= 20) ||
                            (p === 3 && currentDay > 20);
                        const isPast = (p === 1 && currentDay > 10) ||
                            (p === 2 && currentDay > 20);
                        return (
                            <div key={p} className="flex-1">
                                <div className={`h-1 rounded-full mb-2 ${
                                    isPast ? "bg-gray-900" : isActive ? "bg-gray-900" : "bg-gray-100"
                                }`} />
                                <p className={`text-[10px] font-semibold uppercase tracking-wider ${
                                    isActive ? "text-gray-900" : "text-gray-300"
                                }`}>
                                    {p === 1 ? "Rahmat" : p === 2 ? "Ampunan" : "Pembebasan"}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <p className="text-xs text-gray-400 mt-3">{phaseDesc}</p>
            </div>
        </motion.div>
    );
}
