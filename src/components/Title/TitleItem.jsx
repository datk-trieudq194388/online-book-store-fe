import './titleItem.css'

function TitleItem(props) {
  const name = props.name;
  const price = props.price;
  const trimmedName = name?.length > 36 ? name.split(0, 36)+'...' : name;
  const formattedPrice = new Intl.NumberFormat("de-DE").format(price)


  return (
    <div className='title-item'>
      <a className='title-item-img'>
        <img
          src={props.img}
          alt={props.name}
        />
      </a>
      <a className='title-item-name'>
        {trimmedName}
      </a>
      <div className='title-item-info'>
        <span className='title-item-info-price'>{formattedPrice}đ</span>
        <span className='title-item-info-sold'>Đã bán {props.sold}</span>
      </div>
    </div>
  )
}

export default TitleItem