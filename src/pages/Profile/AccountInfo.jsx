import './accountInfo.css'
import './profile.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySide from '../../components/Profile/CategorySide';
import AccountInfoForm from '../../components/Form/AccountInfoForm';
import { CheckValidate, RefreshToken, SERVER_ADDR } from '../../configs/config';

function AccountInfo(){
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(()=>{
        async function fetchData() {
            const validRefToken = await RefreshToken();
            if(!validRefToken) navigate('/login');

            const token = localStorage.getItem('accessToken');
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await fetch(`${SERVER_ADDR}/user/profile`, options);
            
            const data = await response.json();
            console.log(data)
    
            if (!response.ok)
                alert('Gửi yêu cầu thất bại, hãy thử lại!')
            else setUser(data);
        }

        fetchData();
          
    }, []);

    async function handleUpdate (){
        const validated = CheckValidate(document, 'last-name', 'first-name'); // fix check email và phone
      
        if (validated) {
            const validRefToken = await RefreshToken();
            if(!validRefToken) navigate('/login');

            const lastname = document.getElementById('last-name').value;
            const firstname = document.getElementById('first-name').value;
            const email = document.getElementById('email').value;
            const phoneNumber = document.getElementById('phone-number').value;

            const M = document.getElementById('M').checked;
            const F = document.getElementById('F').checked;
            let gender = 'N'
            if(M) gender = 'M'
            else if(F) gender = 'F'

            const token = localStorage.getItem('accessToken');
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, 
                body: JSON.stringify({
                    lastname: lastname,
                    firstname: firstname,
                    email: email,
                    phoneNumber: phoneNumber,
                    gender: gender,
                })
            };
            const response = await fetch(`${SERVER_ADDR}/user/update-profile`, options);
            
            const data = await response.json();
            console.log(data)
    
            if (!response.ok)
                alert('Gửi yêu cầu thất bại, hãy thử lại!')
            else{
                alert('Cập nhật thông tin thành công!')
                localStorage.setItem('firstname', data.firstname ? data.firstname : '');
                setUser(data);
            }
        }
      }


    return(
        <div className='profile-page'>
            <div className='profile-left-side'>
                <CategorySide index='2'/>
            </div>

            <div className='profile-right-side'>
                <div className='profile-right-side-label'>
                    <span>THÔNG TIN TÀI KHOẢN</span>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='address-edit-content'>
                    <AccountInfoForm user={user}/>
                    <div className='address-edit-handle'>
                        <button className='profile-update-button' onClick={handleUpdate}>Cập nhật tài khoản</button>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
}

export default AccountInfo;