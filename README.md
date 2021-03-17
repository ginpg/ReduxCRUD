Para correr el fake local server:
npm install -g json-server -> json-server db.json --port 4000

#Action
Cada Action es como un distribuidor/llamador/cambiador de estado que envia al Reducer y el Reducer muestra y hace dependiendo del estado

i.e.:
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

1. Registrarlo en el type



Current problem: COMENZAR_DESCARGA_PRODUCTOS se pone fantasmagoricamente mientras se ignora por completo DESCARGA_PRODUCTO_EXITO