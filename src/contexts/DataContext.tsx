import { createContext, useState, ReactNode, useEffect } from 'react';

import Api from '../services/api'

interface DataProviderProps {
  children: ReactNode;
}

interface DataContextData {
  dataBrazil: object,
  dataUserSelect: object[],
  filter: (country: string) => void
}

export const DataContext = createContext({} as DataContextData)

export function DataProvider({ children }: DataProviderProps) {

  const [dataBrazil, setDataBrazil] = useState([])
  const [dataUserSelect, setDataUserSelect] = useState([])
  const [country, setCountry] = useState('Canada')

  function filter(country: string) {
    setCountry(country)
  }

  useEffect(() => {
    try {
      Api.get(`total?country=Brazil`).then(response => {
        setDataBrazil(response.data.data)
      })
    } catch (error) {
      alert('problema na conexão')
      console.log(error)
    }
  },[])

  useEffect(() => {
    try {
      Api.get(`total?country=${country}`).then(response => {
        const location = response.data.data.location
        if (location === 'Global') {
          setDataUserSelect([])
        } else {
          setDataUserSelect(response.data.data)
        }
      })
    } catch (error) {
      alert('problema na conexão')
      console.log(error)
    }
  },[country])

  return (
    <DataContext.Provider value={{
      dataBrazil,
      dataUserSelect,
      filter
    }}>
      {children}
    </DataContext.Provider>
  )
}