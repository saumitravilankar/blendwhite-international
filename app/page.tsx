import About from '@/components/About'
import ContactMap from '@/components/contact-map'
import FAQ from '@/components/faq'
import Feedback from '@/components/feedbacks'
import Founders from '@/components/founders-section'
import Hero from '@/components/hero'
import HomePageIntro from '@/components/homepage-intro'
import Importance from '@/components/importance'
import OurProducts from '@/components/our-products'
import RecipeCarousel from '@/components/recipe-carousel'
import Recipes from '@/components/recipes'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Importance />
      <Founders />
      <OurProducts />
      <Recipes />
      <RecipeCarousel />
      <FAQ />
      <Feedback />
      <ContactMap />
    </>
  )
}
