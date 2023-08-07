import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import About from "./pages/About";
import Root from "./pages/Root";
import NumberTest from "./pages/NumberTest";
import Error from "./pages/Error";
import ProductsDetail from "./pages/ProductsDetail";
// any route that starts with a / means its an absolute route, if it doesnt that means its appending 
const router = createBrowserRouter([
  {path:'/', element:<Root/>, children:[
    { path: 'home', element: <HomePage /> },
    { path: 'products', element: <ProductsPage /> },
    { path: 'products/:num', element: <ProductsDetail /> },
    { path: 'about', element: <About /> },
    { path: 'number/:num', element: <NumberTest /> },
  ], errorElement:<Error/>},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
