import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './auth.css'
import { SERVER_ADDR } from '../../configs/serverAddr'
import { CheckValidate } from '../../configs/config'

function Login() {
  const [ response, setResponse ] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== null) {
      navigate('/');
    }

    // document.addEventListener('keydown', handleEnter);
    // return (() => document.removeEventListener('keydown', handleEnter));
  });

  const handleLogin = async () => {
    document.querySelector('#warning3').classList.add('hidden');
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    CheckValidate(document, 'username', 'password');
    
    // localStorage.setItem('role', 1);
    
    if (username && password) {
      const data = await fetch(`${SERVER_ADDR}/library_be/index.php?controller=auth&action=signIn`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        })
      });
      const res = await data.json();
      setResponse(await res);

      if (typeof res === 'string') {
        document.querySelector('#warning3').classList.remove('hidden');
      }
      else {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('role', res.user.role);
        localStorage.setItem('username', res.user.username);
        navigate('/');
      }
    }
  }

  const handleSignup = () => {
    navigate('/register');
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
          id='username'
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
        <p id='warning3' className='warning hidden'>{typeof response === 'string' ? response : ''}</p>
        <button className='button-form' onClick={handleLogin}>Đăng nhập</button>
        <a className='register-tag' href='' onClick={handleSignup}>Tạo tài khoản</a>
      </div>
      <div></div>
    </div>
  )
}

export default Login;