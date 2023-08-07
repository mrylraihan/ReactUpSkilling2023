import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Root from './components/Pages/Root';
import Home from './components/Pages/Home';
import All from './components/Pages/All';
import People from './components/Pages/People';
import More from './components/Pages/More';
import About from './components/Pages/About';

const router = createBrowserRouter([
  {path:'/', element:<Root/>,
  children:[
    {index:true, element:<Home/>},
    {path:'all', children:[
      { index: true, element: <All /> },
      { path: ':id', element: <People /> },
    ]},
    {path:'extra', children:[
      { index: true, element: <More /> },
      { path: 'about', element: <About /> },
    ]},
  ]
}
])
function App() {
  
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
