export default interface IProduct {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
  stock: number
}

export interface ICartProduct extends IProduct {
  quantity: number
}
