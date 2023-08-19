import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id:0,price :6, title:"My first book", description:"the first book i every wrote"},
  {id:1,price :7, title:"My Second book", description:"the first book i every wrote"},
  {id:2,price :5, title:"My Third book", description:"the first book i every wrote"},
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(ele=>{

          return <ProductItem
          key={ele.id}
          id={ele.id}
          title={ele.title}
          price={ele.price}
          description={ele.description}
          
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
