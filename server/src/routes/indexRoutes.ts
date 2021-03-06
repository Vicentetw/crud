import { Router } from "express"; //iporto método Router desde express
//que devuelve un objeto donde voy a guardar las rutas
import {indexController} from '../controllers/indexController'; //con ".." subo un nivel

class IndexRoutes {
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
        this.router.get('/', indexController.index); //saco lo que estaba despuès de la "," y pego en indexControllers.ts (req, res) =>res.send('Hello')
    //cuando entro al directorio base va a indexController 
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
