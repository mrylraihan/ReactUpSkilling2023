import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  const arr = ['A Book', 'A Carpet', 'An Online Course']
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        {arr.map((ele, idx) => <li>
          <Link to={`p${idx + 1}`}>{ele}</Link>
        </li>)}
      </ul>
      <Outlet/>
      {/* <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul> */}
    </section>
  );
};

export default Products;
