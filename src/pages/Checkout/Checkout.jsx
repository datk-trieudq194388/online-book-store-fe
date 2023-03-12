import './checkout.css';
import { cartItems , CheckValidate} from '../../configs/config';
import AddressForm from '../../components/Form/AddressForm';
import {CaretLeftFilled} from '@ant-design/icons'
import CheckoutTitleItem from '../../components/Title/CheckoutTitleItem';

function Checkout() {

  function handleSubmit(){
    CheckValidate(document, 'recipient-name', 'email', 'phone-number', 
      'province-select', 'district-select', 'ward-select', 'detail-address')
  }


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
            <input className="checking-input" type="radio" id="shipping" value="shipping" checked/>
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
            <input className="checking-input" type="radio" id="payment" value="payment" checked/>
            <label for="payment">Thanh toán bằng tiền mặt khi nhận hàng</label>
          </div>
        </div>
      </div>
      <div className='checkout-block coupon' hidden>
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
        {
              cartItems.map((item, i)=>{
                  return(
                    <div>
                      <CheckoutTitleItem key={i} img={item.img} name={item.name} price={item.price} count={item.count}/>
                      {i+1 === cartItems.length? <></> : <div className='checkout-separate-line item'></div>}
                    </div>
                      
                  )
              })
            }
        </div>
      </div>

      <div className='end-checkout'>
        <div className='end-checkout-info'>
          <div className='end-checkout-items-price'>
            <div>Thành tiền</div>
            <div className='price'>{100000} đ</div>
          </div>
          <div className='end-checkout-shipping-price'>
            <div>Phí vận chuyển</div>
            <div className='price'>{20000} đ</div>
          </div>
          <div className='end-checkout-total-price'>
            <div id='total-price-title'>Tổng số tiền</div>
            <div id='total-price-number' className='price'>{2000000} đ</div>
          </div>

        </div>
        <div className='checkout-separate-line end'></div>
        <div className='end-checkout-handle'>
          <div className='end-checkout-gobackcart'>
            <CaretLeftFilled className='end-checkout-gbc-icon'/>
            <span className='cart-checkout-gbc-title'>Quay về giỏ hàng</span>
          </div>

          <div  className='end-checkout-submit' onClick={handleSubmit}>
            <span>Xác nhận thanh toán</span>
          </div> 
        </div>
      
      </div>

    
    </div>
    
  )
}

export default Checkout