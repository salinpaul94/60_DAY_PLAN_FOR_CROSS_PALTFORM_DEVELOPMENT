import './App.css';
import Welcome  from './components/welcome';
import Product from './components/product';
import Counter from './components/counter';

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = (
  <h1>
    <Welcome name="salin"/> 
    Hello, {user.firstName} {user.lastName}
    <Product name="Gaming Chair" price={299}/>
    <Counter />
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
