import { combineReducers } from "@reduxjs/toolkit";
import { stockReducer, selectedStockReducer } from "./stockReducer";

const reducers = combineReducers({
    allStocks: stockReducer,
    stock: selectedStockReducer,
});

export default reducers;