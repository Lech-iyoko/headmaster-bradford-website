"use client"

import { motion } from "framer-motion"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Briggate", "Shipley", "West Yorkshire", "BD17 7BP"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["01onal 123 4567"],
    action: { href: "tel:+441274123456", label: "Tap to call" },
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: [
      "Monday - Friday: 9am - 6pm",
      "Saturday: 9am - 5pm",
      "Sunday: Closed",
    ],
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To book an appointment, simply give us a call or send a message. We&apos;d love to hear from you!
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <Stagger className="space-y-6" staggerDelay={0.1}>
            {contactInfo.map((item, index) => (
              <StaggerItem key={index} direction="right" distance={30}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="bg-card border-border rounded-2xl transition-shadow hover:shadow-md">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                        {item.action && (
                          <a
                            href={item.action.href}
                            className="inline-block mt-2 text-sm text-primary hover:underline"
                          >
                            {item.action.label}
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}

            {/* CTA Buttons */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full flex-1 transition-transform hover:scale-105">
                  <a href="tel:+441274123456">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Book
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full flex-1 transition-transform hover:scale-105">
                  <a
                    href="https://wa.me/441274123456"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </StaggerItem>
          </Stagger>

          {/* Map */}
          <FadeIn direction="left" duration={0.9}>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.1234567890123!2d-1.7730!3d53.8330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBriggate%2C%20Shipley!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Julie's Hair Salon Location"
                className="absolute inset-0"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
