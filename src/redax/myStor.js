import { createStore, combineReducers } from "redux";
import { OrdersReducer } from "./OrdersReduser";
import { UsersReducer } from "./UsersReducer";



const reducers = combineReducers({
    OrdersReducer: OrdersReducer,
    UsersReducer: UsersReducer
})


export const ourStore = createStore(reducers);