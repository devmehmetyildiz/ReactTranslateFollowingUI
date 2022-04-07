import { ActionTypes } from "../constant/action-type"

export const setStocks = (stocks) => {
    return {
        type : ActionTypes.SET_STOCKS,
        payload : stocks,
    };
};

export const selectedStock = (stock) => {
    return {
        type : ActionTypes.SELECTED_STOCKS,
        payload : stock,
    };
};

export const removeselectedStock = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_STOCKS        
    };
};