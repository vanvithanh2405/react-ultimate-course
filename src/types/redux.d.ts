export interface IStateUser {
  user: null,
  access_token: string,
  unread_message: number
}

export interface IProductItem {
  id: number,
  name: string
}

export interface IStateProduct {
  products: IProductItem[]
}

export interface IRootState {
  user: IStateUser,
  product: IStateProduct,
}