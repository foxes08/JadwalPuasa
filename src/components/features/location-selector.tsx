"use client";

import * as React from "react";
import { INDONESIAN_CITIES, type City } from "@/lib/cities";
import { ChevronDown, MapPin } from "lucide-react";

interface LocationSelectorProps {
    selectedCity: City;
    onSelect: (city: City) => void;
}

export function LocationSelector({ selectedCity, onSelect }: LocationSelectorProps) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filtered = INDONESIAN_CITIES.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.province.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div ref={containerRef} className="relative w-[200px]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-2 truncate">
                    <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    <span className="truncate">{selectedCity.name}</span>
                </div>
                <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <div className="absolute z-50 mt-2 w-full rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden">
                    <div className="p-2">
                        <input
                            type="text"
                            placeholder="Cari kota..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-gray-50 border-0 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-200"
                            autoFocus
                        />
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {filtered.map((city) => (
                            <button
                                key={city.name}
                                onClick={() => {
                                    onSelect(city);
                                    setOpen(false);
                                    setSearch("");
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                                    city.name === selectedCity.name
                                        ? "font-semibold text-gray-900"
                                        : "text-gray-500"
                                }`}
                            >
                                <span>{city.name}</span>
                                <span className="text-xs text-gray-300 ml-2">{city.province}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
