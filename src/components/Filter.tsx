import { useState, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import styles from '../styles/components/Filter.module.css';

export default function Filter() {

  const { filter } = useContext(DataContext)

  const [countrySelected, setCountrySelected] = useState('Canada (default)')
  const [valueSearch, setValueSearch] = useState('')

  function submit() {
    setCountrySelected(valueSearch)
    filter(valueSearch)
  }

  return (
    <div className={styles.filterBox}>
      <p>{countrySelected}</p>
      <div>
        <input
          type="text"
          placeholder="nome do país (em ingles)"
          value={valueSearch} onChange={(e) => { setValueSearch(e.target.value) }}
        />
        <button onClick={submit} type="button">Buscar</button>
      </div>
    </div>
  )
}