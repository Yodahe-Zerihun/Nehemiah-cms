import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import FeaturesSection from '@/components/FeatureSection'
import About from '../../components/sections/About'
import TestimonialsSection from '@/components/sections/Testimonial'
import FaqSection from '@/components/sections/FaqSection'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
 <>
    <div className="justify-center flex z-50 ">
      <Header/>
    </div>
    <Hero/>
    <div className="">

        <FeaturesSection/>
    </div>
    <About/>
    <TestimonialsSection/>
    <FaqSection/>
    <Contact/>
    <Footer/>
 </>

  )
}