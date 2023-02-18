import { useEffect } from 'react';

import './navBar.css'
import { 
    LoginOutlined, 
    BellOutlined,
    ShoppingOutlined,
    UserOutlined,
    LogoutOutlined,
  } from '@ant-design/icons'

let menu = [
    {
      icon: <BellOutlined />,
      text: 'Thông báo',
      link: '/'
    },
    {
      icon: <ShoppingOutlined />,
      text: 'Giỏ hàng',
      link: '/login'
    },
    {
      icon: <UserOutlined />,
      text: 'Tài khoản',
      link: '/login'
    },
    {
      icon: <LoginOutlined />,
      text: 'Đăng nhập',
      link: '/login'
    }
  ]

function Menu(props) {
    const role = localStorage.getItem('role');

    if(role === 'U') menu[3] = {
        icon: <LogoutOutlined />,
        text: 'Đăng xuất',
        link: '/',
        classname: 'logout', 
      }
    else if(role === 'A') {
        // do something
    }


    useEffect(() => {

        const handleLogOut = () => {
        localStorage.removeItem('role');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        }

        const logoutMenu = document.querySelector('.logout');
        if (logoutMenu !== null) {
        logoutMenu.addEventListener("click", handleLogOut);
        }

        return () => {
        if (logoutMenu !== null) logoutMenu.removeEventListener("click", handleLogOut);
        }
    })

  return (
    <>
        {menu.map( (e, index) => 
        <div key={index} id={index} className={e.classname}>
          <a href={e.link}>
            <span className='icon'>{e.icon}</span>
            <span className='text'>{e.text}</span>
          </a>
        </div>
      )}
    </>

  )
}

export default Menu;