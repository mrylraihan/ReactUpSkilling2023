import { useState } from 'react'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')

  const onSubmit=()=>setInputValue('')
  return (
    <div>
      <h1>Test OnInput</h1>
      <p>{inputValue}</p>
      <div>
        <label>Test
          <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        </label>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
