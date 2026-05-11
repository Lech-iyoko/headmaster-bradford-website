"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in"

const services = [
  {
    category: "Ladies&apos; Cuts & Styling",
    items: [
      { name: "Cut & Blow Dry", price: "From £35" },
      { name: "Blow Dry / Styling", price: "From £20" },
      { name: "Wash & Cut", price: "From £28" },
      { name: "Fringe Trim", price: "£8" },
    ],
  },
  {
    category: "Colouring",
    items: [
      { name: "Full Head Colour", price: "From £55" },
      { name: "Half Head Highlights", price: "From £50" },
      { name: "Full Head Highlights", price: "From £75" },
      { name: "Root Touch-Up", price: "From £40" },
      { name: "Toner / Gloss", price: "From £25" },
    ],
  },
  {
    category: "Braids & Extensions",
    items: [
      { name: "Box Braids", price: "From £80" },
      { name: "Cornrows", price: "From £40" },
      { name: "Crochet Braids", price: "From £60" },
      { name: "Weave Install", price: "From £50" },
    ],
  },
  {
    category: "Men & Children",
    items: [
      { name: "Men&apos;s Cut", price: "From £18" },
      { name: "Children&apos;s Cut (under 12)", price: "From £15" },
      { name: "Beard Trim", price: "From £10" },
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Services & Pricing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From classic cuts to creative colours and intricate braids, we offer a full range of hair services tailored to you.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <Stagger className="grid md:grid-cols-2 gap-6 md:gap-8" staggerDelay={0.12}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="bg-card border-border rounded-2xl overflow-hidden h-full transition-shadow hover:shadow-lg">
                  <CardHeader className="bg-secondary/50 pb-4">
                    <CardTitle className="text-xl font-serif text-foreground" dangerouslySetInnerHTML={{ __html: service.category }} />
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                          <span className="text-foreground" dangerouslySetInnerHTML={{ __html: item.name }} />
                          <span className="text-primary font-medium">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Note */}
        <FadeIn delay={0.2}>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            Prices may vary depending on hair length, thickness, and service complexity. Please contact us for a personalised quote.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
