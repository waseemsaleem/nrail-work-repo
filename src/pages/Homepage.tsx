import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import productsList from '../components/products.json'
import { addToCart, updateStock } from '../redux/actions/index'
import { useDispatch, connect } from 'react-redux'
import IProduct from '../components/IProduct'

const Home = (props: any) => {
  const [products, setProducts] = React.useState(productsList as IProduct[])
  const dispatch = useDispatch()

  const addItemToCart = (product: IProduct, count: number) => {
    const newProduct = { ...product }
    newProduct.stock = newProduct.stock - count
    setProducts(
      products.map((p: IProduct) => (p.id === product.id ? newProduct : p))
    )
    const payload = {
      ...product,
      quantity: count,
    }
    dispatch(addToCart(payload))
    dispatch(updateStock(payload))
  }

  useEffect(() => {
    setProducts(props.CartReducer.products)
  }, [props.CartReducer.products])
  return (
    <div className='App bg-light'>
      <div className='row w-100'>
        {products.map((product: IProduct) => (
          <div className='col-md-3 mt-4' key={product.id}>
            <ProductCard product={product} addToCart={addItemToCart} />
          </div>
        ))}
      </div>
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    CartReducer: state.rootReducer.reducer,
  }
}

export default connect(mapStateToProps)(Home)
