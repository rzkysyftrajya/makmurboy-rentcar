import type { Metadata } from 'next';
import { TentangPageClient } from './tentang-client';

export const metadata: Metadata = {
  title: 'Tentang Kami - Profil CV BOY MAKMUR JAYA | Rental Mobil Medan Terpercaya',
  description: 'Kenali lebih dalam tentang CV BOY MAKMUR JAYA, partner perjalanan terpercaya Anda di Medan. Kami berkomitmen pada armada berkualitas, layanan profesional, dan kepuasan pelanggan.',
};

export default function TentangPage() {
  return <TentangPageClient />;
}
