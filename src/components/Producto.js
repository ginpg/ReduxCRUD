import { React } from "react";
import { Link, useHistory } from "react-router-dom"

import { useDispatch } from "react-redux";
import { borrarProductoAction, obtenerProductoEditarAction } from "../actions/productosAction";

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto;
    const dispatch = useDispatch();
    const history = useHistory();

    //Confirmar
    const confirmarEliminarProducto = id => {

        //preguntar
        //pasarlo al action
        dispatch(borrarProductoAction(id));
    }

    //redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch( obtenerProductoEditarAction(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio} </span></td>
            <td className="acciones">
                
                <button   
                        type = "button"
                        onClick={() => redireccionarEdicion(producto)}
                        className="btn btn-primary mr-2">
                        Editar
                </button>

                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                    >Eliminar 
                </button>
            </td>
        </tr>
     );
}
 
export default Producto;