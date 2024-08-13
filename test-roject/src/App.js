import './App.css';
import AppHooks from './componentsDay5/AppHooks';
import Counter from './componentsDay5/Counter'

const element = (
  <h1>
    <Counter/>
    <AppHooks/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
