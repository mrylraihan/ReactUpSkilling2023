import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Result, { getQuote } from './components/Result';
import Root from './components/Root';

const router = createBrowserRouter([
  {path:'/', element:<Root/>, children:[
    {index:true, element:<Home/>},
    {path:'/quote', element:<Result/>, loader:getQuote},
  ]}
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
