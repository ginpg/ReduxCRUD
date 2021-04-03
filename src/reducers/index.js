// Cada reducer es como una pieza de la aplicacion (cliente, producto,...) y posee un state

import  {combineReducers}  from "redux";
import  productosReducer  from "./productosReducer";
import alertaReducer from './alertaReducer'

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});