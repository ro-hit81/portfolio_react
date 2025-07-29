"use client"

import React from 'react'
import { Award, Trophy, Star, Medal } from 'lucide-react'
import styles from '../../styles/components/Awards.module.css'

const Awards = () => {
  const awards = [
    {
      title: "Best Research Paper Award",
      organization: "International Conference on Remote Sensing",
      date: "2023",
      description: "Awarded for outstanding research in satellite image analysis and machine learning applications for environmental monitoring.",
      icon: Trophy
    },
    {
      title: "Excellence in AI Innovation",
      organization: "Tech Innovation Summit",
      date: "2022", 
      description: "Recognition for developing innovative AI solutions for climate data analysis and environmental sustainability.",
      icon: Star
    },
    {
      title: "Outstanding Graduate Student",
      organization: "University Research Department",
      date: "2021",
      description: "Honored for exceptional academic performance and significant contributions to Earth observation research.",
      icon: Medal
    },
    {
      title: "Environmental Data Science Champion",
      organization: "Green Tech Awards",
      date: "2020",
      description: "Recognized for pioneering work in applying data science techniques to environmental conservation projects.",
      icon: Award
    },
    {
      title: "Young Researcher Grant",
      organization: "National Science Foundation",
      date: "2019",
      description: "Awarded competitive research grant for innovative project on satellite-based disaster monitoring systems.",
      icon: Star
    },
    {
      title: "Best Poster Presentation",
      organization: "Earth Observation Conference",
      date: "2019",
      description: "First place for poster presentation on 'Machine Learning Applications in Land Use Change Detection'.",
      icon: Trophy
    }
  ]

  return (
    <section id="awards" className={styles.awards}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Awards & Recognition
        </h2>

        <div className={styles.awardsGrid}>
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <div key={index} className={styles.awardCard}>
                <div className={styles.awardHeader}>
                  <div className={styles.awardIcon}>
                    <IconComponent size={24} />
                  </div>
                  <div className={styles.awardInfo}>
                    <h3 className={styles.awardTitle}>{award.title}</h3>
                    <p className={styles.awardOrganization}>{award.organization}</p>
                    <p className={styles.awardDate}>{award.date}</p>
                  </div>
                </div>
                <p className={styles.awardDescription}>{award.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Awards
