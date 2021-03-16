import {  
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types";

// cada reducer tiene su propio state
// son switch

const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){

    console.log(state)
    switch (action.type) {
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state, 
                error: false,
                loading:false
            }

        case AGREGAR_PRODUCTO:
            return{...state,
                error: false,
                loading:action.payload}

        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: action.payload,
                error: false,
                loading: false
            }



        default:
            return state;
    }
}