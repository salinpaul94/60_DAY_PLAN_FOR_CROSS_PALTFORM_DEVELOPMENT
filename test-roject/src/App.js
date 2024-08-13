import './App.css';
import AppHooks from './componentsDay5/AppHooks';
import Counter from './componentsDay5/Counter'
import DataFetcherUseEffect from './componentsDay5/DataFetcherUseEffect';
import AppUseEffect from './componentsDay5/TimerUseEffect';

const element = (
  <h1>
    <Counter/>
    <AppHooks/>
    <AppUseEffect/>
    <DataFetcherUseEffect/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
