import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Share2, Globe } from "lucide-react";

export default function KontakPage() {
  const primaryPhoneNumber = "6281396565157";
  const message =
    "Halo, saya mengunjungi halaman kontak Anda dan tertarik untuk menyewa mobil dari CV BOY MAKMUR JAYA. Bisa berikan info lebih lanjut?";

  const whatsappUrl = `https://wa.me/${primaryPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const formActionUrl = `https://wa.me/${primaryPhoneNumber}`;

  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        breadcrumb="Beranda / Kontak"
        imageUrl="/background.webp"
        imageHint="contact us concept"
      />
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Tetap Terhubung Dengan Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami senang mendengar dari Anda! Apakah Anda memiliki
                pertanyaan, butuh penawaran, atau ingin memesan mobil, tim kami
                siap membantu 24/7.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Alamat Kantor
                    </h3>
                    <p className="text-muted-foreground">
                      Jl. Tuba IV No.26, Tegal Sari Mandala III, Kec. Medan
                      Denai, Kota Medan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Telepon & WhatsApp
                    </h3>
                    <p className="text-muted-foreground">
                      Hubungi kami untuk respon cepat.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      className="text-primary font-semibold hover:underline text-lg"
                    >
                      +62 813-9656-5157
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Alamat Email
                    </h3>
                    <p className="text-muted-foreground">
                      Kirimkan pertanyaan Anda melalui email.
                    </p>
                    <a
                      href="mailto:boymakmurjaya@gmail.com"
                      className="text-primary font-semibold hover:underline text-lg"
                    >
                      boymakmurjaya@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Share2 className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Social Media
                    </h3>
                    <p className="text-muted-foreground">
                      Ikuti kami untuk update terbaru.
                    </p>
                    <a
                      href="https://www.tiktok.com/@cv.boymakmurjaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline text-lg"
                    >
                      @cv.boymakmurjaya
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Area Layanan
                    </h3>
                    <p className="text-muted-foreground">
                      Kami melayani seluruh area Medan, termasuk Medan Kota,
                      Medan Selayang, Helvetia, Johor, Amplas, Marelan, Denai,
                      Sunggal, Medan Timur, Medan Baru, Polonia, dan Tuntungan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan Cepat</CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-4"
                    action={formActionUrl}
                    target="_blank"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="Nama Anda" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Nomor Telepon Aktif"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan Anda</Label>
                      <Textarea
                        id="message"
                        name="text"
                        placeholder="Contoh: 'Halo, saya ingin rental mobil Avanza lepas kunci untuk besok.'"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Kirim via WhatsApp
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      *Tombol ini akan mengarahkan Anda ke aplikasi WhatsApp.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-16 rounded-lg overflow-hidden h-96 shadow-lg">
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
        </div>
      </section>
    </>
  );
}
