import './checkoutTitleItem.css'
import {
    DeleteOutlined,
    MinusOutlined,
    PlusOutlined
  } from '@ant-design/icons'

function CheckoutTitleItem(props) {
  const [name, price, count] = [props.name, props.price, props.count];
  const trimmedName = name?.length > 36 ? name.split(0, 36)+'...' : name;
  const formattedPrice = new Intl.NumberFormat("de-DE").format(price)
  const formattedTotal = new Intl.NumberFormat("de-DE").format(price * count)


  return (
    <div className='checkout-item'>
        <div className='wrap'>
            <div className='checkout-item-img'>
                <img src={props.img} alt={props.name}/>
            </div>
            <div className='checkout-item-name'>
                <span>{trimmedName}</span>
            </div>
      </div>
      <div className='wrap'>
        <div className='checkout-item-unitprice'>
            <span>{formattedPrice}đ</span>
        </div>
        <div className='checkout-item-count'>
            <span>{count}</span>
        </div>
        <div className='checkout-item-total'>
            <span>{formattedTotal}đ</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutTitleItem