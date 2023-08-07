
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage, { loader } from './pages/EventsPage';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import NewEventPageKanye from './pages/NewEventPageKanye';

const router = createBrowserRouter([
  {
    path: '/', element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventsRoot />,
        children: [
          {
            index: true, element: <EventsPage />, loader: loader
          },
          {
            path: ':id', 
            id:"event-detail",
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: 'edit', element: <EditEventPage /> },
              { path: 'new', element: <NewEventPage /> },
              {
                path: 'newKanye', element: <NewEventPageKanye />, loader: () => {
                  return fetch('https://api.kanye.rest/')
                    .then(res => res.json())
                    .then(result => result.quote)
                    .catch(console.error)
                }
              },
            ]
          },
          { path: 'new', element: <NewEventPage /> },
         

        ]
      },
    ]
  },
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
