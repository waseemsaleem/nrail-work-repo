/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import IProduct from './IProduct'

interface IProductCard {
  product: IProduct
  addToCart: (product: IProduct, count: number) => void
}

const ProductCard = (props: IProductCard) => {
  const [count, setCount] = React.useState(1)
  const [product, setProduct] = React.useState(props.product)
  const [totalItems, setTotalItems] = React.useState(0)

  const increamentCount = () => {
    if (count !== totalItems) {
      setCount(count + 1)
      const newProduct = { ...product }
      newProduct.stock = newProduct.stock - 1
      setProduct(newProduct)
    }
  }

  const decreamentCount = () => {
    if (count > 1) {
      setCount(count - 1)
      const newProduct = { ...product }
      newProduct.stock = newProduct.stock + 1
      setProduct(newProduct)
    }
  }

  useEffect(() => {
    setProduct(props.product)
    setTotalItems(props.product.stock)
  }, [props.product])

  const addToCart = () => {
    if (product.stock !== 0) {
      setCount(1)
      props.addToCart(props.product, count)
    }
  }

  return (
    <div className='card shadow-sm'>
      <div>
        <img src={product.imageUrl} className='card-img-top' alt='product' />
      </div>
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <h5 className='card-title mb-0'>{product.name}</h5>
          <p className='card-text'>
            <span className='currency'>&#x24;</span>
            {product.price}
          </p>
        </div>
        <p className='card-text small'>{product.description}</p>
        <div className='d-flex align-items-center mb-3'>
          <p className='mb-0 small'>
            <span className={totalItems === 0 ? 'text-danger' : 'text-primary'}>
              {totalItems === 0 ? 'out of stock' : 'in stock'}
            </span>
            : {totalItems}
          </p>
          <div className='add-to-cart-buttons ms-3'>
            <div className='product-quantity-btns'>
              <button
                className='btn btn-dark btn-sm decrementCountBtn'
                disabled={count > 1 ? false : true}
                onClick={decreamentCount}
              >
                <i className='bi bi-dash'></i>
              </button>
              <span className='product-count mx-2'>{count}</span>
              <button
                className='btn btn-dark btn-sm incrementCountBtn'
                disabled={
                  count === totalItems || totalItems === 0 ? true : false
                }
                onClick={increamentCount}
              >
                <i className='bi bi-plus'></i>
              </button>
            </div>
          </div>
        </div>

        <button
          className='btn btn-primary w-100 addToCartBtn'
          onClick={addToCart}
          disabled={totalItems === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
