import Navigation from './components/layout/Navigation'
import ScrollFadeOverlay from './components/effects/ScrollFadeOverlay'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Blog from './components/sections/Blog'
import Projects from './components/sections/Projects'
import Awards from './components/sections/Awards'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ScrollFadeOverlay />
      
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="section-fade-in">
        <About />
      </section>
      <section id="skills" className="section-fade-in">
        <Skills />
      </section>
      <section id="blog" className="section-fade-in">
        <Blog />
      </section>
      <section id="projects" className="section-fade-in">
        <Projects />
      </section>
      <section id="awards" className="section-fade-in">
        <Awards />
      </section>
      <section id="contact" className="section-fade-in">
        <Contact />
      </section>
    </main>
  )
}
