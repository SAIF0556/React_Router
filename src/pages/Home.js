import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function handleNavigate() {
    return navigate('/products')
  }
  return (
    <>
      <h1>My home page</h1>
      <p>
        The list of products is{' '}
        <Link to="/products" style={{ color: 'white' }}>
          here
        </Link>
        .
      </p>
      <p>
        <button onClick={handleNavigate}>Products</button>
      </p>
    </>
  )
}
export default Home
