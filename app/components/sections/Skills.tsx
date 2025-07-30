"use client"

import React, { useState, useEffect } from 'react'
import { 
  Code2, Database, Brain, Globe2, Award, Settings,
  FileCode, BarChart3, CloudCog, Layers, Map, 
  Satellite, Monitor, GitBranch, Container, Cpu, Zap
} from 'lucide-react'
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
      icon: Code2,
      colorClass: "programming",
      skills: [
        { name: "Python", level: 95, icon: FileCode },
        { name: "JavaScript", level: 85, icon: Code2 },
        { name: "R", level: 80, icon: BarChart3 },
        { name: "SQL", level: 88, icon: Database }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      colorClass: "ai",
      skills: [
        { name: "TensorFlow", level: 90, icon: Cpu },
        { name: "PyTorch", level: 85, icon: Zap },
        { name: "Scikit-learn", level: 92, icon: BarChart3 },
        { name: "OpenCV", level: 88, icon: Monitor }
      ]
    },
    {
      title: "Earth Observation",
      icon: Globe2,
      colorClass: "earth",
      skills: [
        { name: "Google Earth Engine", level: 95, icon: Satellite },
        { name: "QGIS", level: 90, icon: Map },
        { name: "ENVI", level: 85, icon: Layers },
        { name: "ArcGIS", level: 80, icon: Globe2 }
      ]
    },
    {
      title: "Data & Cloud",
      icon: Database,
      colorClass: "data",
      skills: [
        { name: "AWS", level: 85, icon: CloudCog },
        { name: "Docker", level: 80, icon: Container },
        { name: "Jupyter", level: 95, icon: FileCode },
        { name: "Git", level: 90, icon: GitBranch }
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
    { name: "Jupyter", icon: FileCode, colorClass: "orange" },
    { name: "VSCode", icon: Code2, colorClass: "blue" },
    { name: "Docker", icon: Container, colorClass: "blueDeep" },
    { name: "Git", icon: GitBranch, colorClass: "red" },
    { name: "Tableau", icon: BarChart3, colorClass: "blueLight" },
    { name: "Power BI", icon: BarChart3, colorClass: "yellow" }
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
                  <div className={`${styles.categoryIcon} ${styles[category.colorClass]}`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skillIndex} className={styles.skillItem}>
                        <div className={styles.skillHeader}>
                          <div className={styles.skillNameWithIcon}>
                            <SkillIcon size={16} className={styles.skillIcon} />
                            <span className={styles.skillName}>{skill.name}</span>
                          </div>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div 
                            className={`${styles.progressFill} ${styles[category.colorClass]}`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
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
                  <IconComponent className={`${styles.toolIcon} ${styles[tool.colorClass]}`} size={32} />
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
