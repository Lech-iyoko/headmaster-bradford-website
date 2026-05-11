"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Julie&apos;s Hair Salon
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Friendly, professional hairdressing in Shipley.
            </motion.p>
            <motion.p
              className="mt-2 text-base text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Where every visit leaves you feeling beautiful and confident.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button asChild size="lg" className="rounded-full text-base transition-transform hover:scale-105">
                <a href="tel:+441274123456">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Book
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base transition-transform hover:scale-105">
                <a href="#contact">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Us on Briggate
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-vKoPnGJmc57s0zr2oLBRcPY0L7BuWA.jpg"
                alt="Beautiful hairstyle by Julie"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative accents with subtle floating motion */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full -z-10 hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full -z-10 hidden md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
