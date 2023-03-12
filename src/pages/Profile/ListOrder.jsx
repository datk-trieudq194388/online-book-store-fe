import './listOrder.css'
import './profile.css'
import { getProvinces, getDistricts, getWards } from '../../configs/VietnameseAddresses';
import { useEffect, useState } from 'react';
import CategorySide from '../../components/Profile/CategorySide';
import OrderList from '../../components/Order/OrderList';

function ListOrder(){

    const [selected, setSelected] = useState('ALL');

    function selectTypeOfTrending(type){
        // do something

        setSelected(type);
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
                        className={'type-order-wrap'+(selected === 'ALL' ? ' active' : '')} 
                        onClick={()=>selectTypeOfTrending('ALL')}
                    >
                        <div className='type-order-number'>{0}</div>
                        <div className='type-order-label'>Tất cả</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(selected === 'PE' ? ' active' : '')} 
                        onClick={()=>selectTypeOfTrending('PE')}
                    >
                        <div className='type-order-number'>{0}</div>
                        <div className='type-order-label'>Chờ thanh toán</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(selected === 'PR' ? ' active' : '')} 
                        onClick={()=>selectTypeOfTrending('PR')}
                    >
                        <div className='type-order-number'>{0}</div>
                        <div className='type-order-label'>Đang xử lý</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(selected === 'CO' ? ' active' : '')} 
                        onClick={()=>selectTypeOfTrending('CO')}
                    >
                        <div className='type-order-number'>{0}</div>
                        <div className='type-order-label'>Hoàn tất</div>
                    </div>
                    <div 
                        className={'type-order-wrap'+(selected === 'CA' ? ' active' : '')} 
                        onClick={()=>selectTypeOfTrending('CA')}
                    >
                        <div className='type-order-number'>{0}</div>
                        <div className='type-order-label'>Bị hủy</div>
                    </div>
                </div>
                <div className='titledetail-separate-line'></div> 
                <div className='list-order-content'>
                    <OrderList/>
                </div>
                
            </div>
        </div>
    );
}

export default ListOrder;