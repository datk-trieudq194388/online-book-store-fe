import './address.css'
import './profile.css'
import { getProvinces, getDistricts, getWards } from '../../configs/VietnameseAddresses';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySide from '../../components/Profile/CategorySide';
import OrderList from '../../components/Order/OrderList';

function Address(){
    const navigate = useNavigate();
    return(
        <div className='profile-page'>
            <div className='profile-left-side'>
                <CategorySide index='3'/>
            </div>

            <div className='profile-right-side'>
                <div className='profile-right-side-label'>
                    <span>SỔ ĐỊA CHỈ</span>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='my-address-info-content'>
                    <p className='p ma'>ĐỊA CHỈ GIAO HÀNG MẶC ĐỊNH</p>
                    <p className='p ma'>{'Trieu Duong'}</p>
                    <p className='p ma'>{'357 Vọng'}</p>
                    <p className='p ma'>{'Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội'}</p>
                    <p className='p ma'>Tel: {'0123456789'}</p>
                    <span className='my-address-update-address'
                        onClick={()=>navigate('/profile/address/edit')}
                    >
                        Cập nhật địa chỉ mặc định</span>
                </div>
                
            </div>
        </div>
    );
}

export default Address;