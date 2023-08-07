
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState('')
  console.log(user)

  return (
    <div className="app">
      {!user.userName && <Login setUser={setUser}/>}
      {user.userName && <Home user={user} setUser={setUser}/>}
    </div>
  );
}

export default App;
