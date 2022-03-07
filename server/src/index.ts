import express, {Application} from 'express';
//importo los dos archivos ts que he creado en la carpeta routes cuando queda subrayado en rojo es que el archivo està vacìo
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
//2- ahora importo los módulos morgan (para ver peticiones GET PUT) y cors (ANGULAR PUED EPEDIR DATOS AL SERVIDOR), si  aparece en rojo instalo los mòdulos con npm i @types/morgan @types/cors
import morgan from 'morgan';
import cors from 'cors';

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
        this.app.use(morgan('dev'));
        this.app.use(cors());
        //ahora agrego desde express dos configuraciones para que el servidor entienda el formato json y otro por si se envìa httml
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.query);
    }

//el método routes me sirve para configurar las rutas de mis servidores
//this.app.use(indexRoutes); o this.app.use('/', indexRoutes); por defecto va a http://localhost:3000/
// para definir otra ruta pongo this.app.use('/api/games',gamesRoutes); sería localhost:3000/api/games/
    routes():void{
        this.app.use('/', indexRoutes);
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