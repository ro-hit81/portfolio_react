"use client"

import React, { useState } from 'react'
import { ExternalLink, Github, Satellite, Brain, Database, Trophy, ChevronDown, ChevronUp } from 'lucide-react'
import styles from '../../styles/components/Projects.module.css'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const allProjects = [
    {
      title: "ML4EARTH: Foundation Models for EO",
      description: "Winner of ML4Earth Hackathon 2024. Advanced Earth Observation foundation model designed for quick-response teams to support decision makers during climate-related disasters. Fine-tuned NASA-IBM Prithvi-ViT-100 model for rapid, accurate spatial information during large-scale disasters.",
      image: Trophy,
      tags: ["Foundation Models", "PyTorch", "TensorBoard", "Earth Observation", "AI", "Winner"],
      github: "https://github.com/ro-hit81/ML4EARTH",
      demo: null,
      featured: true
    },
    {
      title: "U-Net Landsat 10-Class Classification",
      description: "Advanced deep learning framework for semantic segmentation of satellite imagery using U-Net and Feature Pyramid Network architectures. Achieves high-accuracy pixel-level classification across 10 distinct land cover categories including detailed urban subcategories.",
      image: Brain,
      tags: ["Deep Learning", "U-Net", "TensorFlow", "Landsat", "Segmentation"],
      github: "https://github.com/ro-hit81/unet_landsat_10_class",
      demo: null,
      featured: true
    },
    {
      title: "Land Cover Classification using GEE",
      description: "Comprehensive cloud-based machine learning framework leveraging Google Earth Engine's planetary-scale computing platform to generate accurate land cover maps. Combines multi-temporal Landsat imagery with deep neural networks for automated land cover classification workflows.",
      image: Database,
      tags: ["Machine Learning", "TensorFlow", "Google Earth Engine", "Remote Sensing", "Python"],
      github: "https://github.com/ro-hit81/Landcover_GEE",
      demo: "https://colab.research.google.com/github/ro-hit81/Landcover_GEE/blob/master/Landcover%20Map%20Generation.ipynb",
      featured: true
    },
    {
      title: "Automatic Satellite Image Downloader",
      description: "A powerful Python-based tool that simplifies the process of downloading Landsat satellite imagery using Google Earth Engine. Eliminates the complexity of manually searching and downloading satellite products by providing an automated solution that requires only the satellite product ID.",
      image: Satellite,
      tags: ["Python", "Google Earth Engine", "Satellite Imagery", "Jupyter", "Geospatial"],
      github: "https://github.com/ro-hit81/Automatic-Satellite-Image-Downloader",
      demo: "https://colab.research.google.com/github/ro-hit81/Automatic-Satellite-Image-Downloader/blob/master/LandsatDownloader.ipynb",
      featured: false
    },
    {
      title: "NDVI Hotspot Analysis",
      description: "Professional Python package for analyzing vegetation indices and detecting hotspots in satellite imagery using advanced geospatial techniques and Microsoft Planetary Computer. Specializes in NDVI calculation and temporal vegetation analysis.",
      image: Database,
      tags: ["Python", "NDVI", "Remote Sensing", "Landsat", "Geospatial"],
      github: "https://github.com/ro-hit81/NDVI-Hotspot",
      demo: null,
      featured: false
    },
    {
      title: "RNN-Based Land Cover Proportion Prediction",
      description: "Advanced machine learning approach using Recurrent Neural Networks to predict land cover proportions from satellite imagery time series data. Implements temporal analysis for understanding land use change patterns.",
      image: Brain,
      tags: ["RNN", "TensorFlow", "Keras", "Time Series", "Land Cover"],
      github: "https://github.com/ro-hit81/Proportion-Approach",
      demo: null,
      featured: false
    }
  ]

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3)
  const hasMoreProjects = allProjects.length > 3

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Featured Projects
        </h2>

        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, index) => {
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

        {hasMoreProjects && (
          <div className={styles.showMoreContainer}>
            <button
              onClick={() => setShowAll(!showAll)}
              className={styles.showMoreButton}
            >
              {showAll ? (
                <>
                  <ChevronUp size={16} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Show More ({allProjects.length - 3} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
