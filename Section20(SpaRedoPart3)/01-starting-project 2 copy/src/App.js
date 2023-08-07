import {createBrowserRouter, RouterProvider} from "react-router-dom/dist"
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/product', element:<ProductsPage/>},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
