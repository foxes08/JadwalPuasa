"use client";

import { motion } from "framer-motion";
import { Countdown } from "./countdown";
import { LocationSelector } from "./location-selector";
import { type City } from "@/lib/cities";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { MapPin } from "lucide-react";

interface HeroSectionProps {
    location: City;
    onLocationChange: (city: City) => void;
    nextPrayerName: string;
    nextPrayerTime: string;
    hijriString?: string;
}

export function HeroSection({
    location,
    onLocationChange,
    nextPrayerName,
    nextPrayerTime,
    hijriString,
}: HeroSectionProps) {
    const today = format(new Date(), "EEEE, d MMMM yyyy", { locale: id });

    return (
        <section className="relative overflow-hidden bg-white pb-16 pt-8 md:pt-12">
            {/* Minimal decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-12 right-16 w-2 h-2 rounded-full bg-gray-200 animate-pulse-dot" />
                <div className="absolute top-32 right-32 w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse-dot" style={{ animationDelay: "0.5s" }} />
                <div className="absolute top-20 left-20 w-1 h-1 rounded-full bg-gray-200 animate-pulse-dot" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-24 left-16 w-2 h-2 rounded-full bg-gray-200 animate-pulse-dot" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Location selector */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-end mb-8"
                >
                    <LocationSelector selectedCity={location} onSelect={onLocationChange} />
                </motion.div>

                {/* Main content */}
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    {/* Moon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="animate-float"
                    >
                        <span className="text-4xl md:text-5xl">🌙</span>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-3"
                    >
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                            Jadwal Puasa
                            <br />
                            <span className="text-gray-300">&</span> Imsakiyah
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base">{today}</p>
                        {hijriString && (
                            <p className="text-xs font-medium text-gray-500 tracking-wide">
                                {hijriString}
                            </p>
                        )}
                        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                            <MapPin className="h-3 w-3" />
                            <span>{location.name}, {location.province}</span>
                        </div>
                    </motion.div>

                    {/* Countdown */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Countdown
                            targetTime={nextPrayerTime}
                            prayerName={nextPrayerName}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
