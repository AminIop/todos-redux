import { combineReducers } from "redux";
import todos from "./todos";
import StoreTypes from "../constants/store-types";

export default combineReducers({
    [StoreTypes.Todos]: todos
})