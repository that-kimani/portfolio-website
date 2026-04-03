import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SkillsCarousel from './components/SkillsCarousel/SkillsCarousel'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SkillsCarousel />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  )
}

export default App
