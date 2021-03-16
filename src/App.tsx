import Header from './components/Header'

import { DataProvider } from './contexts/DataContext';

import '../src/styles/global.css'
import Charts from './components/Chats';

function App() {

  return (
    <div>
      <Header></Header>

      <DataProvider>
        <Charts />
      </DataProvider>
    </div>
  );
}

export default App;
