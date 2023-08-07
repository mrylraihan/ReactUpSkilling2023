
// import { useState } from 'react';
import './App.css';
import FormOne from './components/FormOne';
import FormThird from './components/FormThird';
import FormTwo from './components/FormTwo';

function App() {
  // const [inputValue, setInputValue] = useState('')
  console.log("App")
  return (
    <>
      <FormOne/>
      <FormTwo />
      {/* <FormTwo inputValue={inputValue} setInputValue={setInputValue}/> */}
      <FormThird/>
    </>
  );
}

export default App;
