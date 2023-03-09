import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import './searchingListTitle.css'
import SearchingTitleItem from './SearchingTitleItem'
import { SERVER_ADDR } from '../../configs/serverAddr';
import { exampleTitles } from '../../configs/config';

function SearchingListTitle(props) {
  const navigate = useNavigate();
  const [ titleID, setTitleID ] = useState(0);
  const [ titleList, setTitleList ] = useState(null)

  useEffect(() => {
    // console.log(`${SERVER_ADDR}/library_be/index.php?controller=titletitle&sortBy=trend&sortD=2&pageSize=12&page=1`);

    const fetchData = async () => {
      var data;

      if (props.type === 0) {
        data = await fetch(`${SERVER_ADDR}/library_be/index.php?controller=titletitle&sortBy=trend&sortD=2&pageSize=12&page=1`)
      } 
      else data = await fetch(`${SERVER_ADDR}/library_be/index.php?controller=titletitle&sortBy=titletitleid&sortD=2&pageSize=12&page=1`)

      const res = await data.json();
      setTitleList(res.data);
      // console.log(res);
    }

    fetchData();
  }, [props.type])

  const handleMore = () => {
    navigate(`/type=${props.type}`);
  }

  const handleSeeDetail = (e) => {
    document.getElementById('detail').classList.remove('hidden');
    setTitleID(e.currentTarget.attributes.titleid.nodeValue);
  }

  if (exampleTitles) return (
      <div className='slt-content-list'>
        {exampleTitles.map((e, index) => {
          return (
            <div className='slt-content-list-wrap' key={index}>
              <></>
              <SearchingTitleItem
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
  )
  else return(<></>)
}

export default SearchingListTitle