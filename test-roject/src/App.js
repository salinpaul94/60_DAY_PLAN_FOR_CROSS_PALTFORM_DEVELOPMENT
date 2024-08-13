import './App.css';
import AppHooks from './componentsDay5/AppHooks';
import Counter from './componentsDay5/Counter'
import CounterUseEffectTask3 from './componentsDay5/CounterUseEffectTask3';
import DataFetcherUseEffect from './componentsDay5/DataFetcherUseEffect';
import AppUseEffect from './componentsDay5/TimerUseEffect';

const element = (
  <h1>
    <Counter/>
    <AppHooks/>
    <AppUseEffect/>
    <DataFetcherUseEffect/>
    <CounterUseEffectTask3/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
