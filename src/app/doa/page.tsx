"use client";

import * as React from "react";
import { DOA_LIST, DOA_CATEGORIES, type Doa } from "@/lib/doa-data";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function DoaPage() {
    const [activeCategory, setActiveCategory] = React.useState("all");
    const [copiedId, setCopiedId] = React.useState<string | null>(null);

    const filteredDoa = activeCategory === "all"
        ? DOA_LIST
        : DOA_LIST.filter((d) => d.category === activeCategory);

    async function handleCopy(doa: Doa) {
        const text = `${doa.title}\n\n${doa.arabic}\n\n${doa.transliteration}\n\n${doa.translation}`;
        await navigator.clipboard.writeText(text);
        setCopiedId(doa.id);
        setTimeout(() => setCopiedId(null), 2000);
    }

    return (
        <div className="container max-w-2xl mx-auto px-4 md:px-6 py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Doa Harian Ramadhan
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                    Kumpulan doa dan niat selama bulan Ramadhan 1447 H
                </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide"
            >
                {DOA_CATEGORIES.map((cat) => (
                    <button
                        key={cat.value}
                        onClick={() => setActiveCategory(cat.value)}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ${
                            activeCategory === cat.value
                                ? "bg-gray-900 text-white"
                                : "bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </motion.div>

            {/* Doa Cards */}
            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {filteredDoa.map((doa, idx) => (
                        <motion.div
                            key={doa.id}
                            layout
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="rounded-xl border border-gray-100 bg-white overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                                <div>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                                        {doa.categoryLabel}
                                    </span>
                                    <h3 className="text-sm font-bold text-gray-900 mt-0.5">
                                        {doa.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => handleCopy(doa)}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                                        copiedId === doa.id
                                            ? "bg-green-50 text-green-600 border border-green-200"
                                            : "bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100 hover:text-gray-700"
                                    }`}
                                >
                                    {copiedId === doa.id ? (
                                        <>
                                            <Check className="h-3.5 w-3.5" />
                                            Tersalin!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3.5 w-3.5" />
                                            Salin
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Arabic */}
                            <div className="px-5 py-6 bg-gray-50/50 text-center">
                                <p
                                    className="text-xl md:text-2xl leading-loose text-gray-900 font-medium"
                                    dir="rtl"
                                    style={{ fontFamily: "'Traditional Arabic', 'Amiri', serif", lineHeight: 2.2 }}
                                >
                                    {doa.arabic}
                                </p>
                            </div>

                            {/* Transliteration & Translation */}
                            <div className="px-5 py-4 space-y-3">
                                <div>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-300 block mb-1">
                                        Transliterasi
                                    </span>
                                    <p className="text-sm text-gray-500 italic leading-relaxed">
                                        {doa.transliteration}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-300 block mb-1">
                                        Artinya
                                    </span>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {doa.translation}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
