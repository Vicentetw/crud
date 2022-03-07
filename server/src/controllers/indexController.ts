import {Request, Response} from 'express';

class IndexController {

public index (req: Request, res: Response) {
    res.json({text:'API is /api/games'});
}
}
//ahora exporto el controlador instanciado
export const indexController =new IndexController();
// copio todo para usar en gamesControler
