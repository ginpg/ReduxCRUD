Para correr el fake local server:
npm install -g json-server -> json-server db.json --port 4000

#Action
Cada Action es como un distribuidor/llamador/cambiador de estado que envia al Reducer y el Reducer muestra y hace dependiendo del estado

i.e.:
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

        PASOS
1. Registrarlo en el types -> index
2. Import type en el action 
3. Hace un export funtion donde llamas a las funtions que les pasas argumento como payload
4. Import type en el reducer
5. Recibe el payload as action.payload



Current problem: COMENZAR_DESCARGA_PRODUCTOS se pone fantasmagoricamente mientras se ignora por completo DESCARGA_PRODUCTO_EXITO