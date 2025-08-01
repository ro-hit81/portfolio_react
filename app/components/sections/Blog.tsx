"use client"

import React from 'react'
import { BookOpen } from 'lucide-react'
import styles from '../../styles/components/Blog.module.css'

const Blog = () => {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            <BookOpen className={styles.titleIcon} />
            Blog & Insights
          </h2>
          <p className={styles.sectionSubtitle}>
            Sharing knowledge and experiences in Earth observation and AI
          </p>
        </div>

        <div className={styles.comingSoonContainer}>
          <div className={styles.comingSoonCard}>
            <div className={styles.comingSoonIcon}>
              📝
            </div>
            <h3 className={styles.comingSoonTitle}>Blog Coming Soon</h3>
            <p className={styles.comingSoonDescription}>
              I&apos;m working on creating valuable content about Earth observation, 
              machine learning, and remote sensing. Stay tuned for in-depth articles, 
              tutorials, and insights from my professional journey.
            </p>
            <div className={styles.comingSoonTopics}>
              <span className={styles.topic}>Deep Learning for Satellite Imagery</span>
              <span className={styles.topic}>Google Earth Engine Tutorials</span>
              <span className={styles.topic}>Climate Change Analysis</span>
              <span className={styles.topic}>Geospatial Data Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
