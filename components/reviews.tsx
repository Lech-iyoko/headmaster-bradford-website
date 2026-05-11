"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in"

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Julie is absolutely amazing! She always knows exactly what I want and the salon is so welcoming. Been coming here for years and wouldn't go anywhere else.",
  },
  {
    name: "Emma T.",
    rating: 5,
    text: "Had my box braids done by Julie and they were perfect! She took her time and made sure I was comfortable throughout. Highly recommend!",
  },
  {
    name: "Rachel K.",
    rating: 5,
    text: "Finally found a hairdresser who actually listens! Julie gave me the best colour I've ever had. The salon has such a lovely, relaxed atmosphere.",
  },
  {
    name: "Michelle D.",
    rating: 5,
    text: "Julie did an incredible job on my daughter's hair for her prom. She looked absolutely stunning. Thank you so much!",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it — hear from our lovely clients.
          </p>
        </FadeIn>

        {/* Reviews Grid */}
        <Stagger className="grid md:grid-cols-2 gap-6 md:gap-8" staggerDelay={0.12}>
          {reviews.map((review, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="bg-card border-border rounded-2xl h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + i * 0.08,
                            type: "spring",
                            stiffness: 300,
                          }}
                        >
                          <Star className="w-5 h-5 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-foreground leading-relaxed mb-4 italic">
                      &quot;{review.text}&quot;
                    </p>

                    {/* Name */}
                    <p className="text-sm font-medium text-muted-foreground">
                      — {review.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Facebook Link */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            See more reviews on Facebook
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
