export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    content: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "panduan-puasa-ramadhan",
        title: "Panduan Lengkap Puasa Ramadhan untuk Pemula",
        excerpt: "Memahami syarat, rukun, dan hal-hal yang membatalkan puasa Ramadhan secara lengkap.",
        category: "Panduan",
        content: `
            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Syarat Wajib Puasa</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Puasa Ramadhan wajib dilaksanakan oleh setiap Muslim yang memenuhi syarat berikut:
            </p>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Islam</strong> — Puasa hanya wajib bagi orang yang beragama Islam.</li>
                <li><strong>Baligh</strong> — Sudah mencapai usia dewasa menurut syariat.</li>
                <li><strong>Berakal</strong> — Dalam keadaan sehat secara mental.</li>
                <li><strong>Mampu</strong> — Tidak dalam keadaan sakit berat, bepergian jauh, atau kondisi lain yang memberatkan.</li>
            </ul>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Rukun Puasa</h3>
            <ol style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Niat</strong> — Diniatkan pada malam hari sebelum fajar.</li>
                <li><strong>Menahan diri</strong> dari makan, minum, dan hal-hal yang membatalkan puasa sejak terbit fajar hingga terbenam matahari.</li>
            </ol>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Hal yang Membatalkan Puasa</h3>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li>Makan dan minum dengan sengaja</li>
                <li>Muntah dengan sengaja</li>
                <li>Berhubungan suami istri di siang hari</li>
                <li>Haid dan nifas bagi wanita</li>
                <li>Berniat membatalkan puasa</li>
            </ul>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Orang yang Boleh Tidak Berpuasa</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Beberapa golongan diperbolehkan tidak berpuasa dengan ketentuan mengganti (qadha) atau membayar fidyah:
            </p>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Musafir</strong> — Orang yang bepergian jauh, wajib mengqadha di hari lain.</li>
                <li><strong>Orang sakit</strong> — Jika puasa memperburuk kondisi, boleh mengqadha setelah sembuh.</li>
                <li><strong>Wanita hamil & menyusui</strong> — Jika khawatir terhadap kesehatan diri atau bayinya.</li>
                <li><strong>Lansia</strong> — Yang sudah tidak mampu berpuasa, membayar fidyah.</li>
            </ul>

            <div style="background:#f8f8f8;border-radius:12px;padding:20px;margin-top:1rem;">
                <p style="font-size:0.875rem;color:#666;line-height:1.8;">
                    <strong style="color:#333;">💡 Perbedaan Qadha & Fidyah:</strong><br/>
                    <strong>Qadha</strong> = mengganti puasa di hari lain sebelum Ramadhan berikutnya.<br/>
                    <strong>Fidyah</strong> = memberi makan satu orang miskin untuk setiap hari yang ditinggalkan, berlaku untuk yang tidak mampu berpuasa secara permanen.
                </p>
            </div>
        `,
    },
    {
        slug: "tips-sahur-berbuka-sehat",
        title: "Tips Sahur & Berbuka yang Sehat",
        excerpt: "Panduan menjaga kesehatan saat berpuasa dengan pola makan yang tepat saat sahur dan berbuka.",
        category: "Kesehatan",
        content: `
            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">🍚 Menu Sahur yang Ideal</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Sahur adalah bekal energi seharian. Pilih makanan yang melepaskan energi secara perlahan:
            </p>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Karbohidrat kompleks</strong> — Nasi merah, oatmeal, roti gandum. Memberikan energi lebih lama dibanding nasi putih.</li>
                <li><strong>Protein</strong> — Telur, ikan, ayam, tahu, tempe. Membantu menjaga rasa kenyang.</li>
                <li><strong>Serat</strong> — Sayuran hijau, buah-buahan. Memperlambat pencernaan sehingga kenyang lebih lama.</li>
                <li><strong>Lemak sehat</strong> — Alpukat, kacang-kacangan. Sumber energi cadangan.</li>
            </ul>

            <div style="background:#fff3e0;border-radius:12px;padding:20px;margin-bottom:1.5rem;">
                <p style="font-size:0.875rem;color:#666;line-height:1.8;">
                    <strong style="color:#e65100;">⚠️ Hindari saat sahur:</strong><br/>
                    Makanan terlalu asin (menyebabkan haus), gorengan berlebihan (menyebabkan maag), dan kafein tinggi (menyebabkan dehidrasi).
                </p>
            </div>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">🥤 Menjaga Hidrasi</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Dehidrasi adalah masalah utama saat puasa. Gunakan pola minum <strong>2-4-2</strong>:
            </p>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>2 gelas</strong> saat berbuka puasa</li>
                <li><strong>4 gelas</strong> antara berbuka dan tidur</li>
                <li><strong>2 gelas</strong> saat sahur</li>
            </ul>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">🌅 Cara Berbuka yang Benar</h3>
            <ol style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Awali dengan kurma & air putih</strong> — Kurma mengandung gula alami yang cepat mengembalikan energi.</li>
                <li><strong>Sholat Maghrib</strong> — Beri jeda sebelum makan berat agar lambung siap.</li>
                <li><strong>Makan utama</strong> — Porsi sedang, jangan langsung berlebihan.</li>
                <li><strong>Hindari</strong> langsung makan gorengan atau makanan sangat manis dalam jumlah banyak.</li>
            </ol>

            <div style="background:#f8f8f8;border-radius:12px;padding:20px;margin-top:1rem;">
                <p style="font-size:0.875rem;color:#666;line-height:1.8;">
                    <strong style="color:#333;">💡 Tips:</strong> Jika merasa lemas di sore hari, itu normal. Hindari aktivitas fisik berat antara Dzuhur dan Ashar. Istirahat singkat (power nap) 20 menit setelah Dzuhur sangat membantu.
                </p>
            </div>
        `,
    },
    {
        slug: "mengenal-lailatul-qadar",
        title: "Mengenal Lailatul Qadar — Malam Seribu Bulan",
        excerpt: "Keutamaan, tanda-tanda, dan amalan yang dianjurkan pada malam Lailatul Qadar.",
        category: "Pengetahuan",
        content: `
            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Apa itu Lailatul Qadar?</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Lailatul Qadar (malam kemuliaan) adalah malam yang lebih baik dari seribu bulan. Allah SWT berfirman dalam surah Al-Qadr:
            </p>
            <div style="background:#f8f8f8;border-radius:12px;padding:24px;margin-bottom:1.5rem;text-align:center;">
                <p style="font-size:1.25rem;line-height:2.2;color:#111;font-weight:500;" dir="rtl">
                    لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ
                </p>
                <p style="font-style:italic;color:#666;font-size:0.9rem;margin-top:8px;">
                    "Malam kemuliaan itu lebih baik dari seribu bulan." (QS. Al-Qadr: 3)
                </p>
            </div>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Kapan Lailatul Qadar?</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Rasulullah SAW bersabda agar mencarinya pada <strong>10 malam terakhir Ramadhan</strong>, terutama pada <strong>malam-malam ganjil</strong> (21, 23, 25, 27, 29 Ramadhan). Malam ke-27 sering dianggap paling kuat kemungkinannya, namun tidak ada kepastian.
            </p>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Tanda-tanda Malam Lailatul Qadar</h3>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li>Malam yang tenang, tidak terlalu panas dan tidak terlalu dingin</li>
                <li>Langit terasa cerah dan tentram</li>
                <li>Hati terasa damai dan khusyuk dalam beribadah</li>
                <li>Matahari terbit di pagi harinya tanpa sinar yang menyilaukan</li>
            </ul>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Amalan yang Dianjurkan</h3>
            <ol style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Sholat malam (Qiyamul Lail)</strong> — Sholat tahajud dan tarawih dengan khusyuk</li>
                <li><strong>Membaca Al-Qur'an</strong> — Meningkatkan tilawah terutama 10 malam terakhir</li>
                <li><strong>Berdoa</strong> — Terutama doa yang diajarkan Rasulullah: <em>"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'annii"</em></li>
                <li><strong>I'tikaf</strong> — Berdiam diri di masjid untuk beribadah</li>
                <li><strong>Bersedekah</strong> — Memperbanyak sedekah di 10 malam terakhir</li>
            </ol>
        `,
    },
    {
        slug: "panduan-zakat-fitrah",
        title: "Panduan Zakat Fitrah — Syarat, Waktu & Cara",
        excerpt: "Memahami kewajiban zakat fitrah: siapa yang wajib, kapan membayar, dan berapa besarannya.",
        category: "Panduan",
        content: `
            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Apa itu Zakat Fitrah?</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Zakat fitrah adalah zakat yang wajib dikeluarkan oleh setiap Muslim menjelang Idul Fitri. Tujuannya adalah untuk menyucikan diri dan membantu fakir miskin merayakan hari raya.
            </p>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Siapa yang Wajib?</h3>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li>Setiap Muslim yang <strong>hidup di malam dan hari raya Idul Fitri</strong></li>
                <li>Memiliki <strong>kelebihan makanan</strong> untuk dirinya dan keluarganya pada hari tersebut</li>
                <li>Kepala keluarga wajib mengeluarkan untuk <strong>seluruh anggota keluarga</strong> yang menjadi tanggungannya</li>
            </ul>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Besaran Zakat Fitrah</h3>
            <div style="background:#f8f8f8;border-radius:12px;padding:20px;margin-bottom:1.5rem;">
                <p style="color:#444;line-height:1.8;">
                    Sebesar <strong>1 sha'</strong> atau setara dengan:
                </p>
                <ul style="color:#444;line-height:2;padding-left:1.5rem;margin-top:0.5rem;">
                    <li><strong>2,5 kg beras</strong> (pendapat mayoritas ulama Indonesia)</li>
                    <li>Atau senilai harga beras tersebut dalam bentuk uang</li>
                </ul>
                <p style="color:#888;font-size:0.875rem;margin-top:0.75rem;">
                    Contoh: Jika harga beras Rp 15.000/kg, maka zakat per orang = Rp 37.500
                </p>
            </div>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Waktu Pembayaran</h3>
            <ol style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Boleh</strong> — Sejak awal Ramadhan</li>
                <li><strong>Wajib</strong> — Setelah terbenam matahari akhir Ramadhan (malam Idul Fitri)</li>
                <li><strong>Utama</strong> — Sebelum sholat Idul Fitri</li>
                <li><strong>Haram terlambat</strong> — Setelah sholat Idul Fitri tanpa uzur</li>
            </ol>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Penerima Zakat (Mustahik)</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Zakat fitrah disalurkan kepada 8 golongan yang berhak (asnaf), dengan prioritas utama kepada <strong>fakir dan miskin</strong> agar mereka dapat merayakan Idul Fitri dengan layak.
            </p>
        `,
    },
    {
        slug: "sholat-tarawih-panduan",
        title: "Sholat Tarawih — Panduan & Keutamaan",
        excerpt: "Hukum, tata cara, dan keutamaan sholat tarawih selama bulan Ramadhan.",
        category: "Ibadah",
        content: `
            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Keutamaan Tarawih</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Rasulullah SAW bersabda:
            </p>
            <div style="background:#f8f8f8;border-radius:12px;padding:20px;margin-bottom:1.5rem;">
                <p style="font-style:italic;color:#555;line-height:1.8;">
                    "Barangsiapa melakukan sholat malam di bulan Ramadhan karena iman dan mengharap pahala, maka diampuni dosa-dosanya yang telah lalu."
                </p>
                <p style="color:#999;font-size:0.8rem;margin-top:8px;">— HR. Bukhari & Muslim</p>
            </div>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Hukum Sholat Tarawih</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1.5rem;">
                Sholat tarawih hukumnya <strong>sunnah muakkad</strong> (sunnah yang sangat dianjurkan) bagi laki-laki dan perempuan. Boleh dilaksanakan sendiri di rumah atau berjamaah di masjid, namun berjamaah di masjid lebih utama.
            </p>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Jumlah Rakaat</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Terdapat perbedaan pendapat yang sehat di kalangan ulama:
            </p>
            <ul style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>8 rakaat + 3 witir</strong> — Berdasarkan hadits Aisyah RA tentang sholat malam Rasulullah</li>
                <li><strong>20 rakaat + 3 witir</strong> — Berdasarkan praktik Khalifah Umar bin Khattab RA dan mayoritas ulama mazhab</li>
            </ul>
            <p style="color:#444;line-height:1.8;margin-bottom:1.5rem;">
                Keduanya adalah pendapat yang <strong>sah dan mulia</strong>. Yang terpenting adalah kekhusyukan dalam sholat.
            </p>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Tata Cara</h3>
            <ol style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li>Dilaksanakan <strong>setelah sholat Isya</strong> dan <strong>sebelum witir</strong></li>
                <li>Dikerjakan <strong>2 rakaat - 2 rakaat</strong> dengan salam setiap 2 rakaat</li>
                <li>Bacaan surat boleh bergantian, tidak harus surat tertentu</li>
                <li>Diakhiri dengan <strong>sholat Witir</strong> (1 atau 3 rakaat)</li>
            </ol>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Tips Istiqomah 30 Hari</h3>
            <ul style="color:#444;line-height:2;padding-left:1.5rem;">
                <li>Cari masjid dengan imam yang bacaannya membuat hati tenang</li>
                <li>Ajak keluarga atau teman — saling menguatkan</li>
                <li>Jika lelah, tetap datang meski hanya 4 rakaat — yang penting konsisten</li>
                <li>Nikmati prosesnya, bukan hanya mengejar jumlah rakaat</li>
            </ul>
        `,
    },
    {
        slug: "persiapan-idul-fitri",
        title: "Persiapan Idul Fitri — Tradisi & Sunnah",
        excerpt: "Sunnah-sunnah hari raya, tata cara sholat Ied, dan tradisi silaturahmi Idul Fitri.",
        category: "Tradisi",
        content: `
            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Sunnah-Sunnah Hari Raya</h3>
            <ol style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li><strong>Mandi sunnah</strong> — Mandi sebelum berangkat sholat Ied</li>
                <li><strong>Memakai pakaian terbaik</strong> — Berhias dan memakai wewangian</li>
                <li><strong>Makan sebelum berangkat</strong> — Disunnahkan makan kurma atau sesuatu yang manis sebelum sholat Ied Fitri (berbeda dengan Idul Adha)</li>
                <li><strong>Bertakbir</strong> — Mengumandangkan takbir sejak malam hingga imam naik mimbar</li>
                <li><strong>Pergi dan pulang lewat jalan berbeda</strong> — Mengikuti sunnah Rasulullah</li>
            </ol>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Takbiran</h3>
            <div style="background:#f8f8f8;border-radius:12px;padding:24px;margin-bottom:1.5rem;text-align:center;">
                <p style="font-size:1.15rem;line-height:2.2;color:#111;font-weight:500;" dir="rtl">
                    اللهُ أَكْبَرُ اللهُ أَكْبَرُ اللهُ أَكْبَرُ لاَ إِلٰهَ إِلاَّ اللهُ اللهُ أَكْبَرُ اللهُ أَكْبَرُ وَلِلّٰهِ الْحَمْدُ
                </p>
                <p style="font-style:italic;color:#666;font-size:0.85rem;margin-top:12px;line-height:1.6;">
                    Allahu Akbar, Allahu Akbar, Allahu Akbar, Laa ilaaha illallah,
                    Allahu Akbar, Allahu Akbar, wa lillaahil hamd.
                </p>
            </div>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Tata Cara Sholat Idul Fitri</h3>
            <ol style="color:#444;line-height:2;margin-bottom:1.5rem;padding-left:1.5rem;">
                <li>Sholat Ied terdiri dari <strong>2 rakaat</strong></li>
                <li><strong>Rakaat pertama:</strong> 7 kali takbir sebelum membaca Al-Fatihah</li>
                <li><strong>Rakaat kedua:</strong> 5 kali takbir sebelum membaca Al-Fatihah</li>
                <li>Setelah sholat, imam menyampaikan <strong>2 khutbah</strong></li>
                <li>Waktu pelaksanaan: setelah matahari terbit setinggi tombak hingga sebelum Dzuhur</li>
            </ol>

            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">Silaturahmi & Halal Bihalal</h3>
            <p style="color:#444;line-height:1.8;margin-bottom:1rem;">
                Tradisi khas Indonesia yang sangat indah setelah sholat Ied:
            </p>
            <ul style="color:#444;line-height:2;padding-left:1.5rem;">
                <li><strong>Saling memaafkan</strong> — Memohon maaf lahir dan batin kepada keluarga, tetangga, dan teman</li>
                <li><strong>Berkunjung ke rumah saudara</strong> — Mempererat tali silaturahmi</li>
                <li><strong>Menyediakan hidangan</strong> — Tradisi opor ayam, ketupat, dan rendang</li>
                <li><strong>Ziarah kubur</strong> — Mendoakan keluarga yang telah wafat</li>
            </ul>

            <div style="background:#f8f8f8;border-radius:12px;padding:20px;margin-top:1.5rem;">
                <p style="font-size:0.875rem;color:#666;line-height:1.8;">
                    <strong style="color:#333;">🤝 Selamat Hari Raya Idul Fitri 1447 H!</strong><br/>
                    Taqabbalallahu minna wa minkum — Semoga Allah menerima amal ibadah kita semua.
                </p>
            </div>
        `,
    },
];
