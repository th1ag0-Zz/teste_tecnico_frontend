import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../contexts/DataContext';
import styles from '../styles/components/Filter.module.css';

interface Props {
  active: boolean;
}

const Filter: React.FC<Props> = ({ active }) => {

  const { filter } = useContext(DataContext)

  const [countrySelected, setCountrySelected] = useState('Canada (default)')
  const [valueSearch, setValueSearch] = useState('')

  function submit() {
    setCountrySelected(valueSearch)
    filter(valueSearch)
  }

  const [isActive] = useState(active)

  return (
    <div className={ isActive ? `${styles.filterBox}` : `${styles.filterBoxNone}` }>
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

export default Filter;