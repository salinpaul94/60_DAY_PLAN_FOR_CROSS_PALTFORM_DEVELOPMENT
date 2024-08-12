import './App.css';
import ColorChangeUseState from './components/ColorChangeUseStage';
import NameFormUseState from './components/NameFormUseState';

const element = (
  <h1>
    <NameFormUseState/>
    <ColorChangeUseState/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
