import { combineReducers } from "@reduxjs/toolkit";
import { stockReducer, selectedStockReducer } from "./stockReducer";
import {loginReducer} from "./loginReducer";

const reducers = combineReducers({
    allStocks: stockReducer,
    stock: selectedStockReducer,
    user : loginReducer
});

export default reducers;