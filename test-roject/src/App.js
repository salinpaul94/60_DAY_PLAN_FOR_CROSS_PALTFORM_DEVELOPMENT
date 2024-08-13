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
import UserProfile from './components/UserProfileConditionalRendering';
import NumberList from './components/NumberList';
import TodoList from './components/TodoList';
import FruitList from './components/FruitList';
import ContactList from './components/ConactList';
import Timer from './components/TimerComponent';
import Timer2 from './components/Timer2Component';
import CounterHooks from './components/CounterHooks';

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
    <UserProfile/>
    <NumberList numbers={[1, 2]}/>
    <TodoList todos={[{id: 1, text: "buy mango"}, {id: 2, text: "go to sylicon"}]}/>
    <FruitList/>
    <ContactList/>
    <Timer initialSeconds={11}/>
    <Timer2/>
    <CounterHooks/>
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
