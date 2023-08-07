import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import About from "./pages/About";
import Root from "./pages/Root";
import NumberTest from "./pages/NumberTest";

const router = createBrowserRouter([
  {path:'/', element:<Root/>, children:[
    { path: '/home', element: <HomePage /> },
    { path: '/products', element: <ProductsPage /> },
    { path: '/about', element: <About /> },
    { path: '/number/:num', element: <NumberTest /> },
  ]},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
