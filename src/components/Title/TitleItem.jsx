import './titleItem.css'

function TitleItem(props) {
  const name = props.title.name;
  const price = props.title.price;
  const trimmedName = name?.length > 36 ? name.split(0, 36)+'...' : name;
  const formattedPrice = new Intl.NumberFormat("de-DE").format(price)


  return (
    <div className='title-item'>
      <a className='title-item-img' href={'/title/' + props.title.slug}>
        <img
          src={props.title.image}
          alt={trimmedName}
        />
      </a>
      <a className='title-item-name' href={'/title/' + props.title.slug}>
        {trimmedName}
      </a>
      <div className='title-item-info'>
        <span className='title-item-info-price'>{formattedPrice}đ</span>
        <span className='title-item-info-sold'>Đã bán {props.title.sold}</span>
      </div>
    </div>
  )
}

export default TitleItem