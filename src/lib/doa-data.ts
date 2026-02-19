export interface Doa {
    id: string;
    title: string;
    category: "niat" | "harian" | "tarawih" | "lailatul-qadar" | "umum";
    categoryLabel: string;
    arabic: string;
    transliteration: string;
    translation: string;
}

export const DOA_LIST: Doa[] = [
    {
        id: "niat-puasa",
        title: "Niat Puasa Ramadhan",
        category: "niat",
        categoryLabel: "Niat",
        arabic: "نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى",
        transliteration: "Nawaitu shauma ghadin 'an adaa'i fardhi syahri ramadhaana haadzihis sanati lillaahi ta'aalaa.",
        translation: "Saya niat berpuasa esok hari untuk menunaikan kewajiban di bulan Ramadhan tahun ini karena Allah Ta'ala.",
    },
    {
        id: "doa-buka-puasa",
        title: "Doa Berbuka Puasa",
        category: "harian",
        categoryLabel: "Harian",
        arabic: "اَللّٰهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ",
        transliteration: "Allahumma laka shumtu wa bika aamantu wa 'alaa rizqika afthartu birahmatika yaa arhamar raahimiin.",
        translation: "Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka. Dengan rahmat-Mu wahai Yang Paling Penyayang.",
    },
    {
        id: "doa-setelah-makan",
        title: "Doa Setelah Makan Sahur",
        category: "harian",
        categoryLabel: "Harian",
        arabic: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِيْنَ",
        transliteration: "Alhamdu lillaahil ladzii ath'amanaa wa saqaanaa wa ja'alanaa minal muslimiin.",
        translation: "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk orang-orang Muslim.",
    },
    {
        id: "doa-tarawih",
        title: "Doa Setelah Sholat Tarawih",
        category: "tarawih",
        categoryLabel: "Tarawih",
        arabic: "اَللّٰهُمَّ اجْعَلْنَا بِالْإِيْمَانِ كَامِلِيْنَ وَلِلْفَرَائِضِ مُؤَدِّيْنَ وَلِلصَّلاَةِ حَافِظِيْنَ وَلِلزَّكَاةِ فَاعِلِيْنَ وَلِمَا عِنْدَكَ طَالِبِيْنَ وَلِعَفْوِكَ رَاجِيْنَ",
        transliteration: "Allahumma ij'alnaa bil iimaani kaamiliin, wa lil faraa'idhi mu'addiin, wa lish shalaati haafizhiin, wa liz zakaati faa'iliin, wa limaa 'indaka thaalibiin, wa li'afwika raajiin.",
        translation: "Ya Allah, jadikanlah kami orang yang sempurna imannya, yang menunaikan kewajiban, yang menjaga sholat, yang menunaikan zakat, yang mengharap apa yang ada di sisi-Mu, dan yang mengharap ampunan-Mu.",
    },
    {
        id: "doa-witir",
        title: "Doa Qunut dalam Sholat Witir",
        category: "tarawih",
        categoryLabel: "Tarawih",
        arabic: "اَللّٰهُمَّ اهْدِنِيْ فِيْمَنْ هَدَيْتَ وَعَافِنِيْ فِيْمَنْ عَافَيْتَ وَتَوَلَّنِيْ فِيْمَنْ تَوَلَّيْتَ وَبَارِكْ لِيْ فِيْمَا أَعْطَيْتَ وَقِنِيْ شَرَّ مَا قَضَيْتَ",
        transliteration: "Allahummah dinii fiiman hadait, wa 'aafinii fiiman 'aafait, wa tawallanii fiiman tawallait, wa baarik lii fiimaa a'thait, wa qinii syarra maa qadhait.",
        translation: "Ya Allah, berilah aku petunjuk di antara orang yang Engkau beri petunjuk, berilah aku keselamatan, lindungilah aku, berkahilah apa yang Engkau berikan kepadaku, dan lindungilah aku dari keburukan yang Engkau tetapkan.",
    },
    {
        id: "doa-lailatul-qadar",
        title: "Doa Malam Lailatul Qadar",
        category: "lailatul-qadar",
        categoryLabel: "Lailatul Qadar",
        arabic: "اَللّٰهُمَّ إِنَّكَ عَفُوٌّ كَرِيْمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّيْ",
        transliteration: "Allahumma innaka 'afuwwun kariimun tuhibbul 'afwa fa'fu 'annii.",
        translation: "Ya Allah, sesungguhnya Engkau Maha Pemaaf lagi Maha Mulia, Engkau menyukai maaf, maka maafkanlah aku.",
    },
    {
        id: "doa-rahmat",
        title: "Doa 10 Hari Pertama (Rahmat)",
        category: "umum",
        categoryLabel: "Fase Ramadhan",
        arabic: "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ",
        transliteration: "Yaa hayyu yaa qayyuum, birahmatika astaghiits.",
        translation: "Wahai Tuhan Yang Maha Hidup, wahai Tuhan Yang Berdiri Sendiri, dengan rahmat-Mu aku memohon pertolongan.",
    },
    {
        id: "doa-ampunan",
        title: "Doa 10 Hari Kedua (Ampunan)",
        category: "umum",
        categoryLabel: "Fase Ramadhan",
        arabic: "أَسْتَغْفِرُ اللّٰهَ رَبِّيْ مِنْ كُلِّ ذَنْبٍ وَأَتُوْبُ إِلَيْهِ",
        transliteration: "Astaghfirullaaha rabbii min kulli dzanbin wa atuubu ilaihi.",
        translation: "Aku memohon ampun kepada Allah, Tuhanku, dari segala dosa dan aku bertaubat kepada-Nya.",
    },
    {
        id: "doa-pembebasan",
        title: "Doa 10 Hari Terakhir (Pembebasan)",
        category: "umum",
        categoryLabel: "Fase Ramadhan",
        arabic: "اَللّٰهُمَّ أَجِرْنِيْ مِنَ النَّارِ",
        transliteration: "Allahumma ajirnii minan naar.",
        translation: "Ya Allah, lindungilah aku dari api neraka.",
    },
];

export const DOA_CATEGORIES = [
    { value: "all", label: "Semua Doa" },
    { value: "niat", label: "Niat" },
    { value: "harian", label: "Harian" },
    { value: "tarawih", label: "Tarawih" },
    { value: "lailatul-qadar", label: "Lailatul Qadar" },
    { value: "umum", label: "Fase Ramadhan" },
];
