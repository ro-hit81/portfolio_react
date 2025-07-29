"use client"

import React from 'react'
import { CheckCircle, Award, Calendar, MapPin } from 'lucide-react'
import styles from '../../styles/components/About.module.css'

const About = () => {
  const highlights = [
    "Expert in satellite imagery analysis and remote sensing technologies",
    "5+ years of experience in AI/ML applications for environmental monitoring", 
    "Published researcher in Earth Observation and Climate Science",
    "Proficient in Python, TensorFlow, Google Earth Engine, and cloud platforms"
  ]

  const expertise = [
    "Satellite Image Analysis",
    "Machine Learning & Deep Learning", 
    "Environmental Monitoring",
    "Remote Sensing Technologies",
    "Climate Data Analysis",
    "Geospatial Analytics"
  ]

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior EO & AI Specialist",
      description: "Leading satellite data analysis projects and developing AI solutions for environmental monitoring and climate research."
    },
    {
      year: "2021 - 2023", 
      title: "Remote Sensing Analyst",
      description: "Specialized in processing and analyzing satellite imagery for land use monitoring and change detection studies."
    },
    {
      year: "2019 - 2021",
      title: "Research Assistant",
      description: "Conducted research on machine learning applications in Earth observation and published multiple papers."
    }
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

        {/* Professional Timeline */}
        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>Professional Journey</h3>
          <div className={styles.timelineContainer}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <Calendar size={16} />
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
