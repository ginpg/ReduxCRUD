//Cada reducer tiene su propio state | Switch
//Son los cambiadores de state

import {  
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
    } from "../types";


const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){

    console.log(state)
    switch (action.type) {

        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO: 
            return {
                ...state,
                loading: action.payload
            }

        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: false,
                productos: action.payload
            }

        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }

        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}