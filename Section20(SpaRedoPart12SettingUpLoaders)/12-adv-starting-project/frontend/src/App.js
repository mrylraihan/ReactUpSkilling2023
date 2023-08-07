
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {path:'/' ,element:<Root/> ,children:[
    {index:true ,element:<HomePage/>},
    {path:'events' ,element:<EventsRoot/>,
  children:[
    { index: true ,element:<EventsPage/>, 
      loader: eventsLoader
},
    {path:':id' ,element:<EventDetailPage/>},
    {path:'new' ,element:<NewEventPage/>, loader:()=>{
      return fetch('https://api.kanye.rest/')
      .then(res=>res.json())
      .then(result=>result.quote)
      .catch(console.error)
    }},
    {path:':id/edit' ,element:<EditEventPage/>}
          ]},
  ]},
])
// const router = createBrowserRouter([
//   {path:'/' ,element:<Root/> ,children:[
//     {index:true ,element:<HomePage/>},
//     {path:'events' ,element:<EventsPage/>},
//     {path:'events/:id' ,element:<EventDetailPage/>},
//     {path:'events/new' ,element:<NewEventPage/>},
//     {path:'events/:id/edit' ,element:<EditEventPage/>}
//   ]},
// ])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
