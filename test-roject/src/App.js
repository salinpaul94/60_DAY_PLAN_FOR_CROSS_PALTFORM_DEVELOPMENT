import './App.css';


const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = (
  <h1>
    Hello, {user.firstName} {user.lastName}
  </h1>
)

function App() {
  return (
    element
  );
}

export default App;
