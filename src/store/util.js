import { applyMiddleware, createStore } from "redux";
import { middlewares } from ".";
import rootReducer from './reducers';

// برای تست ریداکس تانک میدلور مورد نظر را ایمپورت و اپلای میکنیم
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}

// export const storeFactory = (initialState) => {
//     return createStore(rootReducer, initialState);
// }