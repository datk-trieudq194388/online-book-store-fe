import  { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  RiseOutlined
} from '@ant-design/icons'
import './commonPage.css'
import { homeCategoriesList } from '../../configs/config';

import MiniListBook from '../../components/Home/MiniListBook';

function Home(props) {

  const [selected, setSelected] = useState('newest');

  function selectTypeOfTrending(type){
    // do something

    setSelected(type);
  }


  const { type, param } = useParams();
  const [ filter, setFilter ] = useState({});
  // console.log(type);
  // console.log(param);

  const CheckFilterNumber = (num) => {
    console.log('abc');
    console.log(`num: ${num}`);
  }

  const CheckValidate = () => {
    let flag = true;

    let minPage = Number(document.getElementById('min-page').value);
    let maxPage = Number(document.getElementById('max-page').value);
    let warning = document.getElementById('ft-warning1');
    CheckFilterNumber(minPage);
    if (!Number.isInteger(minPage) || minPage < 0 || !Number.isInteger(maxPage) || maxPage < 0 || (minPage > maxPage && document.getElementById('max-page').value !== '')) {
      warning.classList.remove('hidden');
      flag = false;
    } 
    else {
      warning.classList.add('hidden');
      if (minPage === 0) minPage = '';
      if (maxPage === 0) maxPage = '';
    }

    console.log()
    let minYear = Number(document.getElementById('min-year').value);
    let maxYear = Number(document.getElementById('max-year').value);
    warning = document.getElementById('ft-warning2');
    if (!Number.isInteger(minYear) || !Number.isInteger(maxYear)) {
      warning.classList.remove('hidden');
      flag = false;
    } 
    else {
      if (minYear === 0) minYear = '';
      if (maxYear === 0) maxYear = '';
      warning.classList.add('hidden');
    }

    if (flag) setFilter({
      minPage,
      maxPage,
      minYear,
      maxYear,
      author: document.getElementById('author-input').value
    })
    return flag;
  }

  const handleFilter = async () => {
    // console.log(CheckValidate());
    CheckValidate();

    // console.log(filter);
    document.getElementById('filter-box').classList.add('close-filter');
  }

  if (!type || type === 'search' || type === 'type') {
    return (
      <div className='home'>
        <div className='home-box' key='categories'>
          <div className='home-box-title'>
            <AppstoreOutlined className='home-box-title-icon'/>
            <span className='home-box-title-name'>Danh mục sản phẩm</span>
          </div>
          <div className='home-separate-line'></div>
          <div className='home-categories-content'>
            {
              homeCategoriesList.map((item) => {
                return(
                  <a className='home-categories-content-item' href='/'>
                    <img src={item.img} alt={item.name}/>
                    <span>{item.name}</span>
                  </a>
                )
              })
            }
          </div>
        </div>

        <div className='home-box' key='trending'>
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
            <MiniListBook/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home