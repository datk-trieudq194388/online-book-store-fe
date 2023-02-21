import './checkout.css';
import { cartItems } from '../../configs/config';
import AddressForm from '../../components/Address/AddressForm';

function Checkout() {

  return (
    <div className='checkout-page'>
      <div className='checkout-block address'>
        <div className='block-title'>
          <span className='block-address-title-name'>ĐỊA CHỈ GIAO HÀNG</span>
        </div>
        <div className='checkout-separate-line'></div>
        <div className='block-content address'>
          <AddressForm/>
        </div>
      </div>
      <div className='checkout-block shipping'>
        <div className='block-title'>
          <span className='block-shipping-title-name'>PHƯƠNG THỨC VẬN CHUYỂN</span>
        </div>
        <div className='checkout-separate-line'></div>
        <div className='block-content'>
          <div className='block-content-wrap'>
            <input type="radio" id="shipping" value="shipping" checked/>
            <label for="shipping">Giao hàng tiêu chuẩn: <span className='shipping-cost'> 20.000đ</span></label>
          </div>
        </div>
      </div>
      <div className='checkout-block payment'>
        <div className='block-title'>
          <span className='block-payment-title-name'>PHƯƠNG THỨC THANH TOÁN</span>
        </div>
        <div className='checkout-separate-line'></div>
        <div className='block-content'>
          <div className='block-content-wrap'>
            <input type="radio" id="payment" value="payment" checked/>
            <label for="payment">Thanh toán bằng tiền mặt khi nhận hàng</label>
          </div>
        </div>
      </div>
      <div className='checkout-block coupon'>
        <div className='block-title'>
          <span className='block-coupon-title-name'>MÃ KHUYẾN MÃI</span>
        </div>
        <div className='checkout-separate-line'></div>
        <div className='block-content'>
          <span>Temple</span>
        </div>
      </div>
      <div className='checkout-block order'>
        <div className='block-title'>
          <span className='block-order-title-name'>KIỂM TRA LẠI ĐƠN HÀNG</span>
        </div>
        <div className='checkout-separate-line'></div>
        <div className='block-content'>
          <span>Temple</span>
        </div>
      </div>
    </div>
    
  )
}

export default Checkout