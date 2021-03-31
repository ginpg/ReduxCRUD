import React, { Fragment, useEffect} from 'react';

import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction} from '../actions/productosAction';

const Productos = () => {

     const dispatch = useDispatch();

    useEffect( () => {
        //Consultar api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
    }, []); 
    
    return (
        <Fragment>

            <h2 className="text-center my-5"> Listado de Productos </h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col"> Nombre </th>
                        <th scope="col"> Precio </th>
                        <th scope="col"> Acciones </th>
                    </tr>
        
                </thead>
            </table>

            <tbody>

            </tbody>
        </Fragment>
     );
}
 
export default Productos;