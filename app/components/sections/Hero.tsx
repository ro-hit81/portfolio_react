"use client"

import React from 'react'
import { ArrowDown, Download, Sparkles, Satellite, Brain } from 'lucide-react'
import styles from '../../styles/components/Hero.module.css'

const Hero = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed', icon: Sparkles },
    { value: '5+', label: 'Years Experience', icon: Brain },
    { value: '15+', label: 'Awards Won', icon: Satellite },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>
            <span className={styles.gradientText}>
              Rohit Khati
            </span>
          </h1>
          <h2 className={styles.subtitle}>
            Earth Observation & AI Specialist
          </h2>
          <p className={styles.description}>
            Transforming satellite data into actionable insights through cutting-edge artificial intelligence 
            and machine learning techniques for environmental monitoring and climate research.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <button
            onClick={() => scrollToSection('#about')}
            className={styles.primaryButton}
          >
            <span>Learn More</span>
            <ArrowDown size={18} />
          </button>
          <a
            href="/rohit-khati-resume.pdf"
            download="Rohit_Khati_Resume.pdf"
            className={styles.secondaryButton}
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Stats Section */}
        <div className={styles.stats}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <IconComponent size={24} />
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('#about')}
      >
        <span className={styles.scrollText}>Scroll to explore</span>
        <ArrowDown size={20} className={styles.scrollIcon} />
      </div>
    </section>
  )
}

export default Hero
