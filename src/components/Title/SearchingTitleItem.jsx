import './searchingTitleItem.css'

function SearchingTitleItem(props) {
  const name = props.name;
  const price = props.price;
  const trimmedName = name?.length > 36 ? name.split(0, 36)+'...' : name;
  const formattedPrice = new Intl.NumberFormat("de-DE").format(price)


  return (
    <div className='searching-title-item'>
      <a className='searching-title-item-img'>
        <img
          src={props.img}
          alt={props.name}
        />
      </a>
      <a className='searching-title-item-name'>
        {trimmedName}
      </a>
      <div className='searching-title-item-info'>
        <span className='searching-title-item-info-price'>{formattedPrice}đ</span>
        <span className='searching-title-item-info-sold'>Đã bán {props.sold}</span>
      </div>
    </div>
  )
}

export default SearchingTitleItem