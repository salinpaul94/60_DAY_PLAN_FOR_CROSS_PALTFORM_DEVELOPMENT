import './App.css';
import ColorChangeUseState from './components/ColorChangeUseStage';
import NameFormUseState from './components/NameFormUseState';
import TemperatureConverterUseState from './components/TemperatureConverterUseState';

const element = (
  <h1>
    <NameFormUseState/>
    <ColorChangeUseState/>
    <TemperatureConverterUseState/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
