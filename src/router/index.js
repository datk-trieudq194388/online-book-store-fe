import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Checkout from '../pages/Checkout/Checkout'
import TitleDetail from '../pages/Title/TitleDetail'
import CatalogSearch from '../pages/Searching/CatalogSearch'
import Overral from '../pages/Profile/Overral'
import ListOrder from '../pages/Profile/ListOrder'
import Address from '../pages/Profile/Address'
import AddressEdit from '../pages/Profile/AddressEdit'
import AccountInfo from '../pages/Profile/AccountInfo'

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
  {
    key: 'profile',
    path: '/profile/overral',
    element: <Overral/>,
    exact: true
  },
  {
    key: 'my-orders',
    path: '/profile/orders',
    element: <ListOrder/>,
    exact: true
  },
  {
    key: 'my-address',
    path: '/profile/address',
    element: <Address/>,
    exact: true
  },
  {
    key: 'address-edit',
    path: '/profile/address/edit',
    element: <AddressEdit/>,
    exact: true
  },
  {
    key: 'account-info',
    path: '/profile/account-info',
    element: <AccountInfo/>,
    exact: true
  },
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
    path: '/title/:slug',
    element: <TitleDetail />,
    exact: true
  },
  {
    key: 'Searching',
    path: '/catalog-search/result',
    element: <CatalogSearch />,
    exact: true
  }
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

