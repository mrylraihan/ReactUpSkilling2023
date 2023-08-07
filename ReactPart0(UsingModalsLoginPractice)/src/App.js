
import { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Main from './components/Main';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState('')
  const toggle = ()=>setIsOpen(!isOpen)
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
      <Modal isOpen={isOpen} onRequestClose={toggle}>
        <h1>Login</h1>
          <LoginForm toggle={toggle} user={user} setUser={setUser}/>
      </Modal>
      <button onClick={toggle}>Open Modal</button>
    </div>
    {user && <Home user={user} setUser={setUser}/>}
    {!user && <Main/>}
    </>
  );
}

export default App;
