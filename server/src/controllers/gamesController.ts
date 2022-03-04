import {Request, Response} from 'express';
import pool from '../database';

class GamesController {

public index (req: Request, res: Response) {
    pool.query('DESCRIBE games');
    res.json('Hello gamesController');
}
}
//ahora exporto el controlador instanciado
const gamesController =new GamesController();
export default gamesController;
//esto lo copiè de IndexController pero no exporto la clase 
//sólo la intanciaciòn que es otra