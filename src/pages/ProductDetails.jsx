import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../ProductsData.jsx'

export default function ProductDetails() {
  const params = useParams()
  function findTitle(id) {
    const product = PRODUCTS.find((prod) => prod.productId === id)
    return <p>{product.title}</p>
  }
  return (
    <>
      <h1>Products Details!</h1>
      <p>{params.productId}</p>
      {findTitle(params.productId)}
      <Link to=".." relative="path">
        {' '}
        Back
      </Link>
    </>
  )
}
