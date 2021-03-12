import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Header from './components/Header'
import Filter from './components/Filter';

import Api from './services/api'

import '../src/styles/global.css'
import styles from './styles/components/App.module.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [chartWidth, setChartWidth] = useState(620);
  const [chartHeight, setChartHeight] = useState(380);

  window.addEventListener('resize', function(){
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    if (windowWidth < 640) {
      setChartWidth(320)
      setChartHeight(250)
    } else {
      setChartWidth(620)
      setChartHeight(380)
    }
  }, [windowWidth])

  const [dataCoins, setDataCoins] = useState([])
  const [dataMarkets, setDataMarkets] = useState([])

  // const [idCoin, setIdCoin] = useState(90)

  useEffect(() => {
    try {

      Api.get('tickers/?start=0&limit=5').then(response => {
        setDataCoins(response.data.data)
      })
      
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(() => {
    try {

      Api.get(`coin/markets/?id=${90}`).then(response => {
        setDataMarkets(response.data)
      })
      
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div>
      <Header></Header>

      <div className={styles.chartContainer}>

          <div>
            <h1 className={styles.title}>Top 5 Criptomoedas <br/> (por valor)</h1>
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
                right: 25,
                left: 25,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar name="Preço (USD)" dataKey="price_usd" fill="#009dd9" />
            </BarChart>
          </div>
      </div>
    </div>
  );
}

export default App;
