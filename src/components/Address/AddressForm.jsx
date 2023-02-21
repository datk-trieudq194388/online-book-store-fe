import './addressForm.css'

function AddressForm(){

    return(
        <div className='address-form'>
            <div className='form-item-wrap'>
                <label className='form-item-label' for='recipient-name'>Họ và tên người nhận</label>
                <input
                    id='recipient-name'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập họ và tên người nhận'
                />
            </div>
            <div className='form-item-wrap'>
                <label className='form-item-label' for='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    className='form-item-input'
                    placeholder='Nhập email'
                />
            </div>
            <div className='form-item-wrap'>
                <label className='form-item-label' for='phone-number'>Số điện thoại</label>
                <input
                    id='phone-number'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập số điện thoại'
                />
            </div>
            <div className='form-item-wrap'>
                <label className='form-item-label'>Tỉnh/Thành phố</label>
            </div>
            <div className='form-item-wrap'>
                <label className='form-item-label'>Quận/Huyện</label>
            </div>
            <div className='form-item-wrap'>
                <label className='form-item-label'>Phường/Xã</label>
            </div>
            <div className='form-item-wrap'>
                <label className='form-item-label' for='detail-address'>Địa chỉ nhận hàng</label>
                <input
                    id='detail-address'
                    type='text'
                    className='form-item-input'
                    placeholder='Nhập địa chỉ chi tiết'
                />
            </div>
        </div>
    );
}

export default AddressForm;