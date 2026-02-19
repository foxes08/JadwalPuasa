"use client";

import * as React from "react";
import { type ScheduleData } from "@/lib/api";
import { type City } from "@/lib/cities";
import { Download, Loader2 } from "lucide-react";

interface ExportScheduleProps {
    schedule: ScheduleData[];
    location: City;
}

function cleanTime(t: string) {
    return t.split(" ")[0];
}

export function ExportSchedule({ schedule, location }: ExportScheduleProps) {
    const exportRef = React.useRef<HTMLDivElement>(null);
    const [exporting, setExporting] = React.useState(false);

    async function handleExport() {
        if (!exportRef.current || exporting) return;
        setExporting(true);

        try {
            const html2canvas = (await import("html2canvas-pro")).default;

            // Make the hidden div temporarily visible for capture
            const el = exportRef.current;
            el.style.position = "fixed";
            el.style.left = "-9999px";
            el.style.top = "0";
            el.style.display = "block";

            const canvas = await html2canvas(el, {
                scale: 2,
                backgroundColor: "#ffffff",
                useCORS: true,
                width: 1080,
            });

            el.style.display = "none";

            const link = document.createElement("a");
            link.download = `jadwal-ramadhan-${location.name.toLowerCase()}-2026.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        } catch (err) {
            console.error("Export failed:", err);
        } finally {
            setExporting(false);
        }
    }

    return (
        <>
            {/* Export Button */}
            <button
                onClick={handleExport}
                disabled={exporting}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:shadow-sm transition-all duration-200 disabled:opacity-50"
            >
                {exporting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <Download className="h-4 w-4" />
                )}
                {exporting ? "Mendownload..." : "Download Jadwal"}
            </button>

            {/* Hidden Export Template */}
            <div
                ref={exportRef}
                style={{
                    display: "none",
                    width: "1080px",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    backgroundColor: "#ffffff",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        padding: "48px 48px 32px",
                        borderBottom: "1px solid #f0f0f0",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                        <span style={{ fontSize: "32px" }}>🌙</span>
                        <span style={{ fontSize: "24px", fontWeight: 800, color: "#111" }}>
                            Jadwal Puasa
                        </span>
                    </div>
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#111", marginBottom: "8px" }}>
                        Jadwal Ramadhan 1447 H
                    </div>
                    <div style={{ fontSize: "14px", color: "#888", marginBottom: "4px" }}>
                        19 Februari – 20 Maret 2026
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#aaa" }}>
                        <span>📍</span>
                        <span>{location.name}, {location.province}</span>
                    </div>
                </div>

                {/* Table */}
                <div style={{ padding: "0 48px" }}>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            fontSize: "13px",
                        }}
                    >
                        <thead>
                            <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                                {["Hari", "Tanggal", "Imsak", "Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"].map(
                                    (h) => (
                                        <th
                                            key={h}
                                            style={{
                                                padding: "14px 10px",
                                                textAlign: h === "Tanggal" ? "left" : "center",
                                                fontSize: "10px",
                                                fontWeight: 700,
                                                color: "#999",
                                                textTransform: "uppercase",
                                                letterSpacing: "1.5px",
                                            }}
                                        >
                                            {h}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((day, idx) => {
                                const dayNum = parseInt(day.date.gregorian.day);
                                const monthName = day.date.gregorian.month.en.substring(0, 3);
                                return (
                                    <tr
                                        key={idx}
                                        style={{
                                            borderBottom: "1px solid #f8f8f8",
                                            backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fafafa",
                                        }}
                                    >
                                        <td style={{ padding: "10px", textAlign: "center", fontWeight: 700, color: "#ccc" }}>
                                            {idx + 1}
                                        </td>
                                        <td style={{ padding: "10px", fontWeight: 600, color: "#333" }}>
                                            {dayNum} {monthName}
                                        </td>
                                        <td style={{ padding: "10px", textAlign: "center", color: "#444", fontVariantNumeric: "tabular-nums" }}>
                                            {cleanTime(day.timings.Imsak)}
                                        </td>
                                        <td style={{ padding: "10px", textAlign: "center", color: "#444", fontVariantNumeric: "tabular-nums" }}>
                                            {cleanTime(day.timings.Fajr)}
                                        </td>
                                        <td style={{ padding: "10px", textAlign: "center", color: "#444", fontVariantNumeric: "tabular-nums" }}>
                                            {cleanTime(day.timings.Dhuhr)}
                                        </td>
                                        <td style={{ padding: "10px", textAlign: "center", color: "#444", fontVariantNumeric: "tabular-nums" }}>
                                            {cleanTime(day.timings.Asr)}
                                        </td>
                                        <td style={{ padding: "10px", textAlign: "center", color: "#444", fontVariantNumeric: "tabular-nums" }}>
                                            {cleanTime(day.timings.Maghrib)}
                                        </td>
                                        <td style={{ padding: "10px", textAlign: "center", color: "#444", fontVariantNumeric: "tabular-nums" }}>
                                            {cleanTime(day.timings.Isha)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div
                    style={{
                        padding: "24px 48px 36px",
                        borderTop: "1px solid #f0f0f0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "8px",
                    }}
                >
                    <span style={{ fontSize: "11px", color: "#ccc" }}>
                        Data: Aladhan API · Metode Kemenag RI
                    </span>
                    <span style={{ fontSize: "11px", color: "#ccc" }}>
                        🌙 jadwalpuasa
                    </span>
                </div>
            </div>
        </>
    );
}
