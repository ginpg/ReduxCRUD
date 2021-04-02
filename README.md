Fake local server:
> npm install -g json-server 
> json-server db.json --port 4000

        ACTION
Cada Action es como un distribuidor/llamador/cambiador de estado que envia al Reducer y el Reducer muestra y hace dependiendo del estado

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


> Saltado video 314
> UseDispatch es para usar los actions
> UseSelector para acceder al state fuera del reducer