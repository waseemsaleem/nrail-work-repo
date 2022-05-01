import IProduct from '../../components/IProduct'

export function addToCart(item: IProduct) {
  return {
    type: 'ADD_ITEMS',
    payload: item,
  }
}

export function updateStock(items: IProduct) {
  return {
    type: 'UPDATE_STOCK',
    payload: items,
  }
}
