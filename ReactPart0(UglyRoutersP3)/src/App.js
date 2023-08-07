import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import Root from './components/pages/Root';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Root/>, children:[
      {path:'/', element:<Home/>},
      {path:'/about', element:<About/>},
    ]}
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
