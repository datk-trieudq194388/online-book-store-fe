import './titleDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import 
  { MinusOutlined, 
    PlusOutlined,
    ShoppingCartOutlined, 
    RightOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { useEffect } from 'react';
import { getTitleBySlug } from '../../api/TitleAPI';

function TitleDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [title, setTitle] = useState({
    name: "Loading...",
    price: 0,
    authors: [""],
    translators: [""],
    publisher: "",
    pYear: 0,
    page: 0,
    size: [0, 0, 0],
    category: ["Loading...", "Loading..."],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "",
    slug: "default-slug-4mm5BvC23",
    quantity: 0
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
     
      const res = await getTitleBySlug(slug);
    
      if (!res.ok)
        alert('Gửi yêu cầu thất bại, hãy thử lại!')
      else{
        setTitle(res.data)
        if(res.data.quantity != 0)
          setCount(1);
      } 
    }

    fetchData();

  }, []);

  const formattedPrice = new Intl.NumberFormat("de-DE").format(title.price);

  function minusHandle(){
    if(title.quantity != 0){
      const minus = count--;
      if(minus >= 1) setCount(minus);
    }
  }

  function plusHandle(){
    if(title.quantity != 0){
      const plus = count++;
      if(plus <= title.quantity) setCount(plus);
    }
  }

  return (
    <div className='titledetail-page'>
      <div className='titledetail-breadcrumb'>
        <span className='titledetail-breadcrumb-item'>TRANG CHỦ</span>
        <RightOutlined className='titledetail-breadcrumb-arrow'/>
        <span className='titledetail-breadcrumb-item'>{title.category[0].toUpperCase()}</span>
        <RightOutlined className='titledetail-breadcrumb-arrow'/>
        <span className='titledetail-breadcrumb-item'>{title.category[1].toUpperCase()}</span>
      </div>
      <div className='titledetail-view'>
          <div className='titledetail-view-img'>
              <img src={title.image}/>
          </div>
          <div className='titledetail-view-sideinfo'>
              <div className='view-sideinfo-info-wrap'>
                <h2 className='view-sideinfo-name'>
                  {title.name}
                </h2>
                <div className='view-sideinfo-addition'>
                  <div className='sideinfo-addition-wrap'>
                    <label className='sideinfo-addition-label'>Nhà xuất bản:</label> 
                    <span className='sideinfo-addition-content'>{title.publisher}</span>
                  </div>
                  <div className='sideinfo-addition-wrap'>
                    <label className='sideinfo-addition-label'>Tác giả:</label> 
                    <span className='sideinfo-addition-content'>{title.authors.join(', ')}</span>
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
                      <a className='cart-item-count-minus' onClick={minusHandle}><MinusOutlined/></a>
                      <input type='number' className='cart-item-count-show' value={count}/>
                      <a className='cart-item-count-plus' onClick={plusHandle}><PlusOutlined/></a>
                    </div>
                  </div>
                  <span className='sideinfo-count-quantity'>Còn {title.quantity} sản phẩm</span>
                  
                </div>
              </div>
              
              <div className='view-sideinfo-action-wrap' >
                <div className='view-sideinfo-action-wrap' style={{display: (title.quantity == 0 ? 'none' : 'flex'), margin: 0}}>
                  <div className='view-sideinfo-action-addcart'>
                    <ShoppingCartOutlined className='view-sideinfo-action-addcart-icon'/>
                    Thêm vào giỏ hàng
                  </div>
                  <div className='view-sideinfo-action-buynow'>
                    Mua ngay
                  </div>
                </div>
                <div style={{display: (title.quantity != 0 ? 'none' : 'flex'), borderRadius: '5px', 
                      background: '#ffcaca', fontSize: '24px', padding: '4px 8px', color: '#f63b2f'}}
                >
                  Sản phẩm tạm hết hàng
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
            <tbody>
              <tr>
                <td className='titledetail-info-content-label'>Mã sách</td>
                <td>{title._id}</td>
              </tr>
              <tr>
                <td className='titledetail-info-content-label'>Tác giả</td>
                <td>{title.authors.join(', ')}</td>
              </tr>
              <tr>
                <td className='titledetail-info-content-label'>Người dịch</td>
                <td>{title.translators.join(', ')}</td>
              </tr>
              <tr>
                <td className='titledetail-info-content-label'>Nhà xuất bản</td>
                <td>{title.publisher}</td>
              </tr>
              <tr>
                <td className='titledetail-info-content-label'>Năm xuất bản</td>
                <td>{title.pYear}</td>
              </tr>
              <tr>
                <td className='titledetail-info-content-label'>Kích thước</td>
                <td>{title.size.join(' x ')} cm</td>
              </tr>
              <tr>
                <td className='titledetail-info-content-label'>Số trang</td>
                <td>{title.page}</td>
              </tr>
            </tbody>
          </table>
          <div className='titledetail-separate-line'></div>
          <div className='titledetail-info-content-description'>
            <div className='titledetail-info-content-label'>Mô tả</div>
            <div className='description-content'>
              {title.description}
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default TitleDetail