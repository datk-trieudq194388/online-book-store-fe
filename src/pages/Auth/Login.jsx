import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

import './auth.css'
import { CheckValidate , SERVER_ADDR} from '../../configs/config'

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) navigate('/');
    
    // document.addEventListener('keydown', handleEnter);
    // return (() => document.removeEventListener('keydown', handleEnter));
  }, []);

  async function handleLogin (){
    let phoneNumber = document.getElementById('phone-number').value;
    let password = document.getElementById('password').value;
    CheckValidate(document, 'phone-number', 'password');
  
    if (phoneNumber && password) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          password: password
        }),
        credentials: 'include' // to get cookie but don't success yet
      }
      const response = await fetch(`${SERVER_ADDR}/user/login`, options);
      
      const data = await response.json();
      console.log(data)

      if (response.status == 401)
        alert('Sai số điện thoại hoặc mật khẩu!')
      else {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('firstname', data.user.firstname ? data.user.firstname : '');
        Cookies.set('refreshToken', data.refreshToken, { expires: 30}); 
        navigate('/'); // fix navigate
      }
    }
  }

  // const handleEnter = (e) => {
  //   if (e.keyCode === 13) {
  //     handleLogin();
  //   }
  // }

  return (
    <div className='background'>
      <div></div>
      <div className='login-box'>
        <p className='auth-title'>Đăng nhập</p>
        <input
          id='phone-number'
          className='input-form'
          placeholder='Nhập số điện thoại'
        />
        <p id='warning1' className='warning hidden'>Cần nhập số điện thoại</p>
        <input
          id='password'
          type='password'
          className='input-form'
          placeholder='Nhập mật khẩu'
        />
        <p id='warning2' className='warning hidden'>Cần nhập mật khẩu</p>
        <button className='button-form' onClick={handleLogin}>Đăng nhập</button>
        <a className='register-tag' href='' onClick={() => navigate('/register')}>Tạo tài khoản</a>
      </div>
      <div></div>
    </div>
  )
}

export default Login;