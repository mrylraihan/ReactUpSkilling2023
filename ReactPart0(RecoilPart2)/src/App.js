import { RecoilRoot } from 'recoil'
import './App.css';
import Level1 from './Components/Level1';
import Level2 from './Components/Level2';

function App() {
  return (
    <RecoilRoot>
      <Level1/>
      <Level2/>
    </RecoilRoot>
  );
}

export default App;
