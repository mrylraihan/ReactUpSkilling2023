import { Routes, Route, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

// https://www.youtube.com/watch?v=zEQiNFAwDGo
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' replace={true} />}/>
          <Route path='/welcome' element={<Welcome />}>
            <Route path='new-user' element={<p>Welcome, new user!</p>} />
          </Route>

          <Route path='/products' element={<Products />}>
            <Route path=':productId' element={<ProductDetail />} />
          </Route>
>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
