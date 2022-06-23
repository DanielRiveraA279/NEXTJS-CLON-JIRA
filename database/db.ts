import mongoose from "mongoose";

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

//manera en la que funciona es conectarnos de la bd trabajar y desconectarnos nuevamente para cualquier otra peticion que se solicite

const mongooConnection = {
    isConnected: 0,
}

export const connect = async () => {

    if (mongooConnection.isConnected === 1) {
        console.log('Ya estabamos conectados');
        return;
    }

    if(mongoose.connections.length > 0) {
        mongooConnection.isConnected = mongoose.connections[0].readyState; //asignamos estado de la conexion
        
        if(mongooConnection.isConnected === 1) {
            console.log('Usando conexion anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongooConnection.isConnected = 1;
    console.log('Conectado a MongoDB', process.env.MONGO_URL);

}

export const disconnect = async() => {

    if (mongooConnection.isConnected === 0) return;
    
    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
}