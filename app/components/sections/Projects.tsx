"use client"

import React from 'react'
import { ExternalLink, Github, Satellite, Brain, Database } from 'lucide-react'
import styles from '../../styles/components/Projects.module.css'

const Projects = () => {
  const projects = [
    {
      title: "Automatic Satellite Image Downloader",
      description: "Automated system for downloading and processing satellite imagery from various sources including Landsat, Sentinel, and MODIS. Features include batch processing, cloud filtering, and metadata extraction.",
      image: Satellite,
      tags: ["Python", "API", "Remote Sensing", "Automation"],
      github: "https://github.com/ro-hit81/Automatic-Satellite-Image-Downloader",
      demo: null
    },
    {
      title: "Land Cover Classification using GEE",
      description: "Machine learning-based land cover classification system using Google Earth Engine. Implements Random Forest and SVM algorithms for accurate terrain analysis.",
      image: Database,
      tags: ["Google Earth Engine", "JavaScript", "Machine Learning", "Classification"],
      github: "https://github.com/ro-hit81/Landcover_GEE",
      demo: null
    },
    {
      title: "AI-Powered Climate Monitoring",
      description: "Deep learning system for analyzing climate patterns using satellite data. Features time-series analysis, anomaly detection, and predictive modeling for environmental changes.",
      image: Brain,
      tags: ["TensorFlow", "Time Series", "Climate Science", "Deep Learning"],
      github: null,
      demo: "https://climate-monitor-demo.com"
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Featured Projects
        </h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const IconComponent = project.image
            return (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <IconComponent size={48} />
                </div>
                
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.projectLinks}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
