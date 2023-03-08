import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Checkout from '../pages/Checkout/Checkout'
import TitleDetail from '../pages/Title/TitleDetail'

export const publicRoutes = [
  {
    key: "login",
    path: '/login',
    element: <Login />,
    exact: false
  },
  {
    key: "register",
    path: '/register',
    element: <Register />,
    exact: true
  },
  {
    key: "home",
    path: '/',
    element: <Home />,
    exact: true
  },
  {
    key: "homeChildren",
    path: '/:type',
    element: <Home />,
    exact: true
  },
  {
    key: "homeChildren2",
    path: '/:type=:param',
    element: <Home />,
    exact: true
  },
  // {
  //   key: 'AccountInfo',
  //   path: '/AccountInfo',
  //   element: <AccountInfo />,
  //   exact: true
  // },
  // {
  //   key: 'Cart',
  //   path: '/cart',
  //   element: <Cart />,
  //   exact: true
  // },
  // {
  //   key: 'History',
  //   path: '/History',
  //   element: <History />,
  //   exact: true
  // },
  // {
  //   key: 'BookTitle',
  //   path: '/BookTitle',
  //   element: <BookTitle />,
  //   exact: true
  // },
  {
    key: 'Title',
    path: '/title/:id',
    element: <TitleDetail />,
    exact: true
  },
  // {
  //   key: 'ReaderAccount',
  //   path: '/ReaderAccount',
  //   element: <ReaderAccount />,
  //   exact: true
  // }
]

export const onlyHeaderRoutes = [
  {
    key: 'Cart',
    path: '/cart',
    element: <Cart />,
    exact: true
  },
  {
    key: 'Checkout',
    path: '/checkout',
    element: <Checkout />,
    exact: true
  },
]

