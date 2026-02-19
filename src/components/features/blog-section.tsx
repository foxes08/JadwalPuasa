"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";

export function BlogSection() {
    const posts = BLOG_POSTS.slice(0, 3);

    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-50">
                        <BookOpen className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">Doa & Artikel</h2>
                        <p className="text-xs text-gray-400">Bacaan seputar Ramadhan</p>
                    </div>
                </div>
                <Link
                    href="/blog"
                    className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1 group"
                >
                    Lihat semua
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>

            {/* Cards */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, idx) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                    >
                        <Link href={`/blog/${post.slug}`} className="group block h-full">
                            <div className="h-full rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                                    {post.category}
                                </span>
                                <h3 className="text-sm font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-400 line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
