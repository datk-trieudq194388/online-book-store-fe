import './accountInfo.css'
import './profile.css'
import { getProvinces, getDistricts, getWards } from '../../configs/VietnameseAddresses';
import { useEffect, useState } from 'react';
import CategorySide from '../../components/Profile/CategorySide';
import OrderList from '../../components/Order/OrderList';
import {DoubleLeftOutlined} from '@ant-design/icons'
import AccountInfoForm from '../../components/Form/AccountInfoForm';

function AccountInfo(){

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
                    <AccountInfoForm/>
                    <div className='address-edit-handle'>
                        <button className='profile-update-button'>Cập nhật tài khoản</button>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
}

export default AccountInfo;