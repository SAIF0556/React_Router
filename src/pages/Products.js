import { Link } from 'react-router-dom'
import { PRODUCTS } from '../ProductsData.jsx'
function Product() {
  return (
    <>
      <h1>My Product page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={prod.productId}> {prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Product
