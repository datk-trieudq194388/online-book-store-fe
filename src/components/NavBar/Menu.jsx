import './navBar.css'
import { SERVER_ADDR } from '../../configs/config';
import { useNavigate } from 'react-router-dom';
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
      link: '/',
      className: 'menu-item'
    },
    {
      icon: <ShoppingOutlined />,
      text: 'Giỏ hàng',
      link: '/login',
      className: 'menu-item'
    },
    {
      icon: <UserOutlined />,
      text: 'Tài khoản',
      link: '/login',
      className: 'menu-item'
    },
    {
      icon: <LoginOutlined />,
      text: 'Đăng nhập',
      link: '/login',
      className: 'menu-item'
    }
  ]

function Menu() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  let firstname = localStorage.getItem('firstname');

  if(firstname)
    firstname = firstname.length > 9 ? firstname.split(0, 7)+'...' : firstname;
  else firstname = 'Tài khoản'

  if(accessToken) menu = [
    {
      icon: <BellOutlined />,
      text: 'Thông báo',
      link: '/',
      className: 'menu-item'
    },
    {
      icon: <ShoppingOutlined />,
      text: 'Giỏ hàng',
      link: '/cart',
      className: 'menu-item'
    },
    {
      icon: <UserOutlined />,
      text: firstname,
      link: '/profile/overral',
      className: 'menu-item'
    },
    {
      icon: <LogoutOutlined />,
      text: 'Đăng xuất',
      link: '/',
      className: 'menu-item',
      logout: true
    }
  ]

  async function handleLogOut() {
    const token = localStorage.getItem('accessToken');
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
  
    const response = await fetch(`${SERVER_ADDR}/user/logout`, options);
    const data = await response.json();
    console.log(data);
    
    // fix refresh token
    localStorage.removeItem('accessToken');
    localStorage.removeItem('firstname');

    if(response.status == 403){
      navigate('/login')
    }
    if(response.ok) {
      navigate('/');
      window.location.reload();
    }
  }

  return (
    <>
      {menu.map( (e, i) => {
        if(e.logout) 
          return (
            <div key={i} id={i} >
              <div className={e.className} onClick={handleLogOut}>
                <span className='icon'>{e.icon}</span>
                <span className='text'>{e.text}</span>
              </div>
            </div>
          )
        else 
          return (
            <div key={i} id={i} >
              <div className={e.className} onClick={()=>navigate(e.link)}>
                <span className='icon'>{e.icon}</span>
                <span className='text'>{e.text}</span>
              </div>
            </div>
          )
      })}
    </>

  )
}

export default Menu;