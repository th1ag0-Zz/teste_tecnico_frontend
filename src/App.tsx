import Header from './components/Header'
import { useContext } from 'react';
import { DataContext } from './contexts/DataContext'

import Chart from './components/Chart';

import '../src/styles/global.css'

import styles from './styles/home.module.css';

function App() {

  const { dataBrazil, dataUserSelect } = useContext(DataContext)
  const arrayDataBrazil = [dataBrazil]
  const arrayDataUserSelect = [dataUserSelect]

  return (
    <div>
      <Header />

      <div className={styles.chartContainer}>
        <Chart
          title="Estatísticas - Covid19 (Brasil)"
          data={arrayDataBrazil}
          filterActive={false}
        />

        <Chart
          title="Pesquisar por País"
          data={arrayDataUserSelect}
          filterActive={true}
        />
      </div>
    </div>
  );
}

export default App;
