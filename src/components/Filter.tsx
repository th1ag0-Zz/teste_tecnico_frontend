import styles from '../styles/components/Filter.module.css';

export default function Filter() {
  return (
    <div className={styles.filterBox}>
      <p>Bitcoin</p>
      <div>
        <input type="text" placeholder="nome da criptomoeda"/>
        <button type="button">Buscar</button>
      </div>
    </div>
  )
}