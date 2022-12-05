import './Sidebar.css'
import { useDispatch } from 'react-redux'

import { logout } from '../actions/studentLoginActions'
import { Link } from 'react-router-dom'
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    // console.log('hello')
    dispatch(logout())
  }
  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__img'>
      
        </div>
        <i
          onClick={() => closeSidebar()}
          className='fa fa-times'
          id='sidebarIcon'
          aria-hidden='true'
        ></i>
      </div>

      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i className='fa fa-home'></i>
          <Link className='linked' to='/Student'>
            Dashboard
          </Link>
        </div>
        <h2>Students Section</h2>
        <div className='sidebar__link'>
          <i className='fa fa-male' aria-hidden='true'></i>
          <Link className='linked' to='/Student/details'>
            My Details
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-coins'></i>
          <Link className='linked' to='/Student/edit'>
            Edit Details
          </Link>
        </div>
        
        <div className='sidebar__link'>
          <i className='fa fa-coins'></i>
          <Link className='linked' to='/Student/fees'>
            Fees
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fas fa-school'></i>
          <Link className='linked' to='/student-attendance/UG4'>
            Attendance
          </Link>
        </div>
        <div className='sidebar__logout'>
          <i className='fa fa-power-off'></i>
          <Link className='linked' onClick={logoutHandler} to='/login'>
            Log out
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
