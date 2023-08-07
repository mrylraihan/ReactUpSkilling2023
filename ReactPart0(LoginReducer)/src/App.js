import React, { useReducer } from 'react';
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';

const initial = {
  user: { userName :'', password:''},
  login:false,
  error:'',
  loginData: { userName: 'Wallie', passWord: 'Gundam'}
}

const loginReducer = (state, action)=>{
  if(action.type == 'user'){
    return { ...state, user: action.user }
  }else if(action.type == 'login'){
    return { ...state, login: action.login }
  }else if(action.type == 'error'){
    return { ...state, error: action.error }
  }else{
    return initial 
  }
}

function App() {
  const [state, dispatch] = useReducer(loginReducer, initial)
  // const [user, setUser] = useState('')
  // const [loggedIn,setLogin] = useState(false)
  // const [error, setError] = useState('')
  // const loginData = {userName:'Wallie', passWord:'Gundam'}

  useEffect(()=>{
    if (state.user){
      if (state.user.userName === state.loginData.userName && state.user.passWord === state.loginData.passWord){
        dispatch({type:'login', login:true})
      }else{
        dispatch({ type: 'error', error: 'something went wrong!' })
      }
    }
  }, [state.user])

  return (
    <div className="app">
      {!state.login && <LoginPage dispatch={dispatch} state={state}/>}
      {state.login && <Home dispatch={dispatch} state={state}/>}
    </div>
  );
}

export default App;
