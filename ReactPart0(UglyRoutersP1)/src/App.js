import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
const router = createBrowserRouter([
  {path:'/', element:<Home/>},
  {path:'/about', element:<About/>},
])
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
