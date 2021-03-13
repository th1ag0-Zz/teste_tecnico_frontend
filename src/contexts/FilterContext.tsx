import { createContext, useState, ReactNode, useEffect } from 'react';

import Api from '../services/api'

interface FilterProviderProps {
  children: ReactNode;
}

interface FilterContextData {
  idCoin: number;
  valueStringCoin: string;
  convertIdToString: () => void;
  dataCoins: object[],
  dataMarkets: object[]
}

export const FilterContext = createContext({} as FilterContextData)

export function FilterProvider({ children }: FilterProviderProps) {
  const [idCoin] = useState(90)
  const [valueStringCoin] = useState('')

  function convertIdToString() {

  }

  const [dataCoins, setDataCoins] = useState([])
  const [dataMarkets, setDataMarkets] = useState([])

  useEffect(() => {
    try {

      Api.get('tickers/?start=0&limit=5').then(response => {
        setDataCoins(response.data.data)
      })
      
    } catch (error) {
      alert('problema na conexão')
      console.log(error)
    }
  },[])

  useEffect(() => {
    try {

      Api.get(`coin/markets/?id=${90}`).then(response => {
        setDataMarkets(response.data)
      })
      
    } catch (error) {
      alert('problema na conexão')
      console.log(error)
    }
  },[])

  return (
    <FilterContext.Provider value={{
      idCoin,
      valueStringCoin,
      convertIdToString,
      dataCoins,
      dataMarkets
    }}>
      {children}
    </FilterContext.Provider>
  )
}