import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  const nav = useNavigate()
  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <button onClick={nav.bind(this, '/products')}>go back</button>
    </section>
  );
};

export default ProductDetail;
