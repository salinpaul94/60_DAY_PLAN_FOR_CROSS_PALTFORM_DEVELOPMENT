import './App.css';
import AppContextApiTask5 from './componentsDay5/AppContextApiTask5';
import AppContextApiTask5Example2 from './componentsDay5/AppContextApiTask5Example2';
import AppHooks from './componentsDay5/AppHooks';
import Counter from './componentsDay5/Counter'
import CounterUseEffectTask3 from './componentsDay5/CounterUseEffectTask3';
import DataFetcherUseEffect from './componentsDay5/DataFetcherUseEffect';
import MouseTrackerTask4 from './componentsDay5/MouseTrackerTask4';
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
    <MouseTrackerTask4/>
    <AppContextApiTask5/>
    <AppContextApiTask5Example2/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
