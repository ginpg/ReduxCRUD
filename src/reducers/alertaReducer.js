import{
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

const initialState = {
    alerta: null
}

export default function( state = initialState, action){
    switch(action.type){
        default:
            case MOSTRAR_ALERTA:
                return{
                    ...state,
                    alerta: action.payload
                }

            case OCULTAR_ALERTA:
                return{
                    ...state,
                    alerta: null
                }
            return state;
    }
}