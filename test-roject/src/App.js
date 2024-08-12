import './App.css';
import Button from './components/ButtonEventHandling';
import ColorChangeUseState from './components/ColorChangeUseStage';
import Form from './components/FormEventHandling';
import Greeting from './components/GreetingDynamicRendering';
import HoverBox from './components/HoverBoxEventHandling';
import InputFieldEventHandling from './components/InputFieldEventHandling';
import Message from './components/MessageDynamicRendering';
import NameFormUseState from './components/NameFormUseState';
import TaskListUseState from './components/TaskListUseState';
import TemperatureConverterUseState from './components/TemperatureConverterUseState';
import Notification from './components/NotificationConditionalRendering';

const element = (
  <h1>
    <NameFormUseState/>
    <ColorChangeUseState/>
    <TemperatureConverterUseState/>
    <TaskListUseState/>
    <Button/>
    <InputFieldEventHandling/>
    <Form/>
    <HoverBox/>
    <Greeting/>
    <Message/>
    <Notification/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
