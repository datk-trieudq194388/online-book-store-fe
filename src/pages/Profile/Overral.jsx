import './overral.css'
import './profile.css'
import { getProvinces, getDistricts, getWards } from '../../configs/VietnameseAddresses';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySide from '../../components/Profile/CategorySide';
import OrderList from '../../components/Order/OrderList';

function Overral(){
    const navigate = useNavigate();

    return(
        <div className='profile-page'>
            <div className='profile-left-side'>
                <CategorySide index='1'/>
            </div>

            <div className='profile-right-side'>
                <div className='profile-right-side-label'>
                    <span>THÔNG TIN TÀI KHOẢN</span>
                    <span className='overral-page-side-label'
                        onClick={()=>navigate('/profile/account-info')}
                    >
                        Cập nhật tài khoản</span>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='profile-info-content'>
                    <p className='p'>Họ và tên: <span>{'Trieu Duong'}</span></p>
                    <p className='p'>Email: <span>{'quangtrieu2509@gmail.com'}</span></p>
                    <p className='p'>Số điện thoại: <span>{'0123456789'}</span></p>
                </div>
                <div className='profile-right-side-label recent-orders'>
                    <span>NHỮNG ĐƠN HÀNG GẦN ĐÂY</span>
                    <span className='overral-page-side-label'
                        onClick={()=>navigate('/profile/orders')}
                    >   
                        Xem tất cả</span>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='recent-orders-content'>
                    <OrderList/>
                </div>
                <div className='profile-right-side-label my-address'>
                    <span>SỔ ĐỊA CHỈ</span>
                    <span className='overral-page-side-label'
                        onClick={()=>navigate('/profile/address/edit')}
                    >
                        Cập nhật địa chỉ</span>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='my-address-info-content'>
                    <p className='p'>ĐỊA CHỈ GIAO HÀNG MẶC ĐỊNH</p>
                    <p className='p'>{'Trieu Duong'}</p>
                    <p className='p'>{'357 Vọng'}</p>
                    <p className='p'>{'Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội'}</p>
                    <p className='p'>Tel: {'0123456789'}</p>
                </div>
            </div>
        </div>
    );
}

export default Overral;