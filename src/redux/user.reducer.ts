const initialState = {
  user: null,
  access_token: '',
  unread_message: 0
}

export const userReducer = (state = initialState, action: { type: string, payload: any }) => {
  console.log('userReducer: ', state, action)
  
  switch (action.type) {
    case 'USER/SET_USER': {
      return {
        ...state,
        user: action.payload
      }
    }
    case 'USER/SET_ACCESS_TOKEN': {
      return {
        ...state,
        access_token: action.payload
      }
    }
    default:
      return state;
  }
}