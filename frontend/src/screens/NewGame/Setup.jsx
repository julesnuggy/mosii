import React from 'react';
import Config from './Config';
import RoleSelect from './RoleSelect';

export const Setup = () => {
  return (
    <>
      <h1>New Game - Setup</h1>
      <Config />
      <RoleSelect />
    </>
  );
}

export default Setup;