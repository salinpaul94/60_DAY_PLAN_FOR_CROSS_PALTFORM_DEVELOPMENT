import './App.css';
import AppHooks from './componentsDay5/AppHooks';
import Counter from './componentsDay5/Counter'
import CounterUseEffectTask3 from './componentsDay5/CounterUseEffectTask3';
import DataFetcherUseEffect from './componentsDay5/DataFetcherUseEffect';
import RandomJokeTask4 from './componentsDay5/RandomJokeTask4';
import AppUseEffect from './componentsDay5/TimerUseEffect';
import WindowWidthUseEffectTask3 from './componentsDay5/WindowWidthUseEffectTask3';

const element = (
  <h1>
    <Counter/>
    <AppHooks/>
    <AppUseEffect/>
    <DataFetcherUseEffect/>
    <CounterUseEffectTask3/>
    <WindowWidthUseEffectTask3/>
    <RandomJokeTask4/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
