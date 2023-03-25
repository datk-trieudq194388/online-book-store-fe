import './listOrder.css'
import './profile.css'
import { useEffect, useState } from 'react';
import CategorySide from '../../components/Profile/CategorySide';
import OrderList from '../../components/Order/OrderList';
import { OrderStatus } from '../../configs/global';
import { useNavigate, useParams } from 'react-router';
import { getNumberOfOrderTypes } from '../../api/OrderAPI';
import { RefreshToken } from '../../configs/config';

function ListOrder(){
    const navigate = useNavigate();
    const { type } = useParams();
    const [orderType, setOrderType] = useState(OrderStatus.ALL);
    const [counts, setCounts] = useState([0, 0, 0, 0, 0])

    useEffect(() => {
        switch(type){
            case('pending'): 
                setOrderType(OrderStatus.PENDING);
                break;
            case('processing'):
                setOrderType(OrderStatus.PROCESSING);
                break;
            case('completed'):
                setOrderType(OrderStatus.COMPLETED);
                break;
            case('canceled'):
                setOrderType(OrderStatus.CANCELED);
                break;
            default:
                setOrderType(OrderStatus.ALL);
        }

        async function fetchData() {
            const validRefToken = await RefreshToken();
            if(!validRefToken){
              navigate('/login');
              return;
            } 
        
            const token = localStorage.getItem('accessToken');
            
            const res = await getNumberOfOrderTypes(token);
        
            if (!res.ok)
                alert('Gửi yêu cầu thất bại, hãy thử lại!')
            else {
                let all = 0;
                Object.entries(res.data).forEach(([key, value]) => {
                    all += value;
                });
                setCounts([all, res.data.pending, res.data.processing, res.data.completed, res.data.canceled]);
            }
        }
      
        fetchData();
    }, [])

    function selectTypeOfOrders(type){
        switch(type){
            case(OrderStatus.PENDING): 
                navigate('/profile/orders/pending'); 
                setOrderType(OrderStatus.PENDING);
                break;
            case(OrderStatus.PROCESSING):
                navigate('/profile/orders/processing'); 
                setOrderType(OrderStatus.PROCESSING);
                break;
            case(OrderStatus.COMPLETED):
                navigate('/profile/orders/completed'); 
                setOrderType(OrderStatus.COMPLETED);
                break;
            case(OrderStatus.CANCELED):
                navigate('/profile/orders/canceled'); 
                setOrderType(OrderStatus.CANCELED);
                break;
            default:
                navigate('/profile/orders/all');
                setOrderType(OrderStatus.ALL);
        }
    }

    return(
        <div className='profile-page'>
            <div className='profile-left-side'>
                <CategorySide index='4'/>
            </div>

            <div className='profile-right-side'>
                <div className='profile-right-side-label'>
                    <span>NHỮNG ĐƠN HÀNG GẦN ĐÂY</span>
                </div>
                <div className='type-order-container'>
                    <div 
                        className={'type-order-wrap'+(orderType === OrderStatus.ALL ? ' active' : '')} 
                        onClick={()=>selectTypeOfOrders(OrderStatus.ALL)}
                    >
                        <div className='type-order-number'>{counts[0]}</div>
                        <div className='type-order-label'>Tất cả</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(orderType === OrderStatus.PENDING ? ' active' : '')} 
                        onClick={()=>selectTypeOfOrders(OrderStatus.PENDING)}
                    >
                        <div className='type-order-number'>{counts[1]}</div>
                        <div className='type-order-label'>Chờ xác nhận</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(orderType === OrderStatus.PROCESSING ? ' active' : '')} 
                        onClick={()=>selectTypeOfOrders(OrderStatus.PROCESSING)}
                    >
                        <div className='type-order-number'>{counts[2]}</div>
                        <div className='type-order-label'>Đang xử lý</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(orderType === OrderStatus.COMPLETED ? ' active' : '')} 
                        onClick={()=>selectTypeOfOrders(OrderStatus.COMPLETED)}
                    >
                        <div className='type-order-number'>{counts[3]}</div>
                        <div className='type-order-label'>Hoàn tất</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(orderType === OrderStatus.CANCELED ? ' active' : '')} 
                        onClick={()=>selectTypeOfOrders(OrderStatus.CANCELED)}
                    >
                        <div className='type-order-number'>{counts[4]}</div>
                        <div className='type-order-label'>Bị hủy</div>
                    </div>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='list-order-content'>
                    <OrderList type={orderType}/>
                </div>
                
            </div>
        </div>
    );
}

export default ListOrder;