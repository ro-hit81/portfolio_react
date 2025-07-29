"use client"

import React, { useState, useEffect } from 'react'
import { Code, Database, Brain, Globe, Award, Settings } from 'lucide-react'
import styles from '../../styles/components/Skills.module.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "R", level: 80 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 92 },
        { name: "OpenCV", level: 88 }
      ]
    },
    {
      title: "Earth Observation",
      icon: Globe,
      skills: [
        { name: "Google Earth Engine", level: 95 },
        { name: "QGIS", level: 90 },
        { name: "ENVI", level: 85 },
        { name: "ArcGIS", level: 80 }
      ]
    },
    {
      title: "Data & Cloud",
      icon: Database,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Jupyter", level: 95 },
        { name: "Git", level: 90 }
      ]
    }
  ]

  const certifications = [
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      icon: Award
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services", 
      date: "2022",
      icon: Award
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2021", 
      icon: Award
    }
  ]

  const tools = [
    { name: "Jupyter", icon: Settings },
    { name: "VSCode", icon: Settings },
    { name: "Docker", icon: Settings },
    { name: "Git", icon: Settings },
    { name: "Tableau", icon: Settings },
    { name: "Power BI", icon: Settings }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={categoryIndex} className={styles.skillCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className={styles.certificationsSection}>
          <h3 className={styles.certificationsTitle}>Certifications</h3>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div key={index} className={styles.certificationCard}>
                  <div className={styles.certificationHeader}>
                    <div className={styles.certificationIcon}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.certificationInfo}>
                      <h4 className={styles.certificationName}>{cert.name}</h4>
                      <p className={styles.certificationIssuer}>{cert.issuer}</p>
                      <p className={styles.certificationDate}>{cert.date}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tools */}
        <div className={styles.toolsSection}>
          <h3 className={styles.toolsTitle}>Tools & Technologies</h3>
          <div className={styles.toolsGrid}>
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <div key={index} className={styles.toolCard}>
                  <IconComponent className={styles.toolIcon} size={32} />
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
