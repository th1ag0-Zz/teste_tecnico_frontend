import { useEffect, useState, useContext } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DataContext } from '../contexts/DataContext'

import Filter from '../components/Filter';

import styles from '../styles/components/Charts.module.css';

export default function Charts() {

  const { dataBrazil, dataUserSelect } = useContext(DataContext)
  const arrayDataBrazil = [dataBrazil]
  const arrayDataUserSelect = [dataUserSelect]

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
          <h1 className={styles.title}>Estatísticas - Covid19 <br/> (Brasil)</h1>
          <BarChart
            width={chartWidth}
            height={chartHeight}
            data={arrayDataBrazil}
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
            <Bar name="Casos confirmados" dataKey="confirmed" fill="#ff5043" />
            <Bar name="Recuperados" dataKey="recovered" fill="#009dd9" />
            <Bar name="Mortos" dataKey="deaths" fill="#012130" />
          </BarChart>
        </div>
          
        <div>
          <h1 className={styles.title}>Pesquisar por País</h1>
          <Filter />
          <BarChart
            width={chartWidth}
            height={chartHeight}
            data={arrayDataUserSelect}
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
            <Bar name="Casos confirmados" dataKey="confirmed" fill="#ff5043" />
            <Bar name="Recuperados" dataKey="recovered" fill="#009dd9" />
            <Bar name="Mortos" dataKey="deaths" fill="#012130" />
          </BarChart>
          
        </div>
      </div>
  )
}