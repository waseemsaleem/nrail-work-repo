/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
import MainMenu from './MainMenu'

const MainHeader = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          <img src={logo} width='50' alt='website logo' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
          </ul>
          <div className='ml-auto'>
            <MainMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainHeader
