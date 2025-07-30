"use client"

import React from 'react'
import { ExternalLink, Github, Satellite, Brain, Database, Globe, Lock } from 'lucide-react'
import styles from '../../styles/components/Projects.module.css'

const Projects = () => {
  const projects = [
    {
      title: "ML4EARTH: Prithvi4QR Foundation Models",
      description: "🏆 Winner of ML4Earth Hackathon 2024. Foundation model for emergency response using NASA-IBM Prithvi-ViT-100 for land cover classification with 90.43% accuracy. Advanced Earth Observation foundation model designed for quick-response teams to support decision makers during climate-related disasters.",
      image: Satellite,
      tags: ["PyTorch Lightning", "Prithvi-ViT-100", "TeraTorch", "Earth Observation", "Foundation Models"],
      github: "https://github.com/ro-hit81/ML4EARTH",
      demo: "https://ml4earth24.devpost.com/",
      isWinner: true
    },
    {
      title: "Land Cover Classification using GEE",
      description: "Comprehensive cloud-based machine learning framework leveraging Google Earth Engine's planetary-scale computing platform to generate accurate land cover maps. Combines multi-temporal Landsat imagery with deep neural networks for automated land cover classification workflows.",
      image: Globe,
      tags: ["Google Earth Engine", "JavaScript", "Sentinel-2", "Machine Learning", "Remote Sensing"],
      github: "https://github.com/ro-hit81/Landcover_GEE",
      demo: "https://colab.research.google.com/github/ro-hit81/Landcover_GEE/blob/master/Landcover%20Map%20Generation.ipynb"
    },
    {
      title: "U-Net Landsat 10-Class Classification",
      description: "Advanced deep learning framework for semantic segmentation of satellite imagery using U-Net and Feature Pyramid Network architectures. Achieves high-accuracy pixel-level classification across 10 distinct land cover categories including detailed urban subcategories.",
      image: Brain,
      tags: ["TensorFlow", "U-Net", "Landsat", "Semantic Segmentation", "Deep Learning"],
      github: "https://github.com/ro-hit81/unet_landsat_10_class",
      demo: null
    },
    {
      title: "Automatic Satellite Image Downloader",
      description: "A powerful Python-based tool that simplifies the process of downloading Landsat satellite imagery using Google Earth Engine. This project eliminates the complexity of manually searching and downloading satellite products by providing an automated solution that requires only the satellite product ID.",
      image: Database,
      tags: ["Python", "Google Earth Engine", "Jupyter", "Landsat", "Geospatial"],
      github: "https://github.com/ro-hit81/Automatic-Satellite-Image-Downloader",
      demo: "https://colab.research.google.com/github/ro-hit81/Automatic-Satellite-Image-Downloader/blob/master/LandsatDownloader.ipynb"
    },
    {
      title: "Proportion Approach for Deep Learning",
      description: "Novel approach for improving deep learning model performance through proportional data analysis and advanced training strategies. Research-focused project exploring innovative methodologies for model optimization and enhanced learning efficiency.",
      image: Brain,
      tags: ["Python", "Deep Learning", "Data Analysis", "Model Optimization", "Research"],
      github: "https://github.com/ro-hit81/Proportion-Approach",
      demo: null,
      isPrivate: true
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
              <div key={index} className={`${styles.projectCard} ${project.isWinner ? styles.winnerCard : ''}`}>
                <div className={styles.projectImage}>
                  <IconComponent size={48} />
                  {project.isWinner && (
                    <div className={styles.winnerBadge}>🏆</div>
                  )}
                  {project.isPrivate && (
                    <div className={styles.privateBadge}>
                      <Lock size={16} />
                    </div>
                  )}
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
                        <span>{project.isPrivate ? 'Private' : 'Code'}</span>
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
                        <span>
                          {project.title.includes('ML4EARTH') ? 'Competition' : 
                           project.demo.includes('colab') ? 'Colab' : 'Demo'}
                        </span>
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
