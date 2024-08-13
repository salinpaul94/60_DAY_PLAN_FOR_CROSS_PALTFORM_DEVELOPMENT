import './App.css';
import AppHooks from './componentsDay5/AppHooks';
import Counter from './componentsDay5/Counter'
import TimerUseEffect from './componentsDay5/TimerUseEffect';

const element = (
  <h1>
    <Counter/>
    <AppHooks/>
    <TimerUseEffect/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
