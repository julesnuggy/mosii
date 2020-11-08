import React from 'react';
import styles from './Config.module.scss';

const Config = () => (
  <div className={styles.gameConfigContainer}>
    <div className={styles.gameConfig}>
      <label htmlFor="session_name">Name this game session:</label>
      <input name="session_name" type="text" />
    </div>
    <div className={styles.gameConfig}>
      <label htmlFor="number_players">Number of players:</label>
      <input name="number_players" type="number" defaultValue={1} min={1} max={4} />
    </div>
    <div className={styles.gameConfig}>
      <label htmlFor="difficulty">Select difficulty:</label>
      <select name="difficulty" defaultValue="Normal">
        <option>Easy</option>
        <option>Normal</option>
        <option>Hard</option>
      </select>
    </div>
    <div className={styles.gameConfig}>
      <label htmlFor="mode">Select mode:</label>
      <select name="mode" defaultValue="Cooperative">
        <option>Cooperative</option>
        <option>Competitive</option>
      </select>
    </div>
  </div>
);

export default Config;