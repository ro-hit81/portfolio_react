"use client"

import React from 'react'
import { Award, Trophy, Star, Medal } from 'lucide-react'
import styles from '../../styles/components/Awards.module.css'

const Awards = () => {
  const awards = [
    {
      title: "Winner – ML4Earth: Foundation Models for EO Hackathon",
      organization: "TUM Data Science in Earth Observation",
      date: "Sep 2024",
      description: "Won 1st place in a global hackathon focused on applying foundation models to Earth observation problems. Collaborated with international participants to develop a novel solution in remote sensing AI.",
      icon: Trophy
    },
    {
      title: "Eiffel Excellence Scholarship",
      organization: "Campus France / French Ministry for Europe and Foreign Affairs",
      date: "2023", 
      description: "Awarded prestigious scholarship to pursue a dual-degree in Copernicus Master's in Digital Earth. Hosted at Université Bretagne Sud (France) and Paris Lodron Universität Salzburg (Austria).",
      icon: Award
    },
    {
      title: "Winner – COVID-19 Mapathon",
      organization: "Nepal Geomatics Engineering Society",
      date: "Sep 2020",
      description: "Won first place in a national mapathon aimed at leveraging geo-informatics for pandemic response. Mapped health infrastructure and COVID-19 hotspots using open geospatial data.",
      icon: Medal
    },
    {
      title: "Outstanding Regular Student Award",
      organization: "Tribhuvan University",
      date: "2015–2019",
      description: "Received distinction in all 8 semesters for academic excellence. Recognized among top-performing students in the Geomatics Engineering program.",
      icon: Star
    },
    {
      title: "Topper – Geomatics Engineering Entrance Exam",
      organization: "Tribhuvan University",
      date: "2015",
      description: "Ranked first in the nationwide entrance examination for the Geomatics Engineering program.",
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
