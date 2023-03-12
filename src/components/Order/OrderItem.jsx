import './orderItem.css'
import moment from 'moment-timezone';

function OrderItem(props) {
  const name = props.orderInfo.recipientInfo;
  const totalAmount = props.orderInfo.totalAmount;
  const date = props.orderInfo.createAt;
  const trimmedName = name?.length > 20 ? '...'+name.split(name.length-1, name.length-21) : name;
  const formattedTotalAmount = new Intl.NumberFormat("de-DE").format(totalAmount)
  const createdDateTime = date ? moment(date).tz('Asia/Ho_Chi_Minh').format('YYYY/MM/DD - HH:mm') : '';
  const createdDate = date ? moment(date).tz('Asia/Ho_Chi_Minh').format('YYYY/MM/DD') : '';

  return (
    <div className='order-item'>
      <div className='order-item-id'>
        <span>{props.orderInfo._id}</span>
      </div>
      <div className='order-item-date'>
        <div id='order-item-date-1'>{createdDateTime}</div>
        <div id='order-item-date-2'>{createdDate}</div>
      </div>
      <div className='order-item-recipient'>
        <span>{trimmedName}</span>
      </div>
      <div className='order-item-total'>
        <span>{formattedTotalAmount} đ</span>
      </div>
      <div className='order-item-state'>
        <span>{'Chờ xác nhận'}</span>
      </div>
      <div className='order-item-see-detail'>
        <span>{'Xem chi tiết'}</span>
      </div>
    </div>
  )
}

export default OrderItem