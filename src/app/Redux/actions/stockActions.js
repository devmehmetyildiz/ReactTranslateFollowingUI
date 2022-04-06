export const ActionTypes = {
    SET_STOCKS : "SET_STOCKS",
    SELECTED_STOCKS : "SELECTED_STOCKS",
    REMOVE_SELECTED_STOCKS : "REMOVE_SELECTED_STOCKS",
}

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