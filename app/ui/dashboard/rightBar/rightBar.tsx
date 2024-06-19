import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled } from 'react-icons/md'
import styles from './rightBar.module.css'
const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/rocket.jpg" className={styles.bg} alt="user" fill/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Ready to Launch Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subtitle}>
            Takes 4 minutes to learn
          </span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <button type='button' className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🌟 Avaible Now</span>
          <h3 className={styles.title}>How to use the new version of the admin panel</h3>
          <span className={styles.subtitle}>
            Takes 2 minutes to learn
          </span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          </p>
          <button type='button' className={styles.button}>
            <MdPlayCircleFilled/>
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightBar