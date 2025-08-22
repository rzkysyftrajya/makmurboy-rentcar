export type PriceOptions = {
  manual?: number;
  matic?: number;
  withDriver?: number;
};

export type VehicleBrand =
  | "Toyota"
  | "Mitsubishi"
  | "Suzuki"
  | "Honda"
  | "Daihatsu"
  | "Isuzu"
  | "All";

export interface Vehicle {
  id: string;
  name: string;
  brand: VehicleBrand;
  type: "Sedan" | "SUV" | "MPV" | "Hatchback" | "Luxury" | "Van" | "Pick-up";
  transmission: "Automatic" | "Manual" | "Automatic & Manual";
  seats: number;
  price: PriceOptions;
  image: string;
  badge?: "Premium" | "Luxury";
  gallery: { id: number; url: string; alt: string; hint: string }[];
  specs: { icon: string; label: string; value: string }[];
}

export const vehicles: Vehicle[] = [
  {
    id: "hiace-premio-luxury",
    name: "Hiace Premio Luxury",
    brand: "Toyota",
    type: "Luxury",
    transmission: "Manual",
    seats: 10,
    price: { withDriver: 2500000 },
    image: "/armada/hiace-premio-luxury.webp",
    badge: "Luxury",
    gallery: [
      {
        id: 1,
        url: "/armada/hiace-premio-luxury.webp",
        alt: "Hiace Premio Luxury Exterior",
        hint: "luxury van exterior",
      },
      {
        id: 2,
        url: "/armada/hiace-premio-luxury.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Hiace Premio Luxury Interior",
        hint: "luxury van interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "10 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual" },
      { icon: "Luggage", label: "Bagasi", value: "6+ Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "toyota-alphard-new",
    name: "Toyota Alphard New",
    brand: "Toyota",
    type: "Luxury",
    transmission: "Automatic",
    seats: 6,
    price: { withDriver: 3000000 },
    image: "/armada/toyota-alphard.webp",
    badge: "Luxury",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-alphard.webp",
        alt: "Toyota Alphard Exterior",
        hint: "toyota alphard white",
      },
      {
        id: 2,
        url: "/armada/toyota-alphard.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Alphard Interior",
        hint: "toyota alphard interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "6 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Automatic" },
      { icon: "Luggage", label: "Bagasi", value: "4 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "innova-reborn",
    name: "Toyota Innova Reborn",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 550000, matic: 600000, withDriver: 900000 },
    badge: "Premium",
    image: "/armada/toyota-innova-reborn.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-innova-reborn.webp",
        alt: "Innova Reborn Exterior",
        hint: "innova reborn exterior",
      },
      {
        id: 2,
        url: "/armada/toyota-innova-reborn.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Innova Reborn Interior",
        hint: "innova reborn interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "4 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "toyota-hiace-premio",
    name: "Toyota Hiace Premio",
    brand: "Toyota",
    type: "Van",
    transmission: "Manual",
    seats: 12,
    price: { withDriver: 1500000 },
    image: "/armada/toyota-hiace-premio.webp",
    badge: "Premium",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-hiace-premio.webp",
        alt: "Toyota Hiace Premio Exterior",
        hint: "toyota hiace premio",
      },
      {
        id: 2,
        url: "/armada/toyota-hiace-premio.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Hiace Premio Interior",
        hint: "toyota hiace interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "12 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual" },
      { icon: "Luggage", label: "Bagasi", value: "8+ Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    transmission: "Automatic",
    seats: 7,
    price: { withDriver: 1300000 },
    badge: "Premium",
    image: "/armada/toyota-fortuner.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-fortuner.webp",
        alt: "Toyota Fortuner Exterior",
        hint: "toyota fortuner vrz black",
      },
      {
        id: 2,
        url: "/armada/toyota-fortuner.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Fortuner Interior",
        hint: "toyota fortuner vrz interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Automatic" },
      { icon: "Luggage", label: "Bagasi", value: "5 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "toyota-hiace-commuter",
    name: "Toyota Hiace Commuter",
    brand: "Toyota",
    type: "Van",
    transmission: "Manual",
    seats: 15,
    price: { withDriver: 1300000 },
    image: "/armada/toyota-hiace-commuter.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-hiace-commuter.webp",
        alt: "Toyota Hiace Commuter Exterior",
        hint: "toyota hiace commuter",
      },
      {
        id: 2,
        url: "/armada/toyota-hiace-commuter.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Hiace Commuter Interior",
        hint: "hiace commuter interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "15 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual" },
      { icon: "Luggage", label: "Bagasi", value: "10+ Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "toyota-avanza",
    name: "Toyota All New Avanza",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/toyota-all-new-avanza.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-all-new-avanza.webp",
        alt: "Toyota Avanza Exterior",
        hint: "toyota avanza exterior",
      },
      {
        id: 2,
        url: "/armada/toyota-all-new-avanza.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Avanza Interior",
        hint: "toyota avanza interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "3 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "mitsubishi-xpander",
    name: "Mitsubishi Xpander",
    brand: "Mitsubishi",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/mitsubishi-xpander.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/mitsubishi-xpander.webp",
        alt: "Mitsubishi Xpander Exterior",
        hint: "mitsubishi xpander exterior",
      },
      {
        id: 2,
        url: "/armada/mitsubishi-xpander.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Mitsubishi Xpander Interior",
        hint: "mitsubishi xpander interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "3 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "mitsubishi-pajero",
    name: "Mitsubishi Pajero",
    brand: "Mitsubishi",
    type: "SUV",
    transmission: "Automatic",
    seats: 7,
    price: { withDriver: 1500000 },
    badge: "Luxury",
    image: "/armada/mitsubishi-pajero.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/mitsubishi-pajero.webp",
        alt: "Pajero Sport Exterior",
        hint: "pajero sport offroad",
      },
      {
        id: 2,
        url: "/armada/mitsubishi-pajero.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Pajero Sport Interior",
        hint: "pajero sport interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Automatic" },
      { icon: "Luggage", label: "Bagasi", value: "5 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "suzuki-ertiga-hybrid",
    name: "Suzuki Ertiga Hybrid",
    brand: "Suzuki",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/suzuki-ertiga-hybrid.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/suzuki-ertiga-hybrid.webp",
        alt: "Suzuki Ertiga Hybrid Exterior",
        hint: "suzuki ertiga hybrid",
      },
      {
        id: 2,
        url: "/armada/suzuki-ertiga-hybrid.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Suzuki Ertiga Hybrid Interior",
        hint: "suzuki ertiga interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "3 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin (Hybrid)" },
    ],
  },
  {
    id: "isuzu-elf-minibus",
    name: "Isuzu Elf Minibus",
    brand: "Isuzu",
    type: "Van",
    transmission: "Manual",
    seats: 18,
    price: { withDriver: 1400000 },
    image: "/armada/isuzu-elf-minibus.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/isuzu-elf-minibus.webp",
        alt: "Isuzu Elf Minibus Exterior",
        hint: "isuzu elf minibus",
      },
      {
        id: 2,
        url: "/armada/isuzu-elf-minibus.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Isuzu Elf Minibus Interior",
        hint: "minibus interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "18 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual" },
      { icon: "Luggage", label: "Bagasi", value: "10+ Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "honda-brio",
    name: "Honda Brio",
    brand: "Honda",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/honda-brio.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/honda-brio.webp",
        alt: "Honda Brio Exterior",
        hint: "honda brio exterior",
      },
      {
        id: 2,
        url: "/armada/honda-brio.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Honda Brio Interior",
        hint: "honda brio interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "5 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "2 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "toyota-rush",
    name: "Toyota Rush",
    brand: "Toyota",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/toyota-rush.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-rush.webp",
        alt: "Toyota Rush Exterior",
        hint: "toyota rush white",
      },
      {
        id: 2,
        url: "/armada/toyota-rush.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Rush Interior",
        hint: "toyota rush interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "4 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "suzuki-xl7",
    name: "Suzuki XL7",
    brand: "Suzuki",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/suzuki-xl7.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/suzuki-xl7.webp",
        alt: "Suzuki XL7 Exterior",
        hint: "suzuki xl7 orange",
      },
      {
        id: 2,
        url: "/armada/suzuki-xl7.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Suzuki XL7 Interior",
        hint: "suzuki xl7 interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "4 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "daihatsu-terios",
    name: "Daihatsu Terios",
    brand: "Daihatsu",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/daihatsu-terios.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/daihatsu-terios.webp",
        alt: "Daihatsu Terios Exterior",
        hint: "daihatsu terios red",
      },
      {
        id: 2,
        url: "/armada/daihatsu-terios.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Daihatsu Terios Interior",
        hint: "daihatsu terios interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "4 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux Double Cabin",
    brand: "Toyota",
    type: "Pick-up",
    transmission: "Manual",
    seats: 5,
    price: { withDriver: 1600000 },
    image: "/armada/toyota-hilux-double-cabin.webp",
    badge: "Premium",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-hilux-double-cabin.webp",
        alt: "Toyota Hilux Exterior",
        hint: "toyota hilux pickup",
      },
      {
        id: 2,
        url: "/armada/toyota-hilux-double-cabin.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Hilux Interior",
        hint: "toyota hilux interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "5 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual" },
      { icon: "Luggage", label: "Bak Terbuka", value: "Besar" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Diesel" },
    ],
  },
  {
    id: "toyota-agya",
    name: "Toyota Agya",
    brand: "Toyota",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/toyota-agya.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-agya.webp",
        alt: "Toyota Agya Exterior",
        hint: "toyota agya yellow",
      },
      {
        id: 2,
        url: "/armada/toyota-agya.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Agya Interior",
        hint: "toyota agya interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "5 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "2 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "toyota-calya",
    name: "Toyota Calya",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/toyota-calya.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/toyota-calya.webp",
        alt: "Toyota Calya Exterior",
        hint: "toyota calya exterior",
      },
      {
        id: 2,
        url: "/armada/toyota-calya.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Toyota Calya Interior",
        hint: "toyota calya interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "3 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "daihatsu-ayla",
    name: "Daihatsu Ayla",
    brand: "Daihatsu",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/daihatsu-ayla.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/daihatsu-ayla.webp",
        alt: "Daihatsu Ayla Exterior",
        hint: "daihatsu ayla exterior",
      },
      {
        id: 2,
        url: "/armada/daihatsu-ayla.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Daihatsu Ayla Interior",
        hint: "daihatsu ayla interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "5 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "2 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
  {
    id: "daihatsu-sigra",
    name: "Daihatsu Sigra",
    brand: "Daihatsu",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/daihatsu-sigra.webp",
    gallery: [
      {
        id: 1,
        url: "/armada/daihatsu-sigra.webp",
        alt: "Daihatsu Sigra Exterior",
        hint: "daihatsu sigra exterior",
      },
      {
        id: 2,
        url: "/armada/daihatsu-sigra.webp", // Sesuaikan dengan gambar interior jika ada
        alt: "Daihatsu Sigra Interior",
        hint: "daihatsu sigra interior",
      },
    ],
    specs: [
      { icon: "Users", label: "Kapasitas", value: "7 Orang" },
      { icon: "Cog", label: "Transmisi", value: "Manual/Matic" },
      { icon: "Luggage", label: "Bagasi", value: "3 Koper" },
      { icon: "Fuel", label: "Bahan Bakar", value: "Bensin" },
    ],
  },
];

const uniqueBrands = [
  "All" as const,
  ...Array.from(new Set(vehicles.map((v) => v.brand))),
];

export const vehicleBrands: VehicleBrand[] = uniqueBrands;

export const vehicleTypes = [
  "All",
  "Sedan",
  "SUV",
  "MPV",
  "Hatchback",
  "Luxury",
  "Van",
  "Pick-up",
] as const;
export type VehicleType = (typeof vehicleTypes)[number];
