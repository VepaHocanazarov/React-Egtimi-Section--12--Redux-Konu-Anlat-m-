import counterReducer from "./counter";
import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";

const allReducers=combineReducers(
    {
        counter : counterReducer,
        islogged : loggedReducer
    }
);

export default allReducers;