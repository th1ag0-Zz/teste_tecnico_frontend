import { useState } from 'react';

import styles from '../styles/components/Header.module.css';

import logoWhite from '../assets/imgs/logo-white.png'

export default function Header() {

  const [isMenu, setIsMenu] = useState(false)

  function showMenu() {
    setIsMenu(true)
  }

  function hideMenu() {
    setIsMenu(false)
  }

  return (
    <div className={styles.header}>
      <button onClick={showMenu} className={styles.menuButton}>+</button>
      <div className={ isMenu ? styles.leftMenu : styles.leftMenuHidden}>
        <button onClick={hideMenu} className={styles.menuButtonClose}>x</button>
      </div>
      <img className={styles.logo} src={logoWhite} alt=""/>
    </div>
  )
}