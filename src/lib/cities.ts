
export interface City {
    name: string;
    lat: number;
    lng: number;
    province: string;
}

export const INDONESIAN_CITIES: City[] = [
    { name: "Yogyakarta", lat: -7.7956, lng: 110.3695, province: "DI Yogyakarta" },
    { name: "Jakarta", lat: -6.2088, lng: 106.8456, province: "DKI Jakarta" },
    { name: "Surabaya", lat: -7.2575, lng: 112.7521, province: "Jawa Timur" },
    { name: "Bandung", lat: -6.9175, lng: 107.6191, province: "Jawa Barat" },
    { name: "Medan", lat: 3.5952, lng: 98.6722, province: "Sumatera Utara" },
    { name: "Semarang", lat: -6.9667, lng: 110.4167, province: "Jawa Tengah" },
    { name: "Makassar", lat: -5.1477, lng: 119.4327, province: "Sulawesi Selatan" },
    { name: "Palembang", lat: -2.9761, lng: 104.7754, province: "Sumatera Selatan" },
    { name: "Tangerang", lat: -6.1783, lng: 106.6319, province: "Banten" },
    { name: "Depok", lat: -6.4025, lng: 106.7942, province: "Jawa Barat" },
    { name: "Bekasi", lat: -6.2383, lng: 106.9756, province: "Jawa Barat" },
    { name: "Malang", lat: -7.9667, lng: 112.6326, province: "Jawa Timur" },
    { name: "Denpasar", lat: -8.6705, lng: 115.2126, province: "Bali" },
    { name: "Samarinda", lat: -0.5022, lng: 117.1536, province: "Kalimantan Timur" },
    { name: "Banjarmasin", lat: -3.3167, lng: 114.5928, province: "Kalimantan Selatan" },
    { name: "Padang", lat: -0.9471, lng: 100.4172, province: "Sumatera Barat" },
    { name: "Aceh", lat: 5.5483, lng: 95.3238, province: "Nanggroe Aceh Darussalam" },
    { name: "Balikpapan", lat: -1.2379, lng: 116.8529, province: "Kalimantan Timur" },
    { name: "Pontianak", lat: -0.0263, lng: 109.3425, province: "Kalimantan Barat" },
    { name: "Pekanbaru", lat: 0.5071, lng: 101.4478, province: "Riau" }
];
