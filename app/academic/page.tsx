"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, GraduationCap, Calendar, Award, Building, FileText } from 'lucide-react'
import styles from './academic.module.css'

interface AcademicRecord {
  id: string
  degree: string
  college: string
  periodAD: string
  periodBS: string
  status: string
  division: string
  percentage: string
  board: string
  level: string
}

const AcademicHistory = () => {
  const academicHistory: AcademicRecord[] = [
    {
      id: 'masters',
      degree: 'Copernicus Master in Digital Earth',
      college: 'Geodata Science Track',
      periodAD: '2023 - Present',
      periodBS: '2080 - Current',
      status: 'In Progress',
      division: 'Ongoing',
      percentage: 'N/A',
      board: 'Copernicus Master Program',
      level: 'Master\'s'
    },
    {
      id: 'bachelors',
      degree: 'Bachelors in Geomatics Engineering',
      college: 'Western Regional Campus',
      periodAD: '2015 - 2019',
      periodBS: '2072 - 2076',
      status: 'Completed',
      division: 'Distinction',
      percentage: '80.04%',
      board: 'Institute of Engineering (I.O.E.), Tribhuvan University (T.U.)',
      level: 'University'
    },
    {
      id: 'higher-secondary',
      degree: 'Higher Secondary Education',
      college: 'Nepal Mega College',
      periodAD: '2013 - 2015',
      periodBS: '2069 - 2071',
      status: 'Completed',
      division: 'Distinction',
      percentage: '81.40%',
      board: 'Higher Secondary Education Board (H.S.E.B.)',
      level: 'Higher Secondary'
    },
    {
      id: 'secondary',
      degree: 'School Leaving Certificate (SLC)',
      college: 'Nightingale International Secondary School',
      periodAD: '2013',
      periodBS: '2069',
      status: 'Completed',
      division: 'First Division with Distinction',
      percentage: '83.88%',
      board: 'School Leaving Certificate Board (S.L.C.)',
      level: 'Secondary'
    }
  ]

  return (
    <div className={styles.academicPage}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className={styles.pageTitle}>
            <div className={styles.titleIcon}>
              <GraduationCap size={48} />
            </div>
            <h1>Academic Background</h1>
            <p>Educational journey and academic achievements</p>
          </div>
        </div>
      </div>

      {/* Academic History */}
      <div className={styles.content}>
        <div className={styles.container}>
                    {academicHistory.map((education) => (
            <div key={education.id} className={styles.academicCard}>
              <div className={styles.cardHeader}>
                <div className={styles.levelBadge}>
                  {education.level}
                </div>
                <div className={styles.status}>
                  {education.status}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.degree}>{education.degree}</h3>
                
                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <Building size={16} />
                    <span>{education.college}</span>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <Calendar size={16} />
                    <span>{education.periodAD} ({education.periodBS})</span>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <Award size={16} />
                    <span>{education.division} - {education.percentage}</span>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <FileText size={16} />
                    <span>{education.board}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AcademicHistory
