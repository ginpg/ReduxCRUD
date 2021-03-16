// Encargado de todos los estados de la app
// Al inicio se le pasa un state y una accion, if not, se pasa un state desde los reducers
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),       //applyMiddleware se requiere por los thunks, sino no
        typeof window == 'object' && 
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefinned' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() //para usar devtools
                : f => f
                // Para que funcione cuando tiene redux tool y cuando no tambien
    )
);

export default store;