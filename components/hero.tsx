"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Full-bleed model image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-vKoPnGJmc57s0zr2oLBRcPY0L7BuWA.jpg"
        alt="Julie's Hair Salon"
        fill
        className="object-cover object-top"
        priority
      />

      {/* Dark gradient from left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />
      {/* Dark gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      {/* Subtle gold glow behind model */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_45%,rgba(201,168,76,0.10)_0%,transparent_65%)]" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-lg">
          <motion.p
            className="text-primary text-xs font-medium tracking-[0.35em] uppercase mb-6"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Shipley · Bradford
          </motion.p>

          <motion.h1
            className="font-serif font-bold leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl text-primary">
              JULIE&apos;S
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-foreground mt-1">
              HAIR SALON
            </span>
          </motion.h1>

          <motion.div
            className="mt-3 h-px w-16 bg-primary/60"
            initial={{ scaleX: 0, originX: "0%" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          />

          <motion.p
            className="mt-5 text-xl md:text-2xl text-primary/80 font-serif italic"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            Beautiful Hair, Beautiful You
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full text-base bg-primary text-primary-foreground hover:bg-primary/90 border-0 transition-transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              <a href="tel:+447717163988">
                <Phone className="w-5 h-5 mr-2" />
                Call to Book
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full text-base border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-transform hover:scale-105"
            >
              <a href="#contact">
                <MapPin className="w-5 h-5 mr-2" />
                Find Us
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
