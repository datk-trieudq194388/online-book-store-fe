import { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  RiseOutlined
} from '@ant-design/icons'
import './home.css'
import TitleItem from '../../components/Title/TitleItem';
import { homeCategoriesList, exampleTitles } from '../../configs/config';

function Home(props) {

  const [selected, setSelected] = useState('newest');

  function selectTypeOfTrending(type){
    // do something

    setSelected(type);
  }

  return (
    <div className='home'>
      <div className='home-box' id='categories'>
        <div className='home-box-title'>
          <AppstoreOutlined className='home-box-title-icon'/>
          <span className='home-box-title-name'>Danh mục sản phẩm</span>
        </div>
        <div className='home-separate-line'></div>
        <div className='home-categories-content'>
          {
            homeCategoriesList.map((item, i) => {
              return(
                <a key={i} className='home-categories-content-item' href='/'>
                  <img src={item.img} alt={item.name}/>
                  <span>{item.name}</span>
                </a>
              )
            })
          }
        </div>
      </div>

      <div className='home-box' id='trending'>
        <div className='home-box-title'>
          <RiseOutlined className='home-box-title-icon'/>
          <span className='home-box-title-name'>Xu hướng mua sắm</span>
          <div className='home-box-title-trending'>
            <span 
              className={'home-box-title-trending-order'+(selected === 'newest' ? ' active' : '')} 
              onClick={()=>selectTypeOfTrending('newest')}
            >
              Mới nhất
            </span>
            <span 
              className={'home-box-title-trending-order'+(selected === 'best-sellers' ? ' active' : '')} 
              onClick={()=>selectTypeOfTrending('best-sellers')}
            >
              Bán chạy nhất
            </span>
            <span 
              className={'home-box-title-trending-order'+(selected === 'most-views' ? ' active' : '')} 
              onClick={()=>selectTypeOfTrending('most-views')}
            >
              Nhiều lượt xem nhất
            </span>
          </div>
        </div>
        <div className='home-separate-line'></div>
        <div className='home-trending-content'>
          <div className='mnlt-content-list'>
            {exampleTitles.map((e, i) => {
              return (
                <div className='mnlt-content-list-wrap' key={i}>
                  <></>
                  <TitleItem
                    img={e.img}
                    name={e.name}
                    price={e.price}
                    sold={e.sold}
                  />
                  <></>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home