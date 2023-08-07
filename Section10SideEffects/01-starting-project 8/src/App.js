import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    // pull a key from the localStorage 
    const storedUserLoginInfo = localStorage.getItem('isLoggedIn')
    if(storedUserLoginInfo === '1'){
      setIsLoggedIn(true)
    }
  },[])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // when you using setItem you creating a object/ key value pair
    // the first parameter will be the key and the second will be the value
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {

    // clear method will clear all store objects in localStorage
    localStorage.clear()
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
