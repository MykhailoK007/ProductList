import {createStore} from "redux";
import ProductReducer from "./reducer";

let store = createStore(ProductReducer);

export default store;
