import './cart.css';
import { useNavigate } from 'react-router-dom';
import CartTitleItem from '../../components/Title/CartTitleItem';
import {GiftOutlined, CaretRightFilled} from '@ant-design/icons'
import { cartItems } from '../../configs/config';

function Cart() {
  const navigate = useNavigate();
  function goToCheckout(){
    navigate('/checkout')
  }

  return (
    <div className='cart-page'>
      <div className='cart-page-title'>
        <span>GIỎ HÀNG</span>
      </div>
      <div className='cart-main'>
        <div className="cart-wrap">
          <div className='cart-item-header'>
            <div className='cart-item-header-checked'>
              <input type='checkbox' />
            </div>
            <div className='cart-item-header-info'>
              <span>Chọn tất cả (x sản phẩm)</span>
            </div>
            <div className='cart-item-header-unitprice'>
              <span>Đơn giá</span>
            </div>
            <div className='cart-item-header-count'>
              <span>Số lượng</span>
            </div>
            <div className='cart-item-header-total'>
              <span>Số tiền</span>
            </div>
            <div className='cart-item-header-remove'>
            </div>
          </div>

          <div className='cart-items'>
            {
              cartItems.map((item, i)=>{
                  return(
                    <div>
                      <CartTitleItem key={i} img={item.img} name={item.name} price={item.price} count={item.count}/>
                      {i+1 === cartItems.length? <></> : <div className='cart-separate-line'></div>}
                    </div>
                  )
              })
            }
          </div>
          
        </div>

        <div className='cart-promotion'>
          <div className='cart-promotion-title'>
            <GiftOutlined className='cart-promotion-title-icon'/>
            <span className='cart-promotion-title-name'>KHUYẾN MÃI</span>
          </div>
          <div className='cart-separate-line'></div>
          <div className='cart-promotion-content'>
            <span className='temp'>Khuyến mãi giảm sốc 1 triệu đồng cho đơn hàng trên 1 tỷ đồng</span>
            <br/>
            <span className='temp'>Miễn phí giao hàng cho đơn hàng trên 100 triệu đồng</span>
          </div>
        </div>
      </div>
      
      <div className='cart-checkout'>
        <div className='cart-checkout-info'>
          <span className='cart-checkout-title'>Tổng cộng:</span>
          <span className='cart-checkout-total'>1.000.000đ</span>
        </div>

        <div className='cart-checkout-forward' onClick={goToCheckout}>
            <span className='cart-checkout-fw-title'>Thanh toán</span>
            <CaretRightFilled className='cart-checkout-fw-icon'/>
        </div>
      
      </div>
    </div>
    
  )
}

export default Cart