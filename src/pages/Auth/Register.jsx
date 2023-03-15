import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import './auth.css'
import { CheckValidate, SERVER_ADDR } from '../../configs/config'

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) navigate('/');
  }, []);

  const checkValidate = () => {
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('password-check').value;
    
    let flag = true;
    flag = CheckValidate(document, 'phone-number', 'password');

    const warning = document.getElementById('warning3');
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
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
    if (checkValidate()) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          password: password
        })
      }
      const response = await fetch(`${SERVER_ADDR}/user/create`, options);
      
      const data = await response.json();
      console.log(data)

      if (response.status == 409)
        alert('Số điện thoại đã tồn tại!')
      else if(response.status == 500)
        alert('Không thể tạo tài khoản, hãy thử lại!')
      else {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('firstname', data.user.firstname ? data.user.firstname : '');
        Cookies.set('refreshToken', data.refreshToken, { expires: 30}); 
        navigate('/profile/account-info');
      }
    }
  }

  return (
    <div className='background'>
      <div></div>
      <div className='login-box register-box'>
      <p className='auth-title'><b>Đăng ký</b></p>
          <div className='authen-info'>
            <input
              id='phone-number'
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
      </div>
      <div></div>
    </div>
  )
}

export default Register