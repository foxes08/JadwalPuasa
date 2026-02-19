import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const slug = (await params).slug;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container max-w-2xl mx-auto py-12 px-4">
            <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-900 mb-8 transition-colors group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Kembali
            </Link>

            <article>
                <div className="mb-8 space-y-3">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        {post.category}
                    </span>
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-3xl">
                        {post.title}
                    </h1>
                    <p className="text-sm text-gray-400">{post.excerpt}</p>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <div
                        className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-gray-600 prose-strong:text-gray-800 prose-sm"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>
        </div>
    );
}
