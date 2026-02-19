import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="mb-10">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Doa & Artikel
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                    Kumpulan doa harian, niat puasa, dan artikel seputar Ramadhan.
                </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {BLOG_POSTS.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.slug}
                        className="group block h-full"
                    >
                        <div className="h-full rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                                {post.category}
                            </span>
                            <h2 className="text-sm font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 leading-snug">
                                {post.title}
                            </h2>
                            <p className="text-xs text-gray-400 line-clamp-2 mb-4">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-xs font-semibold text-gray-400 group-hover:text-gray-900 transition-colors">
                                Baca selengkapnya
                                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
