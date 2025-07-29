"use client"

import React from 'react'
import { Calendar, Clock, ArrowRight, BookOpen, ExternalLink } from 'lucide-react'
import styles from '../../styles/components/Blog.module.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Deep Learning for Satellite Image Classification: A Comprehensive Guide",
      excerpt: "Exploring how convolutional neural networks can be applied to classify land cover types using Sentinel-2 imagery. This post covers data preprocessing, model architecture, and practical implementation tips.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Machine Learning",
      image: "🛰️",
      tags: ["Deep Learning", "Remote Sensing", "Python", "TensorFlow"],
      link: "#"
    },
    {
      id: 2,
      title: "Google Earth Engine for Climate Change Monitoring",
      excerpt: "Learn how to leverage Google Earth Engine's cloud computing platform to analyze long-term climate data and detect environmental changes at scale.",
      date: "2024-02-28",
      readTime: "6 min read",
      category: "Earth Observation",
      image: "🌍",
      tags: ["Google Earth Engine", "Climate", "JavaScript", "Analysis"],
      link: "#"
    },
    {
      id: 3,
      title: "Building Real-time Disaster Response Systems with Satellite Data",
      excerpt: "A technical deep-dive into creating automated systems that can detect and respond to natural disasters using real-time satellite imagery and machine learning.",
      date: "2024-02-10",
      readTime: "10 min read",
      category: "Applications",
      image: "🚨",
      tags: ["Disaster Response", "Real-time", "AI", "Automation"],
      link: "#"
    },
    {
      id: 4,
      title: "From Pixels to Insights: Advanced Time Series Analysis in Remote Sensing",
      excerpt: "Understanding temporal patterns in satellite data using advanced statistical methods and machine learning techniques for environmental monitoring.",
      date: "2024-01-22",
      readTime: "7 min read",
      category: "Data Science",
      image: "📊",
      tags: ["Time Series", "Statistics", "Environmental", "Analysis"],
      link: "#"
    }
  ]

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Machine Learning", count: 1 },
    { name: "Earth Observation", count: 1 },
    { name: "Applications", count: 1 },
    { name: "Data Science", count: 1 }
  ]

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.badge}>
              <BookOpen size={16} />
              <span>Technical Insights</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Latest Blog Posts
            </h2>
            <p className={styles.sectionSubtitle}>
              Sharing knowledge and insights from the intersection of Earth Observation, 
              AI, and Geospatial Technologies
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`${styles.categoryButton} ${index === 0 ? styles.active : ''}`}
            >
              {category.name}
              <span className={styles.categoryCount}>{category.count}</span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className={styles.postsGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postImage}>
                <div className={styles.postIcon}>
                  {post.image}
                </div>
                <div className={styles.postCategory}>
                  {post.category}
                </div>
              </div>
              
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className={styles.postTitle}>
                  {post.title}
                </h3>

                <p className={styles.postExcerpt}>
                  {post.excerpt}
                </p>

                <div className={styles.postTags}>
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className={styles.moreTagsIndicator}>
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className={styles.postFooter}>
                  <a href={post.link} className={styles.readMoreButton}>
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className={styles.viewAllSection}>
          <a href="/blog" className={styles.viewAllButton}>
            <BookOpen size={20} />
            View All Posts
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
