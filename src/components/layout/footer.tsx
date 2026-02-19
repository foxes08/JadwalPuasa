import Link from "next/link";

const FOOTER_LINKS = [
    { href: "/", label: "Beranda" },
    { href: "/jadwal", label: "Jadwal" },
    { href: "/doa", label: "Doa" },
    { href: "/blog", label: "Artikel" },
    { href: "/about", label: "Tentang" },
];

export function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🌙</span>
                            <span className="text-sm font-bold text-gray-900">Jadwal Puasa</span>
                        </div>
                        <p className="text-xs text-gray-400">
                            Data dari Aladhan API · Metode Kemenag RI
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex items-center gap-6">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-100 py-5 text-center">
                    <p className="text-xs text-gray-300">
                        © {new Date().getFullYear()} Jadwal Puasa. Dibuat dengan ❤️ untuk umat.
                    </p>
                </div>
            </div>
        </footer>
    );
}
