import { useEffect, useState, useContext } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Filter from '../components/Filter';
import { FilterContext } from '../contexts/FilterContext'

import styles from '../styles/components/Charts.module.css';

export default function Charts() {

  const { dataCoins, dataMarkets } = useContext(FilterContext)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [chartWidth, setChartWidth] = useState(620);
  const [chartHeight, setChartHeight] = useState(380);

  window.addEventListener('resize', function(){
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    if (windowWidth < 640 && windowWidth > 480) {
      setChartWidth(429)
      setChartHeight(304)
    } else if ( windowWidth < 480 && windowWidth > 390){
      setChartWidth(386)
      setChartHeight(273)
    } else if ( windowWidth < 390 ){
      setChartWidth(350)
      setChartHeight(245)
    }
  }, [windowWidth])

  return (
    <div className={styles.chartContainer}>
        <div>
          <h1 className={styles.title}>Top 5 Criptomoedas <br/> (por ranking)</h1>
          <BarChart
            width={chartWidth}
            height={chartHeight}
            data={dataCoins}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar name="Preço (USD)" dataKey="price_usd" fill="#009dd9" />
          </BarChart>
        </div>
          
        <div>
          <h1 className={styles.title}>Mercados para Criptomoedas</h1>
          <Filter />
          <BarChart
            width={chartWidth}
            height={chartHeight}
            data={dataMarkets}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar name="Preço (USD)" dataKey="price_usd" fill="#009dd9" />
          </BarChart>
        </div>
      </div>
  )
}