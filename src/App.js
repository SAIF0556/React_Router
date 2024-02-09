import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import Product from './pages/Products'
import RootLayout from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import ProductDetails from './pages/ProductDetails'
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Product />} />
//   </Route>,
// )
const BrowserRouters = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products',
        element: <Product />,
      },
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'products/:productId',
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '/products',
    element: <Product />,
  },
])
// const routers = createBrowserRouter(routeDefinitions)
function App() {
  return <RouterProvider router={BrowserRouters} />
}

export default App
