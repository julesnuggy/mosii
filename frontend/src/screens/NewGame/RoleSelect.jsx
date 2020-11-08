import React from 'react';
import RoleOption from '../../components/RoleOption';
import styles from './RoleSelect.module.scss';

const RoleSelect = () => {
  return (
    <>
      <p>
        Select a role for your character. You can only have one of each type of role for a given game setup.
        Each role has a set of unique abilities and characteristics.
      </p>
      <div className={styles.optionsContainer}>
        <RoleOption role="Gudin" imgSrc="https://art.ngfiles.com/images/888000/888015_nathanandersonart_black-mage.jpg?f1556417557" />
        <RoleOption role="Gudin" imgSrc="https://art.ngfiles.com/images/888000/888015_nathanandersonart_black-mage.jpg?f1556417557" />
        <RoleOption role="Gudin" imgSrc="https://art.ngfiles.com/images/888000/888015_nathanandersonart_black-mage.jpg?f1556417557" />
        <RoleOption role="Gudin" imgSrc="https://art.ngfiles.com/images/888000/888015_nathanandersonart_black-mage.jpg?f1556417557" />
      </div>
    </>
  )
}

export default RoleSelect;