import { combineReducers, createStore } from "redux";
import { userReducer } from "../redux/user.reducer";
import { productReducer } from "../redux/product.reducer";

const rootReducers = combineReducers({
  user: userReducer,
  product: productReducer,
});

export const store = createStore(rootReducers);

/*
state = {
  user: {
    user: null,
    access_token: '',
    unread_message: 0
  },
  product: {
    products: []
  },
}

const storeReducer = (state = state, action: { type: string, payload: any }) => {
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


*/

/*
get state in store
const user = useSelector(state => state.user.user)

dispatch action creator to update state (reducer) in store
useDispatch()
*/