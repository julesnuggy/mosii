import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import styles from './MenuOption.module.scss'

export default ({ name, className, size = 'medium', linkTo }) => {
  const getSizeClass = () => {
    return {
      [styles.option__large]: size === 'large',
      [styles.option__medium]: size === 'medium',
      [styles.option__small]: size === 'small',
    }
  }

  return (
    <Link to={linkTo} className={styles.menuLink}>
        <div
        className={classNames(
          styles.option,
          `${styles[className]}`,
          getSizeClass()
        )}
      >
        <div className={styles.optionText}>
            {name}
        </div>
      </div>
    </Link>
  )
}
