import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/pages/About';
import Home from './components/pages/Home';
import More from './components/pages/More';
import './App.css'
import RootLayout from './components/pages/Root';
// FirstWay
const router = createBrowserRouter([
  {path:'/', element:<RootLayout/>, children:[
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/more', element: <More /> },
  ]},
])

// secondWay
// const routeDefinitions = createRoutesFromElements(
// <Route>
//   <Route path='/' element={<Home/>}/>
//   <Route path='/about' element={<About/>}/>
//   <Route path='/more' element={<More/>}/>
// </Route>)

// const router = createBrowserRouter(routeDefinitions)
function App() {
  // FirstWay
  // return <RouterProvider router={router}/>;
  return <>
  <h1>Test</h1>
  <RouterProvider router={router}/>
  </>;
}

export default App;
