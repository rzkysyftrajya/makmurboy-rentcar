import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFAB } from "@/components/whatsapp-fab";
import { ThemeProvider } from "@/components/common/theme-provider";
import { LightboxProvider } from "@/components/lightbox-provider";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Rental Mobil Medan & Sewa Mobil Murah - Lepas Kunci & Supir | CV BOY MAKMUR JAYA",
  description:
    "Jasa rental mobil di Medan dari CV BOY MAKMUR JAYA. Menyediakan sewa mobil murah, lepas kunci atau dengan supir. Armada lengkap: Avanza, Innova, Hiace, Alphard. Layanan 24 jam untuk wisata, bisnis, dan antar jemput Bandara Kualanamu.",
  keywords:
    "rental mobil medan, sewa mobil medan, sewa mobil medan murah, sewa mobil medan lepas kunci, rental mobil medan dengan supir, rental mobil bandara kualanamu, rental mobil medan ke danau toba, rental mobil avanza medan, sewa innova reborn medan, rental hiace medan, sewa mobil pengantin medan, rental mobil mewah medan, car rental medan, paket wisata medan, rental mobil medan kota, medan selayang, medan helvetia, medan johor, medan denai",
  robots: "index, follow",
  openGraph: {
    title: "Rental & Sewa Mobil Medan Murah - CV BOY MAKMUR JAYA",
    description:
      "Armada lengkap dan terawat untuk segala kebutuhan perjalanan Anda di Medan. Lepas kunci, dengan supir, harian, bulanan. Hubungi kami!",
    url: "https://www.boymakmurjaya.com",
    images: [
      {
        url: "https://placehold.co/1200x630.png",
        width: 1200,
        height: 630,
        alt: "Armada Rental Mobil Medan - CV BOY MAKMUR JAYA",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17502680999"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17502680999');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LightboxProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
            <WhatsAppFAB />
          </LightboxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}        height: 630,
        alt: "Armada Rental Mobil Medan - CV BOY MAKMUR JAYA",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17502680999"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17502680999');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LightboxProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
            <WhatsAppFAB />
          </LightboxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
        height: 630,
        alt: "Armada Rental Mobil Medan - CV BOY MAKMUR JAYA",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17502680999"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17502680999');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LightboxProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
            <WhatsAppFAB />
          </LightboxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
        alt: "Armada Rental Mobil Medan - CV BOY MAKMUR JAYA",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LightboxProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
            <WhatsAppFAB />
          </LightboxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
