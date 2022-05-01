import products from '../../components/products.json'
import IProduct, { ICartProduct } from '../../components/IProduct'
const initialState = {
  items: [],
  products: products,
}
interface IState {
  items: ICartProduct[]
  products: IProduct[]
}

const reducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      if (state.items.length === 0) {
        return {
          ...state,
          items: [...state.items, action.payload],
        }
      } else if (
        state.items.find((item: IProduct) => item.id === action.payload.id)
      ) {
        return {
          ...state,
          items: state.items.map((item: ICartProduct) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              }
            }
            return item
          }),
        }
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        }
      }
      break;
    case 'UPDATE_STOCK':
      return {
        ...state,
        products: state.products.map((product: IProduct) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              stock: product.stock - action.payload.quantity,
            }
          }
          return product
        }),
      }
      break;

    default:
      break;
  }
  return state
}

export default reducer
