import { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  RiseOutlined
} from '@ant-design/icons'
import './home.css'
import TitleItem from '../../components/Title/TitleItem';
import { homeCategoriesList, exampleTitles } from '../../configs/config';
import { ViewType } from '../../configs/global';
import { getUserTitle } from '../../api/TitleAPI';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(ViewType.NEWEST);
  const [titles, setTitles] = useState([])

  useEffect(() => {
    async function fetchData() {
     
      const res = await getUserTitle(selected);
    
      if (!res.ok)
        alert('Gửi yêu cầu thất bại, hãy thử lại!')
      else setTitles(res.data)
  }

  fetchData();

  }, [])

  async function selectTypeOfTrending(type){

    const res = await getUserTitle(type);
    
    if (!res.ok)
      alert('Gửi yêu cầu thất bại, hãy thử lại!')
    else setTitles(res.data)
    

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
              className={'home-box-title-trending-order'+(selected === ViewType.NEWEST ? ' active' : '')} 
              onClick={()=>selectTypeOfTrending(ViewType.NEWEST)}
            >
              Mới nhất
            </span>
            <span 
              className={'home-box-title-trending-order'+(selected === ViewType.BEST_SELLERS ? ' active' : '')} 
              onClick={()=>selectTypeOfTrending(ViewType.BEST_SELLERS)}
            >
              Bán chạy nhất
            </span>
            <span 
              className={'home-box-title-trending-order'+(selected === ViewType.MOST_VIEWS ? ' active' : '')} 
              onClick={()=>selectTypeOfTrending(ViewType.MOST_VIEWS)}
            >
              Nhiều lượt xem nhất
            </span>
          </div>
        </div>
        <div className='home-separate-line'></div>
        <div className='home-trending-content'>
          <div className='mnlt-content-list'>
            {titles.map((e, i) => {
              return (
                <div className='mnlt-content-list-wrap' key={i}>
                  <></>
                  <TitleItem title={e} />
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