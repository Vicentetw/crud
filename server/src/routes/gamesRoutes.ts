import { Router } from "express"; //iporto método Router desde express
//que devuelve un objeto donde voy a guardar las rutas
import gamesController from "../controllers/gamesController";

class GamesRoutes {
    //creo propiedad router del tipo Router y lo inicializo con = Router()
    public router: Router = Router();

    //creo un constructor para que se ejecute coando cree un nuevo objeto con new indexRoutes()
    constructor(){

        //al ejecutar config agrego al enrutaror la ruta del mètodo config()
     this.config();
    }

    //creo un mètodo router para inicializar mis rutas con la propiedad router
    config(): void{
        //a travez del método get defino una ruta inicial, tomo el reques response y devuelvo mensane HELLO
        //para utilizar el entutador voy a index.ts y lo pongo en el mètodo routes()
        this.router.get('/',gamesController.list);
        this.router.get('/:id',gamesController.getOne);
        this.router.post('/',gamesController.create);
        this.router.put('/:id',gamesController.update);
        this.router.delete('/:id',gamesController.delete);
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
