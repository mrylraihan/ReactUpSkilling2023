import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Root from './roots/Root';
import More from './pages/More';
import Root2 from './roots/Root2';
const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/more', element: <More /> },
    ]
  },
  {
    path: '/2', element: <Root2 />, children: [
      { path: '/2/', element: <Home /> },
      { path: '/2/about', element: <About /> },
      { path: '/2/more', element: <More /> },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
