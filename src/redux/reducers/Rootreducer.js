import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer";

const Rootreducer = combineReducers({
    expenseReducer : expenseReducer
})

export default Rootreducer;