import React from 'react'
import MenuOption from '../components/MenuOption'
import styles from './Home.module.scss'

export default () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.background}>
        <div className={styles.title}>Mosii</div>
        <MenuOption name="New Game" className="newGame" size="large" linkTo="/new-game" />
        <MenuOption name="Continue" className="continue" linkTo="/continue"/>
        <MenuOption name="Options" className="options" size="small" linkTo="/options" />
        <MenuOption name="How To Play" className="howToPlay" linkTo="/how-to-play" />
        <MenuOption name="Credits" className="credits" size="small" linkTo="/credits" />
      </div>
    </div>
  )
}
