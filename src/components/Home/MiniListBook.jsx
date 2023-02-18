import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import './miniListBook.css'
import BookItem from './BookItem'
// import BookDetail from './BookDetail';
import { SERVER_ADDR } from '../../configs/serverAddr';
import { exampleBooks } from '../../configs/config';

const typeList = [
  "Đang hot",
  "Mới ra mắt"
]

function MiniListBook(props) {
  const navigate = useNavigate();
  const [ bookID, setBookID ] = useState(0);
  const [ bookList, setBookList ] = useState(null)

  useEffect(() => {
    // console.log(`${SERVER_ADDR}/library_be/index.php?controller=booktitle&sortBy=trend&sortD=2&pageSize=12&page=1`);

    const fetchData = async () => {
      var data;

      if (props.type === 0) {
        data = await fetch(`${SERVER_ADDR}/library_be/index.php?controller=booktitle&sortBy=trend&sortD=2&pageSize=12&page=1`)
      } 
      else data = await fetch(`${SERVER_ADDR}/library_be/index.php?controller=booktitle&sortBy=booktitleid&sortD=2&pageSize=12&page=1`)

      const res = await data.json();
      setBookList(res.data);
      // console.log(res);
    }

    fetchData();
  }, [props.type])

  const handleMore = () => {
    navigate(`/type=${props.type}`);
  }

  const handleSeeDetail = (e) => {
    document.getElementById('detail').classList.remove('hidden');
    setBookID(e.currentTarget.attributes.bookid.nodeValue);
  }

  if (exampleBooks) return (
    // <div className="mnlb-wrap-list">
      <div className='mnlb-content-list'>
        {exampleBooks.map((e, index) => {
          return (
          // <div 
          //   key={index} 
          //   className='wrap-item' 
          //   onClick={handleSeeDetail} 
          //   bookid={e.booktitleid}
          // >
          <div className='mnlb-content-list-wrap'>
            <></>
            <BookItem
              img={e.img}
              name={e.name}
              price={e.price}
              sold={e.sold}
            />
            <></>
          </div>
          // </div>
          )
        }
        )}
      {/* </div> */}
      {/* <div id='detail' className='wrap-book-detail hidden'>
        <BookDetail bookID={bookID} />
      </div> */}
    </div>
  )
  else return(<></>)
}

export default MiniListBook