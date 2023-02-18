import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './auth.css'
import { SERVER_ADDR } from '../../configs/serverAddr'

function Register() {
  const navigate = useNavigate();
  const [ response, setResponse ] = useState('');

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== null) {
      navigate('/');
    }
  })

  var username, password, passwordCheck, phone, fullname, email;
  const CheckValidate = () => {
    let flag = true;

    username = document.getElementById('username').value;
    let warning = document.getElementById('warning1');
    // Show warning if username is empty
    if (!username) {
      warning.classList.remove('hidden');
      flag = false;
    }
    else warning.classList.add('hidden');

    password = document.getElementById('password').value;
    warning = document.getElementById('warning2');
    // Show warning if password is empty
    if (!password) {
      warning.classList.remove('hidden');
      flag = false;
    }
    else warning.classList.add('hidden');

    passwordCheck = document.getElementById('password-check').value;
    warning = document.getElementById('warning3');
    // Show warning if password check is empty or wrong
    if (passwordCheck) {
      if (passwordCheck !== password) {
        warning.classList.remove('hidden');
        flag = false;
      }
      else warning.classList.add('hidden');
    }
    else {
      warning.classList.remove('hidden');
      flag = false;
    }

    return flag;
  }

  const handleSignUp = async () => {
    if (CheckValidate()) {
      const data = await fetch(`${SERVER_ADDR}/library_be/index.php?controller=auth&action=signUp`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
          email,
          fullname,
          phone
        })
      });

      setResponse(await data.json());
      document.getElementById('warning8').classList.remove('hidden');
    }
  }

  return (
    <div className='background'>
      <div></div>
      <div className='login-box register-box'>
      <p className='auth-title'><b>Đăng ký</b></p>
          <div className='authen-info'>
            <input
              id='username'
              className='input-form'
              placeholder='Nhập số điện thoại đăng ký'
            />
            <p id='warning1' className='warning hidden'>Cần nhập số điện thoại</p>
            <input
              id='password'
              type='password'
              className='input-form'
              placeholder='Nhập mật khẩu'
            />
            <p id='warning2' className='warning hidden'>Cần nhập mật khẩu</p>
            <input
              id='password-check'
              type='password'
              className='input-form'
              placeholder='Nhập lại mật khẩu'
            />
            <p id='warning3' className='warning hidden'>Cần nhập lại mật khẩu</p>
        </div>
        <button className='button-form' onClick={handleSignUp}>Đăng ký</button>
        <p id='warning8' className='warning hidden' style={{fontSize: '15pt'}}>{typeof response === 'string' ? response : ''}</p>
      </div>
      <div></div>
    </div>
  )
}

export default Register