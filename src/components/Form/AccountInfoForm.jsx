import './form.css'
import { getProvinces, getDistricts, getWards } from '../../configs/VietnameseAddresses';
import { useEffect, useState } from 'react';

function AccountInfoForm(){

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
            <span id='warning1' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='recipient-name'>Tên*</label>
                <input
                    id='first-name'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập tên'
                />
            </div>
            <span id='warning1' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='email'>Email*</label>
                <input
                    id='email'
                    type='email'
                    className='form-item-input form-item-special'
                    placeholder='Nhập email'
                />
                <span className='form-item-special-change'>Thay đổi</span>
            </div>
            <span id='warning2' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='phone-number'>Số điện thoại*</label>
                <input
                    id='phone-number'
                    type='number'
                    className='form-item-input form-item-special'
                    placeholder='Nhập số điện thoại'
                />
                <span className='form-item-special-change'>Thay đổi</span>
            </div>
            <span id='warning3' className='warning hidden' >Thông tin này không thể để trống</span>
           
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='phone-number'>Giới tính</label>
                <form className='form-item-radio-form'>
                    <input
                        id='male'
                        type='radio'
                        name='gender'
                        className='form-item-input-radio'
                    />
                    <label htmlFor='male' className='form-item-input-label'>Nam</label>
                    <input
                        id='female'
                        type='radio'
                        name='gender'
                        className='form-item-input-radio'
                    />
                    <label htmlFor='female' className='form-item-input-label'>Nữ</label>
                    <input
                        id='other'
                        type='radio'
                        name='gender'
                        className='form-item-input-radio'
                    />
                    <label htmlFor='other' className='form-item-input-label'>Khác</label>
                </form>
            </div>
            <span id='warning4' className='warning hidden' >Thông tin này không thể để trống</span>

            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='detail-address'>Ngày sinh</label>
                <input
                    id='detail-address'
                    type='date'
                    className='form-item-input date-picker'
                />
            </div>
            <span id='warning5' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='detail-address'></label>
                <a
                    className='form-item-change-pwd-handler'
                    style={{cursor: 'pointer', color: '#2F80ED', marginLeft: '10px'}}
                >Đổi mật khẩu</a>
            </div>
            <span id='warning6' className='warning hidden' >Thông tin này không thể để trống</span>
        </div>
    );
}

export default AccountInfoForm;