import {  
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    //COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
    } from "../types";

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


// Son las actiones que se muestran en la vista

//Crear nuevos productos
export function crearNuevoProductoAction(productos){
    return async (dispatch) => {
        dispatch(agregarProducto());
        console.log(productos)

        try {
            await clienteAxios.post('/productos', productos);
            dispatch( agregarProductoExito(productos))
            Swal.fire('Correcto','El producto se agregó correctamente')
        } catch (error) {
            console.log(error);
            dispatch( agregarProductoError(true))
            Swal.fire({icon:'error', title:'Hubo un error', text: 'Hubo un error, intente de nuevo'})
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

export function obtenerProductosAction() {
    return async (dispatch) => {
        //dispatch( descargarProductos() );
        const respuesta = await clienteAxios.get('/productos');
        dispatch( descargaProductosExitosa(respuesta.data) )

/*         try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargaProductosExitosa(respuesta.data) )
        } catch (error) {
            console.log(error);
            dispatch( descargaProductosError() )
        } */
    }
}

/* const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
}); */

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    error: null,
    loading: false,
    payload: true //productos

})
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR, 
    payload: true
});