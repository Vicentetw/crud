import express, {Application} from 'express';
//importo los dos archivos ts que he creado en la carpeta routes cuando queda subrayado en rojo es que el archivo està vacìo
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

    public app: Application; 
//express también devuelve un objeto y lo alojo en un propiedad de la clase app y la defino como Application 
// app es public para poder utilizarla en otras partes
    constructor(){
        
        this.app = express();
        //configuraciòn para que ejecute mis mètodos de abajo
        this.config();
        this.routes();
    }

// config es un mètodo para configurar la propiedad app si no encuentra port utiliza el puerto 3000
    config():void{
        this.app.set('port', process.env.PORT || 3000);
    }

//el método routes me sirve para configurar las rutas de mis servidores
//this.app.use(indexRoutes); por defecto va a http://localhost:3000/
// para definir otra ruta pongo this.app.use('/api/games',gamesRoutes); sería localhost:3000/api/games/
    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/games',gamesRoutes);
    }

//el método start es para inicializar el servidor ejecuta el listen
    start(){
        this.app.listen(this.app.get('port'),() =>{
            //muestro pro consola el puerto del servidor activo
            console.log('Server on port ', this.app.get('port'));
        });
    }

}
//guardo el objeto en una constante server y la inicializo con el mètodo start configurado anteriormente
const server = new Server();
server.start();