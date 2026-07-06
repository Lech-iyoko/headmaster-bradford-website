import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { About } from "@/components/about"
import { Offers } from "@/components/offers"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="pg site-v2" id="top">
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Offers />
      <Services />
      <Gallery />
      {/* Reviews hidden until real customer reviews (from Facebook/Google) replace the placeholder ones */}
      <Contact />
      <Footer />
    </div>
  )
}
