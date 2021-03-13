import Header from './components/Header'

import { FilterProvider } from './contexts/FilterContext'

import '../src/styles/global.css'
import Charts from './components/Chats';

function App() {

  return (
    <div>
      <Header></Header>

      <FilterProvider>
        <Charts />
      </FilterProvider>
    </div>
  );
}

export default App;
