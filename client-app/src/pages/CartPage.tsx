import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ICartProduct } from '../components/IProduct'

const CartPage = (props: any) => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='cart text-center mb-5'>Cart </h1>
      </div>
      <div className='col-md-7'>
        {props.CartReducer.items.map((product: ICartProduct, i: number) => (
          <div className='product mt-2 shadow-sm'>
            <div className='d-flex border' key={i}>
              <div className='d-flex align-items-center'>
                <img
                  className='cart-product-img'
                  src={product.imageUrl}
                  alt='product'
                />
              </div>
              <div className='p-4 w-100'>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h6>Price: ${product.price}</h6>
                <h6>Quantity: {product.quantity}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='col-md-5'>
        <div className='cart-summary p-4 border shadow-sm mt-2 '>
          <h4 className='pb-4 border-bottom mb-4'>
            My Shopping Cart
            <span className='text-secondary small ms-3'>
              ({props.CartReducer.items.length} items)
            </span>
          </h4>

          <div className='item pb-3 mb-3 border-bottom'>
            {props.CartReducer.items.length > 0 ? (
              props.CartReducer.items.map((product: any, i: number) => (
                <div
                  className='d-flex justify-content-between align-items-center mb-3'
                  key={i}
                >
                  <div className='d-flex align-items-baseline'>
                    <h5 className='mb-0 text-primary'>{product.name}</h5>
                    <h6 className='mb-0 ms-2 small text-start'>
                      ( {product.price}
                      <span className='text-secondary mx-1'>
                        <i className='bi bi-x'></i>
                      </span>
                      {product.quantity} )
                    </h6>
                  </div>
                  <p className='card-text text-success'>
                    <span className='currency'>&#x24;</span>
                    {product.price * product.quantity}
                  </p>
                </div>
              ))
            ) : (
              <h6 className='text-center py-5'>Your cart is empty</h6>
            )}
          </div>
          <div className='cart-summary-item pb-3 border-bottom'>
            <h5 className='mb-0'>Total</h5>
            <h5 className='mb-0'>
              <span className='currency'>&#x24;</span>
              {props.CartReducer.items.reduce(
                (acc: number, item: any) => acc + item.price * item.quantity,
                0
              )}
            </h5>
          </div>
          <div className='cart-summary-item mt-4'>
            <div className='w-100'>
              <Link
                to={'/'}
                className='btn btn-outline-primary w-100 mb-1 backToHomeBtn'
              >
                Back to Home
              </Link>
              <button className='btn btn-primary w-100 checkoutBtn'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    CartReducer: state.rootReducer.reducer,
  }
}

export default connect(mapStateToProps)(CartPage)
