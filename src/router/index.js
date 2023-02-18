import Home from '../pages/Common/Home'
import AccountInfo from '../pages/Common/AccountInfo'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'

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
    key: 'AccountInfo',
    path: '/AccountInfo',
    element: <AccountInfo />,
    exact: true
  }
]