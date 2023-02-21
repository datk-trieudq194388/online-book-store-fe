import NavBar from '../components/NavBar/NavBar'
import './layout.css'

function PublicLayout(props) {
  return (
    <div className='public-layout' >
        <div className='header'>
          <NavBar/>
        </div>
        <div className='content'>
          {props.children}
        </div>
        <div className='footer'>
          This is footer
        </div>
    </div>
  )
}

export default PublicLayout