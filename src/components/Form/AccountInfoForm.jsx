import './form.css'
import { useEffect } from 'react';

function AccountInfoForm(props){

    useEffect(()=>{
        document.getElementById('last-name').value = props.user.lastname??'';
        document.getElementById('first-name').value = props.user.firstname??'';
        document.getElementById('email').value = props.user.email??'';
        document.getElementById('phone-number').value = props.user.phoneNumber??'';
        document.getElementById(props.user.gender??'N').checked = true;
    })
    

    return(
        <div className='account-info-form'>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='recipient-name'>Họ*</label>
                <input
                    id='last-name'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập họ'
                />
            </div>
            <span id='warning-last-name' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='recipient-name'>Tên*</label>
                <input
                    id='first-name'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập tên'
                />
            </div>
            <span id='warning-first-name' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='phone-number'>Giới tính</label>
                <form className='form-item-radio-form' id='gender'>
                    <input
                        id='M'
                        type='radio'
                        name='gender'
                        className='form-item-input-radio'
                    />
                    <label htmlFor='M' className='form-item-input-label'>Nam</label>
                    <input
                        id='F'
                        type='radio'
                        name='gender'
                        className='form-item-input-radio'
                    />
                    <label htmlFor='F' className='form-item-input-label'>Nữ</label>
                    <input
                        id='N'
                        type='radio'
                        name='gender'
                        className='form-item-input-radio'
                    />
                    <label htmlFor='N' className='form-item-input-label'>Khác</label>
                </form>
            </div>
            <span id='warning' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='email'>Email*</label>
                <input
                    id='email'
                    type='email'
                    className='form-item-input form-item-special'
                    placeholder='Thêm email'
                    disabled
                />
                <span className='form-item-special-change'>Thay đổi</span>
            </div>
            <span id='warning-email' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='phone-number'>Số điện thoại*</label>
                <input
                    id='phone-number'
                    type='number'
                    className='form-item-input form-item-special'
                    placeholder='Nhập số điện thoại'
                    disabled
                />
                <span className='form-item-special-change'>Thay đổi</span>
            </div>
            <span id='warning-phone-number' className='warning hidden' >Thông tin này không thể để trống</span>
            {/* <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='birthday'>Ngày sinh</label>
                <input
                    id='birthday'
                    type='date'
                    className='form-item-input date-picker'
                />
            </div>
            <span id='warning' className='warning hidden' >Thông tin này không thể để trống</span> */}
            <div className='form-item-wrap'>
                <label className='form-item-label'></label>
                <a className='form-item-change-pwd-handler'
                    style={{cursor: 'pointer', color: '#2F80ED', marginLeft: '10px'}}
                >Đổi mật khẩu</a>
            </div>
            <span id='warning' className='warning hidden' ></span>
        </div>
    );
}

export default AccountInfoForm;