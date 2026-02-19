"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CountdownProps {
    targetTime: string;
    prayerName: string;
}

export function Countdown({ targetTime, prayerName }: CountdownProps) {
    const [timeLeft, setTimeLeft] = React.useState({ hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
        function computeDiff() {
            const now = new Date();
            const [h, m] = targetTime.split(":").map(Number);
            const target = new Date();
            target.setHours(h, m, 0, 0);

            if (target.getTime() <= now.getTime()) {
                target.setDate(target.getDate() + 1);
            }

            const diff = Math.max(0, target.getTime() - now.getTime());
            return {
                hours: Math.floor(diff / 3600000),
                minutes: Math.floor((diff % 3600000) / 60000),
                seconds: Math.floor((diff % 60000) / 1000),
            };
        }

        setTimeLeft(computeDiff());
        const interval = setInterval(() => setTimeLeft(computeDiff()), 1000);
        return () => clearInterval(interval);
    }, [targetTime]);

    return (
        <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8 md:p-10 max-w-lg mx-auto">
            {/* Label */}
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                Menghitung mundur menuju
            </p>
            <p className="text-lg font-bold text-gray-900 mb-6">{prayerName}</p>

            {/* Timer */}
            <div className="flex items-center justify-center gap-3 md:gap-5">
                <TimeBlock value={timeLeft.hours} label="Jam" />
                <span className="text-2xl font-light text-gray-300 animate-pulse-dot">:</span>
                <TimeBlock value={timeLeft.minutes} label="Menit" />
                <span className="text-2xl font-light text-gray-300 animate-pulse-dot" style={{ animationDelay: "0.5s" }}>:</span>
                <TimeBlock value={timeLeft.seconds} label="Detik" />
            </div>
        </div>
    );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-white border border-gray-100 overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 tabular-nums"
                    >
                        {value.toString().padStart(2, "0")}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">{label}</span>
        </div>
    );
}
