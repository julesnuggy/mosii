import React from 'react'
import MenuOption from '../components/MenuOption'
import styles from './Home.module.scss'

export default () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.background}>
        <div className={styles.title}>Mosii</div>
        <MenuOption name="New Game" className="newGame" size="large" />
        <MenuOption name="Continue" className="continue" />
        <MenuOption name="Options" className="options" size="small" />
        <MenuOption name="How To Play" className="howToPlay" />
        <MenuOption name="Credits" className="credits" size="small" />
      </div>
    </div>
  )
}
