import React from 'react'
import classNames from 'classnames'
import styles from './MenuOption.module.scss'

export default ({ name, className, size = 'medium' }) => {
  const getSizeClass = () => {
    return {
      [styles.option__large]: size === 'large',
      [styles.option__medium]: size === 'medium',
      [styles.option__small]: size === 'small',
    }
  }

  return (
    <div
      className={classNames(
        styles.option,
        `${styles[className]}`,
        getSizeClass()
      )}
    >
      <p>{name}</p>
    </div>
  )
}
