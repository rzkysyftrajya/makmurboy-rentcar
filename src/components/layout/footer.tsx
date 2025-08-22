import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo CV BOY MAKMUR JAYA"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-bold text-xl text-white">
                CV.BOY MAKMUR JAYA
              </span>
            </Link>
            <p>
              Pusat rental mobil Medan murah, lepas kunci atau dengan supir.
              Armada lengkap dan terawat untuk perjalanan wisata dan bisnis
              Anda.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.tiktok.com/@cv.boymakmurjaya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok CV BOY MAKMUR JAYA"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/tiktok.png"
                  alt="Ikon TikTok"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.youtube.com/@boyrentalmedan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube CV BOY MAKMUR JAYA"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/youtube.png"
                  alt="Ikon YouTube"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.instagram.com/boyrentalmedan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CV BOY MAKMUR JAYA"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/instagram.png"
                  alt="Ikon Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.facebook.com/boyrentalmedan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CV BOY MAKMUR JAYA"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/facebook.png"
                  alt="Ikon Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/armada"
                  className="hover:text-primary transition-colors"
                >
                  Pilihan Mobil
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-primary transition-colors"
                >
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/destinasi"
                  className="hover:text-primary transition-colors"
                >
                  Destinasi Wisata
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="hover:text-primary transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="font-semibold text-lg text-white tracking-wider">
              Lokasi Kami
            </h3>
            <div className="mt-4 rounded-lg overflow-hidden h-48 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0332260116306!2d98.7185044!3d3.5798402999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131bc4b6d71c7%3A0x3d1d935dd64b6a16!2sBoy%20Rent%20Car%20Medan!5e0!3m2!1sid!2sid!4v1755781843918!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:grayscale dark:invert"
              ></iframe>
            </div>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/maps.png"
                  alt="Ikon lokasi"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span>
                  Jl. Tuba IV No.26, Tegal Sari Mandala III, Kec. Medan Denai,
                  Kota Medan
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/whatsapp.png"
                  alt="Ikon telepon"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+6281396565157"
                  className="hover:text-primary transition-colors block"
                >
                  +62 813-9656-5157
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/email.png"
                  alt="Ikon email"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:boymakmurjaya@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  boymakmurjaya@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/clock.png"
                  alt="Ikon jam buka"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span>Senin - Minggu: 24 Jam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950/50 py-4">
        <div className="container text-center text-sm text-gray-500">
          © {currentYear} CV BOY MAKMUR JAYA. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
