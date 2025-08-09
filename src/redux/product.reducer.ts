const initialState = {
  products: [],
}

export const productReducer = (state = initialState, action: { type: string, payload: any }) => {
  console.log('productReducer: ', state, action)
  
  switch (action.type) {
    case 'PRODUCT/FETCH_PRODUCT': {
      return {
        ...state,
        products: action.payload
      }
    }
    default:
      return state;
  }
}