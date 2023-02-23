import './addressForm.css'
import { getProvinces, getDistricts, getWards } from '../../configs/VietnameseAddresses';
import { useEffect, useState } from 'react';

function AddressForm(){

    const [provinces, setProvinces] = useState(null);
    const [p, setP] = useState('select-placeholder');
    const [districts, setDistricts] = useState(null);
    const [d, setD] = useState('select-placeholder');
    const [wards, setWards] = useState(null);
    const [w, setW] = useState('select-placeholder');

    useEffect(()=>{
        const Ps = getProvinces();
        setProvinces(Ps)
    }, [])
    
    function onProviceChange(e){
        const Ds = getDistricts(e.target.value);
        setP(e.target.value)
        setD('select-placeholder')
        setW('select-placeholder')
        setWards(null)
        setDistricts(Ds)
    }

    function onDistrictChange(e){
        const Ws = getWards(p, e.target.value);
        setD(e.target.value)
        setWards(Ws)
    }

    function onWardChange(e){
        setW(e.target.value)
    }


    return(
        <div className='address-form'>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='recipient-name'>Họ và tên người nhận</label>
                <input
                    id='recipient-name'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập họ và tên người nhận'
                />
            </div>
            <span id='warning1' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    className='form-item-input'
                    placeholder='Nhập email'
                />
            </div>
            <span id='warning2' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='phone-number'>Số điện thoại</label>
                <input
                    id='phone-number'
                    type='number'
                    className='form-item-input'
                    placeholder='Nhập số điện thoại'
                />
            </div>
            <span id='warning3' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label'>Tỉnh/Thành phố</label>
                <select id="province-select" className='form-item-select' onChange={onProviceChange} value={p}>
                    <option value="select-placeholder" disabled selected hidden>Chọn Tỉnh/Thành phố</option>
                    {
                        provinces?.map((e, i) => {
                            return <option key={i} value={e.code}>{e.name}</option>
                        })
                    }
                </select>
            </div>
            <span id='warning4' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label'>Quận/Huyện</label>
                <select id="district-select" className='form-item-select' 
                        disabled={districts ? false : true} value={d}
                        onChange={onDistrictChange}   
                >
                    <option value="select-placeholder" disabled hidden className='selecting-placeholder'>Chọn Quận/Huyện</option>
                    {
                        districts?.map((e, i) => {
                            return <option key={i} value={e.code}>{e.name}</option>
                        })
                    }
                </select>
            </div>
            <span id='warning5' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label'>Phường/Xã</label>
                <select id="ward-select" className='form-item-select' 
                        disabled={wards ? false : true} value={w}
                        onChange={onWardChange}
                >
                    <option value="select-placeholder" disabled hidden >Chọn Phường/Xã</option>
                    {
                        wards?.map((e, i) => {
                            return <option key={i} value={e.code}>{e.name}</option>
                        })
                    }
                </select>
            </div>
            <span id='warning6' className='warning hidden' >Thông tin này không thể để trống</span>
            <div className='form-item-wrap'>
                <label className='form-item-label' htmlFor='detail-address'>Địa chỉ nhận hàng</label>
                <input
                    id='detail-address'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập địa chỉ chi tiết'
                />
            </div>
            <span id='warning7' className='warning hidden' >Thông tin này không thể để trống</span>
        </div>
    );
}

export default AddressForm;