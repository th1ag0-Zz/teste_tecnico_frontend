import logoWhite from '../assets/imgs/logo-white.png';

import styles from '../styles/components/MenuItems.module.css';

export default function MenuItems() {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.logo}><a target="_blank" href="https://www.mediarsolutions.com/"> <img src={logoWhite} alt=""/> </a></li>
        <li> <a target="_blank" href="mediarsolutions.com/sobre/"> Sobre </a> </li>
        <li> <a target="_blank" href="mediarsolutions.com/solucoes/"> Soluções </a> </li>
        <li> <a target="_blank" href="mediarsolutions.com/contato/"> Contato </a> </li>
      </ul>

      <ul className={styles.autor}>
        <li className={styles.titleAutor}>th1ag0-Zz <span> - autor</span></li>
        <li><a href=""> LinkedIn </a></li>
        <li><a href=""> GitHub </a></li>
        <li><a href=""> Instagram </a></li>
      </ul>
    </div>
  )
}