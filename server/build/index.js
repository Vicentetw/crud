"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    //express también devuelve un objeto y lo alojo en un propiedad de la clase app y la defino como Application 
    // app es public para poder utilizarla en otras partes
    constructor() {
        this.app = (0, express_1.default)();
        //configuraciòn para que ejecute mis mètodos de abajo
        this.config();
        this.routes();
    }
    // config es un mètodo para configurar la propiedad app si no encuentra port utiliza el puerto 3000
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    //el método routes me sirve para configurar las rutas de mis servidores
    routes() {
    }
    //el método start es para inicializar el servidor ejecuta el listen
    start() {
        this.app.listen(this.app.get('port'), () => {
            //muestro pro consola el puerto del servidor activo
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
//guardo el objeto en una constante server y la inicializo con el mètodo start configurado anteriormente
const server = new Server();
server.start();
