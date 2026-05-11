"use client"

import { motion } from "framer-motion"
import { Scissors, Palette, Heart } from "lucide-react"
import { Stagger, StaggerItem } from "@/components/motion/fade-in"

const highlights = [
  {
    icon: Scissors,
    title: "Experienced Local Stylist",
    description: "Years of expertise serving the Shipley community with skill and care.",
  },
  {
    icon: Palette,
    title: "Cuts, Colour & Styling",
    description: "From classic cuts to vibrant colours, braids, and extensions.",
  },
  {
    icon: Heart,
    title: "Welcoming & Relaxed",
    description: "A friendly salon where you can unwind and feel at home.",
  },
]

export function Highlights() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <Stagger className="grid md:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.15}>
          {highlights.map((item, index) => (
            <StaggerItem key={index} className="text-center group">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
