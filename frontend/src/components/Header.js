import './Header.css'
// import avatar from '../../assets/avatar.svg'
import { useSelector } from 'react-redux'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </div>
      <p>Indian Institute of Information Technology</p>
      <div className='navbar__right'>
        <span className='loggedinas'>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
