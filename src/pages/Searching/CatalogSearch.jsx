import './catalogSearch.css';
import { useNavigate } from 'react-router-dom';
import {MinusOutlined, PlusOutlined, ShoppingCartOutlined, RightOutlined} from '@ant-design/icons'
import { item } from '../../configs/config';
import SearchingListTitle from '../../components/Title/SearchingListTitle';

function CatalogSearch() {
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat("de-DE").format(item.price)

  function goToCheckout(){
    navigate('/checkout')
  }

  return (
    <div className='catalogsearch-page'>
      <div className='titledetail-breadcrumb'>
        <span className='titledetail-breadcrumb-item'>TRANG CHỦ</span>
        <RightOutlined className='titledetail-breadcrumb-arrow'/>
        <span className='titledetail-breadcrumb-item' id='breadcrumb-searching-item'>KẾT QUẢ TÌM KIẾM VỚI: {'something'}</span>
      </div>
      <div className='catalogsearch-main'>
        <div className='catalogsearch-filter'>
            <div className='catalogsearch-filter-label'>
                <span>Lọc sản phẩm</span>    
            </div>   
            <div className='titledetail-separate-line'></div> 
            <div className='filter-item'>
                <div className='filter-item-label'>
                    <span>Nhóm sản phẩm</span>
                </div>
                <div className='filter-titlegroups-wrap'>
                  <input type="checkbox" id="vietnamese-books" name="vietnamese-books" value="vn-books"/>
                  <label for="vietnamese-books"> Sách trong nước</label>
                </div>
                <div className='filter-titlegroups-wrap'>
                  <input type="checkbox" id="foreign-books" name="foreign-books" value="fr-books"/>
                  <label for="foreign-books"> Sách nước ngoài</label>
                </div> 
            </div>
            <div className='titledetail-separate-line'></div> 
            <div className='filter-item'>
                <div className='filter-item-label'>
                    <span>Giá</span>
                </div>
                <div className='filter-item-wrap'>
                  <input type="number" id="price-from" className='filter-item-input'/>
                  <span>-</span>
                  <input type="number" id="price-to" className='filter-item-input'/>
                </div>
                <div className='filter-item-handle-wrap'>
                  <button className='filter-item-btn-reset'>Đặt lại</button>
                  <button className='filter-item-btn-enter'>Chọn</button>
                </div> 
            </div>
            <div className='titledetail-separate-line'></div> 
            <div className='filter-item'>
                <div className='filter-item-label'>
                    <span>Số trang</span>
                </div>
                <div className='filter-item-wrap'>
                  <input type="number" id="page-from" className='filter-item-input'/>
                  <span>-</span>
                  <input type="number" id="page-to" className='filter-item-input'/>
                </div>
                <div className='filter-item-handle-wrap'>
                  <button className='filter-item-btn-reset'>Đặt lại</button>
                  <button className='filter-item-btn-enter'>Chọn</button>
                </div> 
            </div>
            <div className='titledetail-separate-line'></div> 
            <div className='filter-item'>
                <div className='filter-item-label'>
                    <span>Năm xuất bản</span>
                </div>
                <div className='filter-item-wrap'>
                  <input type="number" id="year-from" className='filter-item-input'/>
                  <span>-</span>
                  <input type="number" id="year-to" className='filter-item-input'/>
                </div>
                <div className='filter-item-handle-wrap'>
                  <button className='filter-item-btn-reset'>Đặt lại</button>
                  <button className='filter-item-btn-enter'>Chọn</button>
                </div> 
            </div>
            <div className='titledetail-separate-line'></div> 
            <div className='filter-item'>
                <div className='filter-item-label'>
                    <span>Tác giả</span>
                </div>
                <div className='filter-item-wrap'>
                  <input type="text" className='filter-item-input'/>
                </div>
                <div className='filter-item-handle-wrap'>
                  <button className='filter-item-btn-reset'>Đặt lại</button>
                  <button className='filter-item-btn-enter'>Chọn</button>
                </div> 
            </div>
        </div>

        <div className='catalogsearch-result'>
            <div className='catalogsearch-result-wrap'>
              <div className='catalogsearch-result-label'>
                  <span>Kết quả tìm kiếm với: {'something'}</span>    
              </div>  
              <div className='catalogsearch-filter-toolbar'>
                  <span className='toolbar-filter-label'>Sắp xếp theo:</span>
                  <select id="orderby-select" className='toolbar-filter-select' value='newest'>
                          <option value="newest"  selected>Mới nhất</option>
                          <option value="bestseller"  selected>Bán chạy nhất</option>
                          <option value="most-view"  selected>Xem nhiều nhất</option>
                          <option value="low-to-high"  selected>Giá: Thấp đến Cao</option>
                          <option value="high-to-low"  selected>Giá: Cao đến Thấp</option>
                  </select>   
                  <select id="state-select" className='toolbar-filter-select' value='all'>
                          <option value="all" selected>Tất cả</option>
                          <option value="available" selected>Còn hàng</option>
                  </select>   
                  <select id="quantity-select" className='toolbar-filter-select' value='12'>
                          <option value="12"  selected>12 sản phẩm</option>
                          <option value="24"  selected>24 sản phẩm</option>
                          <option value="36"  selected>36 sản phẩm</option>

                  </select>    
              </div> 
            </div>
            <div className='titledetail-separate-line'></div> 
            <div className='titledetail-result-content'>
              <SearchingListTitle />
            </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default CatalogSearch