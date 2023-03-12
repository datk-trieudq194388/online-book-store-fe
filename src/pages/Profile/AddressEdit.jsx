import './addressEdit.css'
import './profile.css'
import { getProvinces, getDistricts, getWards } from '../../configs/VietnameseAddresses';
import { useEffect, useState } from 'react';
import CategorySide from '../../components/Profile/CategorySide';
import OrderList from '../../components/Order/OrderList';
import AddressForm from '../../components/Form/AddressForm';
import {DoubleLeftOutlined} from '@ant-design/icons'

function AddressEdit(){

    return(
        <div className='profile-page'>
            <div className='profile-left-side'>
                <CategorySide index='3'/>
            </div>

            <div className='profile-right-side'>
                <div className='profile-right-side-label'>
                    <span>CẬP NHẬT ĐỊA CHỈ GIAO HÀNG</span>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='address-edit-content'>
                    <AddressForm/>
                    <div className='address-edit-handle'>
                        <button className='profile-update-button'>Cập nhật địa chỉ</button>
                        <span className='address-edit-go-back'><DoubleLeftOutlined className='address-edit-go-back-icon'/>Quay lại</span>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
}

export default AddressEdit;