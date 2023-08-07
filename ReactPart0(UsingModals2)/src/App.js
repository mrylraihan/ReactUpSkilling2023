
import { useState } from 'react';
import './App.css';
import Modal from 'react-modal'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  // onRequestClose allows you to click outside the modal to close the modal, invoking the toggle function 

  return (
    <div className="app">
      <h1>Hello</h1>
      <Modal isOpen={isOpen} onRequestClose={toggle}>
        <h1>Im a modal</h1>
        <button onClick={toggle}>Close me</button>
      </Modal>
      <button onClick={toggle}>open modal</button>
    </div>
  );
}

export default App;
