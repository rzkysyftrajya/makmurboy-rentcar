"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLightbox } from "@/hooks/use-lightbox";

export function AboutSummary() {
  const { openLightbox } = useLightbox();
  const imageUrl = "/about-summary.webp";

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <button
          className="relative h-[500px] lg:h-auto lg:aspect-[4/5] animate-fade-in-up block"
          onClick={() => openLightbox(imageUrl)}
        >
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
          <Image
            src={imageUrl}
            alt="Tim Profesional CV BOY MAKMUR JAYA"
            data-ai-hint="professional team meeting"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </button>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="font-semibold text-primary uppercase tracking-wider">
            TENTANG KAMI
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Lebih dari Sekadar Rental Mobil, Kami Adalah Partner Perjalanan Anda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Sejak didirikan, CV BOY MAKMUR JAYA mendedikasikan diri untuk
            menjadi partner perjalanan yang dapat diandalkan, memberikan tidak
            hanya kendaraan berkualitas, tetapi juga ketenangan pikiran dan
            pelayanan yang tulus dari hati.
          </p>
          <Button asChild size="lg" className="mt-8 group" variant="outline">
            <Link href="/tentang">
              Kenali Kami Lebih Dalam{" "}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
