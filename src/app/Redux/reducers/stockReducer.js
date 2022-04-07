import { ActionTypes } from "../constant/action-type"

const initialState = {
    stocks: [],
}

export const stockReducer = (state = initialState, {type,payload}) => {

    switch (type) {
        case ActionTypes.SET_STOCKS:
          
            return {...state,stocks:payload};
        default:
            return state;
    }
}

export const selectedStockReducer = (state = {}, { type, payload }) => {   
    switch (type) {
      case ActionTypes.SELECTED_STOCKS:
        return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_STOCKS:
        return { };      
      default:
        return state;
    }
  };