import { useState } from 'react';
// import { DataContext } from '../contexts/DataContext';
import styles from '../styles/components/Filter.module.css';

export default function Filter() {

  // const { country, filter } = useContext(DataContext)

  const [countrySelected] = useState('Canadá (default)')
  // const [valueSearch, setValueSearch] = useState('')

  return (
    <div className={styles.filterBox}>
      <p>{countrySelected}</p>
      <div>
        <input type="text" placeholder="nome do país (em ingles)"/>
        <button type="button">Buscar</button>
      </div>
    </div>
  )
}