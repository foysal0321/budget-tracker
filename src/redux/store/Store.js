//import { composeWithDevTools } from "redux-devtools/extension";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Rootreducer from "../reducers/Rootreducer";

const { createStore, applyMiddleware } = require("redux");

const store = (createStore(  
    Rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
   
))


export default store

