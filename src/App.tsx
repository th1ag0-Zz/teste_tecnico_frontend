import Header from './components/Header'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Api from './services/api'

import '../src/styles/global.css'
import styles from './styles/components/App.module.css';
import { useEffect, useState } from 'react';

function App() {

  const dataFake = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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

  const [data, setData] = useState([])


  useEffect(() => {
    try {

      Api.get('/?start=0&limit=5').then(response => {
        setData(response.data.data)
      })
      
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div>
      <Header></Header>

      <div className={styles.chartContainer}>
          <BarChart
            width={chartWidth}
            height={chartHeight}
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price_usd" fill="#ff5043" />
          </BarChart>

          <BarChart
            width={chartWidth}
            height={chartHeight}
            data={dataFake}
            margin={{
              top: 5,
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
            <Bar dataKey="pv" fill="#00c9f6" />
            <Bar dataKey="uv" fill="#ff5043" />
          </BarChart>
      </div>
    </div>
  );
}

export default App;
