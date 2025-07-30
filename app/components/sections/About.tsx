"use client"

import React from 'react'
import { CheckCircle, Award } from 'lucide-react'
import WorldMapJourney from './LeafletWorldMap'
import styles from '../../styles/components/About.module.css'

const About = () => {
  const highlights = [
    "Expert in satellite imagery analysis and remote sensing technologies",
    "5+ years of experience in AI/ML applications for environmental monitoring", 
    "Active researcher in Earth Observation and Climate Science",
    "Proficient in Python, TensorFlow, PyTorch, Google Earth Engine, AWS EMR, and cloud platforms"
  ]

  const expertise = [
    "Satellite Image Analysis",
    "Machine Learning & Deep Learning", 
    "Environmental Monitoring",
    "Remote Sensing Technologies",
    "Climate Data Analysis",
    "Geospatial Analytics",
    "High Performance Computing (HPC) & Multi-GPU Cluster Environments",
    "Cloud Platforms (Google Earth Engine, AWS EMR)"
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          About Me
        </h2>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              I am a passionate Earth Observation and AI specialist with expertise in satellite imagery analysis, 
              machine learning, and environmental monitoring. My work focuses on developing innovative solutions 
              for climate research, land use monitoring, and disaster management using cutting-edge AI technologies.
            </p>
            
            <p className={styles.description}>
              With a strong background in remote sensing and data science, I have successfully delivered 
              numerous projects that leverage satellite data to generate actionable insights for environmental 
              conservation and sustainable development initiatives.
            </p>

            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <CheckCircle className={styles.highlightIcon} size={20} />
                  <span className={styles.highlightText}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Key Expertise</h3>
            <div className={styles.skillsList}>
              {expertise.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <Award className={styles.skillIcon} size={16} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive World Map with Professional Journey */}
        <WorldMapJourney />
      </div>
    </section>
  )
}

export default About
