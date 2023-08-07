import {useNavigate}from 'react-router-dom'

function ProductsPage() {
  const nav = useNavigate()
  return (
      <div><h1 onClick={nav.bind(this,-1)}>Products Page</h1></div>
  )
}

export default ProductsPage