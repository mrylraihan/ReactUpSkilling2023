import {useNavigate}from 'react-router-dom'

function ProductsPage() {
  const nav = useNavigate()
  let productArray = [
    {id:'p1', title:'Product-1'},
    {id:'p2', title:'Product-2'},
    {id:'p3', title:'Product-3'},
  ]
  return (
      <div>
      <h1 onClick={nav.bind(this, -1)}>Products Page</h1>
      <ul>
        {/* <li onClick={nav.bind(this, '/products/1')}>Product 1</li>
        <li onClick={nav.bind(this, '/products/2')}>Product 2</li>
        <li onClick={nav.bind(this, '/products/3')}>Product 3</li> */}
        {productArray.map(ele => <li key={ele.id} onClick={nav.bind(this, '/products/'+ele.id)}>{ele.title}</li>)}
      </ul>
      </div>
  )
}

export default ProductsPage