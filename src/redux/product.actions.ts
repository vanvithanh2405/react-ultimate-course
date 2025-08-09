import { IProductItem } from "../types/redux"

export const fetchProduct = (products: IProductItem[]) => {
  return {
    type: 'PRODUCT/FETCH_PRODUCT',
    payload: products
  }
}