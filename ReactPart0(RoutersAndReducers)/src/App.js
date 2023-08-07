
import { useEffect, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import ShowAll from './components/Pages/ShowAll';
import EditPost from './components/Pages/EditPost';
import About from './components/Pages/About';
import ShowOne from './components/Pages/ShowOne';
import AddOne from './components/Pages/AddOne';

const initial = []
const postReducer = (state, action)=>{
  if(action.type === 'All'){
    return [...action.data]
  }else if(action.type === 'Add'){
    action.data.id = state.length + 1
    return state.concat(action.data)
  }else if (action.type === 'Edit') {
  let id = +action.data.id
  return state.map(ele=>{
    if(ele.id === +id){
      return { ...ele, title: action.data.title ? action.data.title : ele.title, body:action.data.body?action.data.body:ele.body}
    }
      return ele;
   
  })
  } else if (action.type === 'Delete'){
    return state.filter(ele => ele.id !== +action.id)
  }else {
    return state
  }
}

function App() {
  const [post , dispatch] = useReducer(postReducer,initial)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(result=>dispatch({type:"All",data:result}))
    .catch(console.error)

  },[])
  console.log(post)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/show' element={<ShowAll post={post}/>}/>
        <Route path='/show/:id' element={<ShowOne post={post} dispatch={dispatch} />}/>
        <Route path='/add' element={<AddOne dispatch={dispatch}/>}/>
        <Route path='/show/:id/edit' element={<EditPost dispatch={dispatch} />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
