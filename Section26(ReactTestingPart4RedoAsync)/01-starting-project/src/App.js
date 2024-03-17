import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Async from './components/Async';

function App() {
  const [formData, setFormData] = useState({name:""})

  const formChangeHandler = e =>{
    setFormData(prev=>{
      return {...prev, [e.target.name] : e.target.value}
    })
  }
  console.log(formData)
  return (
		<>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'>
						Learn React
					</a>
				</header>
			</div>
			<form onChange={formChangeHandler}>
				<div>
					<label>
						Name:
						<input
							id='input'
							name={'name'}
							value={formData.name}
							onChange={formChangeHandler}
						/>
					</label>
					<button>submit</button>
				</div>
			</form>
			<Async/>
		</>
	)
}

export default App;
