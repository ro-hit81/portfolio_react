import React from 'react'
import { Satellite } from 'lucide-react'
import styles from '../styles/components/SatelliteBackground.module.css'

const SatelliteBackground = () => {
  return (
    <div className={styles.satelliteContainer}>
      {/* Constellation dots */}
      <div className={styles.constellation}>
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Pair 1 - Upper area left to right */}
      <div className={styles.pair1A}>
        <Satellite className={`${styles.satelliteIcon} ${styles.blueColor}`} size={36} />
      </div>
      <div className={styles.pair1B}>
        <Satellite className={`${styles.satelliteIcon} ${styles.cyanColor}`} size={32} />
      </div>

      {/* Pair 2 - Lower area right to left */}
      <div className={styles.pair2A}>
        <Satellite className={`${styles.satelliteIcon} ${styles.greenColor}`} size={28} />
      </div>
      <div className={styles.pair2B}>
        <Satellite className={`${styles.satelliteIcon} ${styles.emeraldColor}`} size={24} />
      </div>

      {/* Pair 3 - Bottom right area, right to left */}
      <div className={styles.pair3A}>
        <Satellite className={`${styles.satelliteIcon} ${styles.purpleColor}`} size={40} />
      </div>
      <div className={styles.pair3B}>
        <Satellite className={`${styles.satelliteIcon} ${styles.pinkColor}`} size={34} />
      </div>

      {/* Pair 4 - Random placement middle area, left to right */}
      <div className={styles.pair4A}>
        <Satellite className={`${styles.satelliteIcon} ${styles.orangeColor}`} size={22} />
      </div>
      <div className={styles.pair4B}>
        <Satellite className={`${styles.satelliteIcon} ${styles.yellowColor}`} size={20} />
      </div>

      {/* Pair 5 - Random placement upper middle, right to left */}
      <div className={styles.pair5A}>
        <Satellite className={`${styles.satelliteIcon} ${styles.indigoColor}`} size={26} />
      </div>
      <div className={styles.pair5B}>
        <Satellite className={`${styles.satelliteIcon} ${styles.tealColor}`} size={30} />
      </div>

      {/* Pair 6 - Random placement lower middle, left to right */}
      <div className={styles.pair6A}>
        <Satellite className={`${styles.satelliteIcon} ${styles.roseColor}`} size={18} />
      </div>
      <div className={styles.pair6B}>
        <Satellite className={`${styles.satelliteIcon} ${styles.amberColor}`} size={16} />
      </div>
    </div>
  )
}

export default SatelliteBackground
