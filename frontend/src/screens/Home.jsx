import React from 'react';
import styles from './Home.module.scss';

const OPTIONS = ['New Game', 'Continue', 'Options', 'How To Play', 'Credits'];

export default () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>Mosii</div>
      <div>
        {OPTIONS.map(option =>
          <div key={option} className={styles.option}>{option}</div>
        )}
      </div>
    </div>
  )
}
