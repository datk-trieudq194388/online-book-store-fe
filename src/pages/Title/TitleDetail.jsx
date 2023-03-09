import './titleDetail.css';
import { useNavigate } from 'react-router-dom';
import {MinusOutlined, PlusOutlined, ShoppingCartOutlined, RightOutlined} from '@ant-design/icons'
import { item } from '../../configs/config';

function TitleDetail() {
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat("de-DE").format(item.price)

  function goToCheckout(){
    navigate('/checkout')
  }

  return (
    <div className='titledetail-page'>
      <div className='titledetail-breadcrumb'>
        <span className='titledetail-breadcrumb-item'>TRANG CHỦ</span>
        <RightOutlined className='titledetail-breadcrumb-arrow'/>
        <span className='titledetail-breadcrumb-item'>{item.category[0].toUpperCase()}</span>
        <RightOutlined className='titledetail-breadcrumb-arrow'/>
        <span className='titledetail-breadcrumb-item'>{item.category[1].toUpperCase()}</span>
      </div>
      <div className='titledetail-view'>
          <div className='titledetail-view-img'>
              <img src={item.img}/>
          </div>
          <div className='titledetail-view-sideinfo'>
              <div className='view-sideinfo-info-wrap'>
                <h2 className='view-sideinfo-name'>
                  {item.name}
                </h2>
                <div className='view-sideinfo-addition'>
                  <div className='sideinfo-addition-wrap'>
                    <label className='sideinfo-addition-label'>Nhà xuất bản:</label> 
                    <span className='sideinfo-addition-content'>{item.publisher}</span>
                  </div>
                  <div className='sideinfo-addition-wrap'>
                    <label className='sideinfo-addition-label'>Tác giả:</label> 
                    <span className='sideinfo-addition-content'>{item.authors[0]}</span>
                  </div>
                  
                </div>
                <div className='view-sideinfo-price'>
                  {formattedPrice} đ
                </div>
                <div className='view-sideinfo-policy-wrap'>
                    <label className='sideinfo-policy-label'>Chính sách đổi trả</label> 
                    <span className='sideinfo-policy-content'>Đổi trả sản phẩm trong 30 ngày</span>
                    <span className='sideinfo-policy-formore'>Xem thêm</span>
                </div>
                <div className='view-sideinfo-count'>
                  <label className='sideinfo-count-label'>Số lượng:</label>
                  <div className='sideinfo-count-wrap'>
                    <div className='cart-item-count-wrap'>
                      <a className='cart-item-count-minus'><MinusOutlined/></a>
                      <input type='number' className='cart-item-count-show' value={1}/>
                      <a className='cart-item-count-plus'><PlusOutlined/></a>
                    </div>
                  </div>
                  <span className='sideinfo-count-quantity'>Còn {item.quantity} sản phẩm</span>
                  
                </div>
              </div>
              
              <div className='view-sideinfo-action-wrap'>
                  <div className='view-sideinfo-action-addcart'>
                    <ShoppingCartOutlined className='view-sideinfo-action-addcart-icon'/>
                    Thêm vào giỏ hàng
                  </div>
                  <div className='view-sideinfo-action-buynow'>
                    Mua ngay
                  </div>
              </div>
          </div>
      </div>

      <div className='titledetail-info'>
        <div className='titledetail-info-title'>
          <span>Thông tin chi tiết</span>
        </div>
        <div className='titledetail-info-content'>
          <table className='titledetail-info-content-table'>
            <tr>
              <td className='titledetail-info-content-label'>Mã sách</td>
              <td>{item._id}</td>
            </tr>
            <tr>
              <td className='titledetail-info-content-label'>Tác giả</td>
              <td>{item.authors[0]}</td>
            </tr>
            <tr>
              <td className='titledetail-info-content-label'>Người dịch</td>
              <td>{item.translators[0]}</td>
            </tr>
            <tr>
              <td className='titledetail-info-content-label'>Nhà xuất bản</td>
              <td>{item.publisher}</td>
            </tr>
            <tr>
              <td className='titledetail-info-content-label'>Kích thước</td>
              <td>{item.size[0]}x{item.size[1]}x{item.size[2]} cm</td>
            </tr>
            <tr>
              <td className='titledetail-info-content-label'>Số trang</td>
              <td>{item.page}</td>
            </tr>
          </table>
          <div className='titledetail-separate-line'></div>
          <div className='titledetail-info-content-description'>
            <div className='titledetail-info-content-label'>Mô tả</div>
            <div className='description-content'>
              {item.description}
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default TitleDetail