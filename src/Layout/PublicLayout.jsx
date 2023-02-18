import NavBar from '../components/NavBar/NavBar'
import './layout.css'

function PublicLayout(props) {
  return (
    <div className='public-layout' >
      {/* <div style={{ background: 'none', height: '100%', minWidth:'940px' }}> */}
        <div className='header'>
          <NavBar/>
        </div>
        <div className='content'>
          {/* <div className='content'> */}
            {props.children}
          {/* </div> */}
        </div>
        <div className='footer'>
          This is footer
        </div>
      {/* </div> */}
    </div>
  )
}

export default PublicLayout