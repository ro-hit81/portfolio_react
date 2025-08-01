"use client"

import Navigation from './components/layout/Navigation'
import ScrollFadeOverlay from './components/effects/ScrollFadeOverlay'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Blog from './components/sections/Blog'
import Projects from './components/sections/Projects'
import Awards from './components/sections/Awards'
import Contact from './components/sections/Contact'
import dynamic from 'next/dynamic'

// Only load the problematic About component (with WorldMap) dynamically
const About = dynamic(() => import('./components/sections/About'), { 
  ssr: false,
  loading: () => (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="flex items-center justify-center">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    </section>
  )
})

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
