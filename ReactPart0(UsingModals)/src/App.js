import { useState } from 'react';
import './App.css';
import Modal from 'react-modal'
import TestModal from './components/TestModal';
import TestModal2 from './components/TestModal2';
Modal.setAppElement('#root')

function App() {
  const [openModal , setOpenModal] = useState(false)

  const toggleModal = ()=> setOpenModal(!openModal)
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
      {/* isOpen take a boolean value to determine when to render the modal */}
      {/* the onRequestClose takes a function that allows us to click outside the modal or use the escape btn to close the modal */}
      <Modal isOpen={openModal} onRequestClose={toggleModal}>
        <h2>hey im a Modal</h2>
        <button onClick={toggleModal}>Get out</button>
      </Modal>
      <button onClick={toggleModal}>Show Modal</button>
    </div>
    <TestModal/>
    <TestModal2/>
    </>
  );
}

export default App;
