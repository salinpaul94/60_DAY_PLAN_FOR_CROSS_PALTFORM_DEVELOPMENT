import './App.css';
import Welcome  from './components/welcome';


const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = (
  <h1>
    <Welcome name="salin"/> 
    Hello, {user.firstName} {user.lastName}
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
