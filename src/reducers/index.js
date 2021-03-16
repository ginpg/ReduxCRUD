// Cada reducer es como una pieza de la aplicacion (cliente, producto,...) y posee un state

import  {combineReducers}  from "redux";
import  productosReducer  from "./productosReducer";

export default combineReducers({
    productos: productosReducer
});