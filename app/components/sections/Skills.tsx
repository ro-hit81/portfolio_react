"use client"

import React, { useState, useEffect } from 'react'
import { 
  Code2, Database, Brain, Globe2,
  FileCode, BarChart3, CloudCog, Layers, Map, 
  Satellite, Monitor, GitBranch, Container, Cpu, Zap,
  ChevronDown, ChevronUp, ExternalLink, GraduationCap,
  BookOpen, School, Trophy, Medal,
  PieChart, Compass
} from 'lucide-react'
import { 
  SiPython, SiJavascript, SiR, SiHtml5, SiReact,
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn,
  SiOpencv, SiPandas, SiNumpy, SiJupyter, SiTableau,
  SiGit, SiGithub, SiDocker, SiNodedotjs,
  SiPostgresql, SiAmazon, SiGooglecloud, SiLeaflet
} from 'react-icons/si'
import styles from '../../styles/components/Skills.module.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showAllCertifications, setShowAllCertifications] = useState(false)
  const [showAllTools, setShowAllTools] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 } // Lowered threshold for better mobile detection
    )

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    // Fallback: trigger animation after 2 seconds if not already visible
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true)
      }
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [isVisible])

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
      name: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2020",
      icon: Trophy, // Specialization/Advanced Course
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q4ABVX4RD6XF"
    },
    {
      name: "Geomatics Engineer",
      issuer: "Nepal Engineering Council",
      date: "2020",
      icon: Medal, // Professional License
      link: "https://nec.gov.np/applicant/detailview/1984"
    },
    {
      name: "High Performance and Disruptive Computing in Remote Sensing School ",
      issuer: "Universidade de Santiago de Compostela",
      date: "2024",
      icon: School, // Summer School
      link: "/docs/HDCRS24_Certificate.pdf"
    },
    {
      name: "AI4AGRI Summer School",
      issuer: "Transilvania University in Brașov",
      date: "2024",
      icon: School, // Summer School
      link: "/docs/AI4AGRI_Certificate.pdf"
    },
    {
      name: "Machine learning in Python with scikit-learn (Inria)",
      issuer: "France Université Numérique",
      date: "2024",
      icon: BookOpen, // Summer School
      link: "/docs/FUN_ML.pdf"
    },
    {
      name: "eCognition (From the Ground Up -Deep Learning)",
      issuer: "Trimble",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: "/docs/eCognition.pdf"
    },
    {
      name: "Healthy Urban System",
      issuer: "University of Lausanne",
      date: "2024",
      icon: GraduationCap, // University Course
      link: "/docs/HUS_Certificate.pdf"
    },
        {
      name: "Structuring Machine Learning Projects",
      issuer: "Coursera",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: "https://www.coursera.org/account/accomplishments/certificate/A4MB5C2A6LNA"
    },
    {
      name: "Sequence Models",
      issuer: "Coursera",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: "https://www.coursera.org/account/accomplishments/certificate/A6ZSVCA47QRH"
    },
    {
      name: "Convolutional Neural Networks",
      issuer: "Coursera",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: "https://www.coursera.org/account/accomplishments/certificate/5W59572HRTGU"
    },
    {
      name: "Image Classification with CNNs using Keras",
      issuer: "Coursera",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: "https://www.coursera.org/account/accomplishments/certificate/6QPBVLUKAY8N"
    },
    {
      name: "Improving Deep Neural Networks",
      issuer: "Coursera",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: "https://www.coursera.org/account/accomplishments/certificate/A4MB5C2A6LNA"
    },
    {
      name: "Neural Network & Deep Learning",
      issuer: "Coursera",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: "https://www.coursera.org/account/accomplishments/certificate/Z347RGXDQ3RM"
    },
    {
      name: "Image Processing in Python",
      issuer: "DataCamp",
      date: "2020",
      icon: BookOpen, // Course Completion
      link: ""
    }
  ]

  const tools = [
    // AI & Machine Learning
    { name: "TensorFlow", icon: SiTensorflow, colorClass: "orange" },
    { name: "PyTorch", icon: SiPytorch, colorClass: "red" },
    { name: "AWS", icon: SiAmazon, colorClass: "orange" },
    { name: "Scikit-learn", icon: SiScikitlearn, colorClass: "orange" },
    { name: "Google Earth Engine", icon: SiGooglecloud, colorClass: "blueLight" },
    { name: "QGIS", icon: Map, colorClass: "green" },

    
    // Data Science & Analysis
    { name: "Python", icon: SiPython, colorClass: "blue" },
    { name: "R", icon: SiR, colorClass: "blueLight" },
    { name: "Pandas", icon: SiPandas, colorClass: "blueLight" },
    { name: "NumPy", icon: SiNumpy, colorClass: "blue" },
    { name: "Matplotlib", icon: PieChart, colorClass: "green" },
    { name: "Jupyter", icon: SiJupyter, colorClass: "orange" },
    { name: "Tableau", icon: SiTableau, colorClass: "blueLight" },
    { name: "Keras", icon: SiKeras, colorClass: "red" },
    { name: "OpenCV", icon: SiOpencv, colorClass: "blue" },
    { name: "eCognition", icon: Brain, colorClass: "purple" },

    // Geospatial & Remote Sensing
    { name: "ArcGIS", icon: Compass, colorClass: "blue" },
    { name: "SNAP", icon: Satellite, colorClass: "blue" },
    { name: "ENVI", icon: Satellite, colorClass: "blueDeep" },
    { name: "Leaflet", icon: SiLeaflet, colorClass: "green" },
    { name: "PostGIS", icon: Database, colorClass: "blue" },
    
    // Programming & Web Development
    { name: "JavaScript", icon: SiJavascript, colorClass: "yellow" },
    { name: "HTML/CSS", icon: SiHtml5, colorClass: "red" },
    { name: "React", icon: SiReact, colorClass: "blueLight" },
    { name: "Node.js", icon: SiNodedotjs, colorClass: "green" },
    
    // Development Tools & Infrastructure
    { name: "MATLAB", icon: Cpu, colorClass: "orange" },
    { name: "VSCode", icon: Code2, colorClass: "blue" },
    { name: "Git", icon: SiGit, colorClass: "red" },
    { name: "GitHub", icon: SiGithub, colorClass: "black" },
    { name: "Docker", icon: SiDocker, colorClass: "blueDeep" },
    
    // Database & Cloud
    { name: "SQL", icon: Database, colorClass: "blue" },
    { name: "PostgreSQL", icon: SiPostgresql, colorClass: "blueDeep" },
    { name: "Google Cloud", icon: SiGooglecloud, colorClass: "blue" }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Skills & Expertise
        </h2>
        
        {/* Debug button - remove in production */}
        {!isVisible && (
          <button 
            onClick={() => setIsVisible(true)}
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              zIndex: 1000
            }}
          >
            Trigger Animation
          </button>
        )}

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
                              width: isVisible ? `${skill.level}%` : '0%',
                              backgroundColor: isVisible ? undefined : '#e2e8f0' // Fallback color
                            }}
                            data-level={skill.level}
                            data-category={category.colorClass}
                            data-visible={isVisible}
                          >
                            {/* Floating bubbles */}
                            <div className={styles.bubble1}></div>
                            <div className={styles.bubble2}></div>
                            <div className={styles.bubble3}></div>
                          </div>
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
            {(showAllCertifications ? certifications : certifications.slice(0, 6)).map((cert, index) => {
              const IconComponent = cert.icon
              const CertificationCard = () => (
                <div className={`${styles.certificationCard} ${cert.link ? styles.clickable : ''}`}>
                  <div className={styles.certificationHeader}>
                    <div className={styles.certificationIcon}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.certificationInfo}>
                      <h4 className={styles.certificationName}>{cert.name}</h4>
                      <p className={styles.certificationIssuer}>{cert.issuer}</p>
                      <p className={styles.certificationDate}>{cert.date}</p>
                    </div>
                    {cert.link && (
                      <div className={styles.linkIcon}>
                        <ExternalLink size={16} />
                      </div>
                    )}
                  </div>
                </div>
              )
              
              return cert.link ? (
                <a 
                  key={index} 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.certificationLink}
                >
                  <CertificationCard />
                </a>
              ) : (
                <div key={index}>
                  <CertificationCard />
                </div>
              )
            })}
          </div>
          
          {certifications.length > 6 && (
            <div className={styles.showMoreContainer}>
              <button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                className={styles.showMoreButton}
              >
                {showAllCertifications ? (
                  <>
                    <ChevronUp size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    Show More ({certifications.length - 6} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Tools */}
        <div className={styles.toolsSection}>
          <h3 className={styles.toolsTitle}>Tools & Technologies</h3>
          <div className={styles.toolsGrid}>
            {(showAllTools ? tools : tools.slice(0, 12)).map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <div key={index} className={styles.toolCard}>
                  <IconComponent className={`${styles.toolIcon} ${styles[tool.colorClass]}`} size={32} />
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              )
            })}
          </div>
          
          {tools.length > 12 && (
            <div className={styles.showMoreContainer}>
              <button
                onClick={() => setShowAllTools(!showAllTools)}
                className={styles.showMoreButton}
              >
                {showAllTools ? (
                  <>
                    <ChevronUp size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    Show More ({tools.length - 12} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
