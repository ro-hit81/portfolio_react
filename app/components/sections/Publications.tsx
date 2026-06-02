"use client"

import React from 'react'
import { FileText, ExternalLink, Users, Calendar, BookOpen } from 'lucide-react'
import styles from '../../styles/components/Publications.module.css'

interface Publication {
  title: string
  authors: string[]
  journal: string
  year: string
  type: 'journal' | 'conference' | 'preprint' | 'book'
  doi?: string
  url?: string
  citations?: number
  description?: string
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Deforestation Monitoring Using One-Class Classification Applied to Satellite Image Time Series",
      authors: ["Rohit Khati"],
      journal: "Master's Thesis - Paris Lodron University of Salzburg",
      year: "2025",
      type: "book",
      url: "https://eplus.uni-salzburg.at/Abschlussarbeiten/content/titleinfo/12628731/full.pdf",
      description: "Innovative framework combining Lightweight Temporal Attention Encoder with one-class classification for cloud-aware deforestation detection using Sentinel-2 time series in tropical regions."
    },
    {
      title: "Morphology on Label Images: Multilayer Approach",
      authors: ["Pasi Fränti", "Swaiz Ahmed", "Rohit Khati", "Sébastien Lefèvre"],
      journal: "Journal of Electronic Imaging",
      year: "2025",
      type: "journal",
      doi: "10.1117/1.JEI.34.6.063017",
      url: "https://doi.org/10.1117/1.JEI.34.6.063017",
      description: "Novel mathematical morphology framework for label images using multilayer approach, dividing images into binary layers to solve label ordering problems in semantic content processing."
    },
    {
      title: "E-CAD: Web-based Information Service for Land Management",
      authors: ["M Neupane", "R Jaiswal", "R Khati", "S Dhakal", "S Sharma"],
      journal: "The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
      year: "2019",
      type: "conference",
      url: "https://isprs-archives.copernicus.org/articles/XLII-5-W3/65/2019/isprs-archives-XLII-5-W3-65-2019.pdf",
      description: "Development of a digitized web-based land information system using open-source technologies to replace Nepal's paper-based land management system with an interactive platform for government authorities."
    },
    {
      title: "Deep Learning in Landcover Classification",
      authors: ["Rohit Khati", "Tri Dev Acharya"],
      journal: "GeoWorld - GESAN Annual Magazine",
      year: "2019",
      type: "conference",
      url: "https://www.researchgate.net/profile/Tri-Acharya/publication/348155146_Deep_Learning_in_Landcover_Classification/links/5ff13b5b45851553a01509cf/Deep-Learning-in-Landcover-Classification.pdf",
      description: "Comprehensive review of deep learning applications in landcover classification, from pixel-based to object-based approaches using convolutional networks and encoder-decoder architectures."
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return <BookOpen size={20} />
      case 'conference':
        return <Users size={20} />
      case 'preprint':
        return <FileText size={20} />
      case 'book':
        return <BookOpen size={20} />
      default:
        return <FileText size={20} />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'journal'
      case 'conference':
        return 'conference'
      case 'preprint':
        return 'preprint'
      case 'book':
        return 'thesis'
      default:
        return 'default'
    }
  }

  return (
    <section className={styles.publications} id="publications">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            <FileText className={styles.titleIcon} />
            Publications & Research
          </h2>
          <p className={styles.sectionSubtitle}>
            Research contributions in Earth observation and AI
          </p>
        </div>

        <div className={styles.publicationsGrid}>
          {publications.map((publication, index) => (
            <div key={index} className={styles.publicationCard}>
              <div className={styles.publicationHeader}>
                <div className={`${styles.typeTag} ${styles[getTypeColor(publication.type)]}`}>
                  {getTypeIcon(publication.type)}
                  <span>
                    {publication.type === 'book' ? 'Thesis' : 
                     publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                  </span>
                </div>
              </div>

              <div className={styles.publicationContent}>
                <h3 className={styles.publicationTitle}>{publication.title}</h3>
                
                <div className={styles.publicationMeta}>
                  <div className={styles.authors}>
                    <Users size={16} />
                    <span>{publication.authors.join(', ')}</span>
                  </div>
                  
                  <div className={styles.journal}>
                    <BookOpen size={16} />
                    <span>{publication.journal}</span>
                  </div>
                  
                  <div className={styles.year}>
                    <Calendar size={16} />
                    <span>{publication.year}</span>
                  </div>
                </div>

                {publication.description && (
                  <p className={styles.description}>{publication.description}</p>
                )}

                <div className={styles.publicationLinks}>
                  {publication.doi && (
                    <a 
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <ExternalLink size={16} />
                      DOI
                    </a>
                  )}
                  
                  {publication.url && (
                    <a 
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <ExternalLink size={16} />
                      View Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications