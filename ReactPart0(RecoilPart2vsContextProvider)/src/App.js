import { NameProvider } from './store/name-context';
import './App.css';
import Level1 from './Components/Level1';
import Level2 from './Components/Level2';

function App() {

  return (
    <NameProvider>
      <Level1/>
      <Level2/>
    </NameProvider>
  );
}

export default App;
