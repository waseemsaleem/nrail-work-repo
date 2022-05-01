/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MainMenu = (props: any) => {
  return (
    <ul className='navbar-nav'>
      <li className='nav-item me-3'>
        <NavLink
          className='nav-link position-relative '
          data-testid='add-to-cart'
          to='/cart'
        >
          <span className='me-2'> Go to Cart</span>
          <i className='bi bi-bag'></i>
          <span className='position-absolute cart-count-badge start-100 translate-middle p-2 badge bg-danger border border-light rounded-circle'>
            {props.CartReducer.items.length}
          </span>
        </NavLink>
      </li>
      <li className='nav-item dropdown ml-auto'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='navbarDropdown'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Account
        </a>
        <ul
          className='dropdown-menu dropdown-menu-end'
          aria-labelledby='navbarDropdown'
        >
          <li>
            <a className='dropdown-item' href='#'>
              Profile
            </a>
          </li>
          <li>
            <Link to={'/cart'} className='dropdown-item'>
              Checkout
            </Link>
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              My Orders
            </a>
          </li>
          <li>
            <hr className='dropdown-divider' />
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              Sign out
            </a>
          </li>
        </ul>
      </li>
    </ul>
  )
}

function mapStateToProps(state: any) {
  return {
    CartReducer: state.rootReducer.reducer,
  }
}

export default connect(mapStateToProps)(MainMenu)
