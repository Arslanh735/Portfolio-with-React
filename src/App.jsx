import CodeBackground from './components/CodeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Process from './components/Process'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <CodeBackground />
      <Navbar />
      <main>
        <Hero /><About /><Projects /><Services /><Skills /><Process /><Experience /><Testimonials /><Contact />
      </main>
      <Footer />
    </>
  )
}
