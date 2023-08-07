
import './App.css';
import Level1 from './components/MultiProps/Level1';
import TestChildren from './components/PropsChildren/TestChildren';

function App() {
  const name = 'Wallie'
  const age = '31'
  const address = '123 Fire Street'
  const contact = '9172222222'
  return (
<>
    <div className="app">
      <h1>Hello</h1>
      <TestChildren>{name}</TestChildren>
    </div>
    <div className="app">
      <h1>Hello</h1>
      <Level1 name={name} age={age} address={address} contact={contact}/>
    </div>

</>
  );
}

export default App;
