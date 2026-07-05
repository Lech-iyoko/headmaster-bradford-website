"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles, Link2, Layers, Droplets } from "lucide-react"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in"

const services = [
  {
    icon: Scissors,
    name: "Hairstyling",
    description: "Expert cuts, blow dries, and creative styling tailored to you.",
  },
  {
    icon: Sparkles,
    name: "Braids",
    description: "Box braids, cornrows, and intricate braid styles crafted with precision.",
  },
  {
    icon: Link2,
    name: "Crochet Extensions",
    description: "Full, natural-looking crochet installs for lasting volume and length.",
  },
  {
    icon: Layers,
    name: "Weaving Extensions",
    description: "Seamless weave installs that blend beautifully with your natural hair.",
  },
  {
    icon: Droplets,
    name: "Hair Treatments",
    description: "Nourishing treatments to restore shine, strength, and vitality.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From everyday styling to specialist extensions and treatments — call us to discuss your needs and get a personalised quote.
          </p>
        </FadeIn>

        {/* Services Grid — 3 top, 2 bottom centred */}
        <Stagger className="grid md:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.1}>
          {services.slice(0, 3).map((service, index) => (
            <StaggerItem key={index}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 md:max-w-2xl md:mx-auto" staggerDelay={0.1}>
          {services.slice(3).map((service, index) => (
            <StaggerItem key={index}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Pricing note */}
        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-10 italic">
            Pricing varies by style, length, and complexity. Contact us for a personalised quote.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <div className="h-full bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 transition-colors hover:border-primary/40 group">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <service.icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
            {service.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
