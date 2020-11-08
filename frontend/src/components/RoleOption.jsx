import React from 'react';
import styles from './RoleOption.module.scss';

const RoleOption = ({role, imgSrc}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.roleName}>{role}</h3>
      <div className={styles.roleControl}>
        <div>Left</div>
        <div className={styles.roleImageContainer}>
          <img src={imgSrc} className={styles.roleImage}/>
          <input placeholder="Player Name..."/>
        </div>
        <div>Right</div>
      </div>
    </div>
  )
}

export default RoleOption;