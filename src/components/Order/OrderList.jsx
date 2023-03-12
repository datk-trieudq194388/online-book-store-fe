import './orderList.css'
import { exampleOrders } from '../../configs/config'
import OrderItem from './OrderItem'


function OrderList(){

    return (
        <div className="order-list-wrap">
            <div className='order-list-header'>
                <div className='order-list-header-id'>
                    <span>Mã đơn hàng</span>
                </div>
                <div className='order-list-header-date'>
                    <span>Ngày mua</span>
                </div>
                <div className='order-list-header-recipient'>
                    <span>Người nhận</span>
                </div>
                <div className='order-list-header-total'>
                    <span>Tổng tiền</span>
                </div>
                <div className='order-list-header-state'>
                    <span>Trạng thái</span>
                </div>
                <div className='order-list-header-see-detail'>
                </div>
            </div>

            <div className='order-list-items'>
            {
                exampleOrders.map((item, i)=>{
                    return(
                        <OrderItem key={i} orderInfo={item}/>
                    )
                })
            }
            </div> 
        </div>

    )
}

export default OrderList