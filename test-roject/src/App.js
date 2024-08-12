import './App.css';
import Button from './components/ButtonEventHandling';
import ColorChangeUseState from './components/ColorChangeUseStage';
import InputFieldEventHandling from './components/InputFieldEventHandling';
import NameFormUseState from './components/NameFormUseState';
import TaskListUseState from './components/TaskListUseState';
import TemperatureConverterUseState from './components/TemperatureConverterUseState';

const element = (
  <h1>
    <NameFormUseState/>
    <ColorChangeUseState/>
    <TemperatureConverterUseState/>
    <TaskListUseState/>
    <Button/>
    <InputFieldEventHandling/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
