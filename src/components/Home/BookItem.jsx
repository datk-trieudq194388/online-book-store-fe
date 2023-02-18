import './bookItem.css'

function BookItem(props) {
  const name = props.name;
  const price = props.price;
  const trimmedName = name?.length > 36 ? name.split(0, 36)+'...' : name;
  const formattedPrice = new Intl.NumberFormat("de-DE").format(price)


  return (
    <div className='book-item'>
      <a className='book-item-img'>
        <img
          src={props.img}
          alt={props.name}
        />
      </a>
      <a className='book-item-name'>
        {trimmedName}
      </a>
      <div className='book-item-info'>
        <span className='book-item-info-price'>{formattedPrice}đ</span>
        <span className='book-item-info-sold'>Đã bán {props.sold}</span>
      </div>
    </div>
  )
}

export default BookItem