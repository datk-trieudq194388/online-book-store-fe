import './cartTitleItem.css'
import {
    DeleteOutlined,
    MinusOutlined,
    PlusOutlined
  } from '@ant-design/icons'

function CartTitleItem(props) {
  const [name, price, count] = [props.name, props.price, props.count];
  const trimmedName = name?.length > 36 ? name.split(0, 36)+'...' : name;
  const formattedPrice = new Intl.NumberFormat("de-DE").format(price)
  const formattedTotal = new Intl.NumberFormat("de-DE").format(price * count)


  return (
    <div className='cart-item'>
      <div className='cart-item-checked'>
        <input type='checkbox' />
      </div>
      <div className='cart-item-img'>
        <img src={props.img} alt={props.name}/>
      </div>
      <div className='cart-item-name'>
        <span>{trimmedName}</span>
      </div>
      <div className='cart-item-unitprice'>
        <span>{formattedPrice}đ</span>
      </div>
      <div className='cart-item-count'>
        <div className='cart-item-count-wrap'>
            <a className='cart-item-count-minus'><MinusOutlined/></a>
            <input type='number' className='cart-item-count-show' value={count}/>
            <a className='cart-item-count-plus'><PlusOutlined/></a>
        </div>
      </div>
      <div className='cart-item-total'>
        <span>{formattedTotal}đ</span>
      </div>
      <div className='cart-item-removed'>
        <DeleteOutlined className='delete-outlined'/>
      </div>
    </div>
  )
}

export default CartTitleItem