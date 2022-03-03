"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //iporto método Router desde express
//que devuelve un objeto donde voy a guardar las rutas
class GamesRoutes {
    //creo un constructor para que se ejecute coando cree un nuevo objeto con new indexRoutes()
    constructor() {
        //creo propiedad router del tipo Router y lo inicializo con = Router()
        this.router = (0, express_1.Router)();
        //al ejecutar config agrego al enrutaror la ruta del mètodo config()
        this.config();
    }
    //creo un mètodo router para inicializar mis rutas con la propiedad router
    config() {
        //a travez del método get defino una ruta inicial, tomo el reques response y devuelvo mensane HELLO
        //para utilizar el entutador voy a index.ts y lo pongo en el mètodo routes()
        this.router.get('/', (req, res) => res.send('Hello gamesRoutes.ts'));
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
