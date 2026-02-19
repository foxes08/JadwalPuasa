"use client";

import * as React from "react";
import { getRamadhanSchedule, type ScheduleData } from "@/lib/api";
import { INDONESIAN_CITIES, type City } from "@/lib/cities";
import { LocationSelector } from "@/components/features/location-selector";
import { MonthlyView } from "@/components/features/monthly-view";
import { PrayerTimesGrid } from "@/components/features/prayer-times-grid";
import { ExportSchedule } from "@/components/features/export-schedule";
import { NotificationSettings } from "@/components/features/notification-settings";
import { useNotificationScheduler } from "@/hooks/use-notification-scheduler";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function JadwalPage() {
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
            const today = data.find(
                (d) =>
                    parseInt(d.date.gregorian.day) === now.getDate() &&
                    d.date.gregorian.month.number === now.getMonth() + 1
            );
            setTodaySchedule(today || null);
            setLoading(false);
        }
        fetchData();
    }, [location]);

    useNotificationScheduler(todaySchedule?.timings ?? null);

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Jadwal Lengkap
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        {todaySchedule
                            ? format(new Date(), "EEEE, d MMMM yyyy", { locale: id })
                            : "Memuat..."}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-400">
                        <MapPin className="h-3 w-3" />
                        <span>
                            {location.name}, {location.province}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <NotificationSettings />
                    <ExportSchedule schedule={schedule} location={location} />
                    <LocationSelector selectedCity={location} onSelect={setLocation} />
                </div>
            </motion.div>

            {loading ? (
                <div className="flex items-center justify-center h-48">
                    <div className="w-6 h-6 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
                </div>
            ) : (
                <>
                    {todaySchedule && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-5 bg-gray-900 rounded-full" />
                                <h2 className="text-lg font-bold text-gray-900">Hari Ini</h2>
                            </div>
                            <PrayerTimesGrid timings={todaySchedule.timings} />
                        </div>
                    )}
                    <MonthlyView schedule={schedule} />
                </>
            )}
        </div>
    );
}
