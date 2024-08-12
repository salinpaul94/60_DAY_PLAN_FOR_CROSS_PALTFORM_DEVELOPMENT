import './App.css';
import ColorChangeUseState from './components/ColorChangeUseStage';
import NameFormUseState from './components/NameFormUseState';
import TaskListUseState from './components/TaskListUseState';
import TemperatureConverterUseState from './components/TemperatureConverterUseState';

const element = (
  <h1>
    <NameFormUseState/>
    <ColorChangeUseState/>
    <TemperatureConverterUseState/>
    <TaskListUseState/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
