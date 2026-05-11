"use client"

import Image from "next/image"
import { FadeIn } from "@/components/motion/fade-in"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <FadeIn direction="right" duration={0.9}>
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/julie-Wo17DLcit9TQBJSn56AF9ZPgYCjUV6.jpg"
                alt="Julie - Owner and Stylist"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left" duration={0.9} delay={0.15}>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              Meet Julie
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Julie has been cutting and colouring hair in Shipley for years, building a loyal base of regular clients who come back for her friendly approach, attention to detail, and honest advice.
              </p>
              <p>
                With a passion for making everyone feel welcome, Julie creates a relaxed, comfortable atmosphere where you can truly unwind while getting a style that suits you perfectly.
              </p>
              <p>
                Whether you&apos;re after a simple trim, a bold new colour, intricate braids, or a complete transformation, Julie takes the time to listen and deliver exactly what you&apos;re looking for.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif text-xl text-foreground italic">
                &quot;Your hair is my canvas, and I love what I do.&quot;
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                — Julie, Owner & Stylist
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
