import { useState } from 'react';

import styles from '../styles/components/Header.module.css';
import MenuItems from '../components/MenuItems'

import logoWhite from '../assets/imgs/logo-white.png'
import menuIcon from '../assets/icons/menu.svg'

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
      <button onClick={showMenu} className={styles.menuButton}> <img src={menuIcon} /> MENU</button>
      <div className={ isMenu ? styles.leftMenu : styles.leftMenuHidden}>
        <button onClick={hideMenu} className={styles.menuButtonClose}>x</button>

        <MenuItems />
        
      </div>
      <img className={styles.logo} src={logoWhite} alt=""/>
    </div>
  )
}