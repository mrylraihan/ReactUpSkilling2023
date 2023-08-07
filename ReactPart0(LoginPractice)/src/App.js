import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';


function App() {
  const [user, setUser] = useState('')
  const [loggedIn,setLogin] = useState(false)
  const [error, setError] = useState('')
  const loginData = {userName:'Wallie', passWord:'Gundam'}

  useEffect(()=>{
    if(user){
      if(user.userName === loginData.userName && user.passWord === loginData.passWord){
        setLogin(true)
      }else{
        setError('something went wrong!')
      }
    }
  }, [user])

  return (
    <div className="app">
      {!loggedIn && <LoginPage setUser={setUser} error={error} setError={setError}/>}
      {loggedIn && <Home user={user} setLogin={setLogin}/>}
    </div>
  );
}

export default App;
