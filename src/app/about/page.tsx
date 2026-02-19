import { Code2, Heart, Mail, Globe, BookOpen, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container max-w-3xl mx-auto py-12 px-4 space-y-12">
            {/* Hero */}
            <div className="space-y-4 text-center">
                <span className="text-4xl">🌙</span>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Tentang Jadwal Puasa
                </h1>
                <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
                    Memudahkan umat Muslim di Indonesia memantau waktu sholat,
                    imsak, dan berbuka puasa selama Ramadhan.
                </p>
            </div>

            {/* Features */}
            <div className="grid gap-3 md:grid-cols-2">
                {[
                    {
                        icon: Clock,
                        title: "Akurat & Real-time",
                        desc: "Jadwal dihitung berdasarkan koordinat GPS dengan metode Kemenag RI.",
                    },
                    {
                        icon: Globe,
                        title: "20+ Kota Indonesia",
                        desc: "Mendukung kota-kota besar dari Aceh sampai Makassar.",
                    },
                    {
                        icon: BookOpen,
                        title: "Doa & Artikel",
                        desc: "Dilengkapi doa harian, niat puasa, dan artikel Ramadhan.",
                    },
                    {
                        icon: Code2,
                        title: "Open Source",
                        desc: "Dibangun dengan Next.js dan data dari Aladhan API.",
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="rounded-xl border border-gray-100 bg-white p-5 space-y-3 hover:shadow-sm transition-shadow"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg">
                                <item.icon className="h-4 w-4 text-gray-400" />
                            </div>
                            <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Purpose */}
            <div className="rounded-xl border border-gray-100 p-8 text-center space-y-3">
                <Heart className="h-6 w-6 mx-auto text-red-400" />
                <h3 className="text-lg font-bold text-gray-900">Dibuat dengan Niat Baik</h3>
                <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Semoga aplikasi ini membantu kita menjalankan ibadah puasa
                    dengan lebih khusyuk dan tepat waktu.
                </p>
            </div>

            {/* CTA */}
            <div className="text-center space-y-4 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                    Temukan kesalahan? Hubungi pengembang.
                </p>
                <div className="flex justify-center gap-3">
                    <Link
                        href="https://github.com/"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="mailto:contact@example.com"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                    >
                        <Mail className="h-3 w-3" />
                        Hubungi
                    </Link>
                </div>
            </div>
        </div>
    );
}
