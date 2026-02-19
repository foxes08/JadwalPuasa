export interface PrayerTimes {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
    [key: string]: string;
}

export interface HijriDate {
    date: string;
    format: string;
    day: string;
    weekday: { en: string; ar: string };
    month: { number: number; en: string; ar: string };
    year: string;
    designation: { abbreviated: string; expanded: string };
}

export interface GregorianDate {
    date: string;
    format: string;
    day: string;
    weekday: { en: string };
    month: { number: number; en: string };
    year: string;
    designation: { abbreviated: string; expanded: string };
}

export interface ScheduleData {
    timings: PrayerTimes;
    date: {
        readable: string;
        timestamp: string;
        hijri: HijriDate;
        gregorian: GregorianDate;
    };
    meta: {
        latitude: number;
        longitude: number;
        timezone: string;
        method: {
            id: number;
            name: string;
            params: { Fajr: number; Isha: number; [key: string]: number };
        };
        latitudeAdjustmentMethod: string;
        midnightMode: string;
        school: string;
        offset: { [key: string]: number };
    };
}

export interface ApiResponse {
    code: number;
    status: string;
    data: ScheduleData[];
}

const BASE_URL = "https://api.aladhan.com/v1";

// Ramadhan 2026: 19 Februari - 20 Maret
export const RAMADHAN_START = new Date(2026, 1, 19); // Feb 19
export const RAMADHAN_END = new Date(2026, 2, 20);   // Mar 20

/**
 * Fetch prayer times from Aladhan API for a given month/year and coordinates.
 * Uses Method 20 (Kemenag RI) for Indonesia.
 */
export async function getPrayerTimes(
    year: number,
    month: number,
    latitude: number,
    longitude: number
): Promise<ScheduleData[]> {
    try {
        const url = `${BASE_URL}/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=20`;

        const res = await fetch(url, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch prayer times: ${res.statusText}`);
        }

        const json: ApiResponse = await res.json();
        return json.data;
    } catch (error) {
        console.error("Error fetching prayer times:", error);
        return [];
    }
}

/**
 * Fetch the full Ramadhan 2026 schedule (19 Feb - 20 Mar).
 * Combines two months of data and filters to the correct date range.
 */
export async function getRamadhanSchedule(
    latitude: number,
    longitude: number
): Promise<ScheduleData[]> {
    const [febData, marData] = await Promise.all([
        getPrayerTimes(2026, 2, latitude, longitude),
        getPrayerTimes(2026, 3, latitude, longitude),
    ]);

    const allData = [...febData, ...marData];

    // Filter: only keep Feb 19 - Mar 20
    return allData.filter((day) => {
        const d = day.date.gregorian;
        const monthNum = d.month.number;
        const dayNum = parseInt(d.day);

        if (monthNum === 2 && dayNum >= 19) return true;
        if (monthNum === 3 && dayNum <= 20) return true;
        return false;
    });
}
