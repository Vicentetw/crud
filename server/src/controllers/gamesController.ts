import {query, Request, Response, text} from 'express';
import pool from '../database';
class GamesController {

public async list (req: Request, res: Response) {
    const games = pool.query('SELECT * from games');
    res.json(games);
        
    res.json({text: 'leyendo juego huijaaaa!'})
               
}

public async getOne (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const game = pool.query('SELECT * FROM games WHERE id = ?', [id] );
        console.log(game);
      }
public create(req: Request,res: Response) {
     pool.query('INSERT INTO games set ?', [req.body]);
    res.json({text: 'the game is saved, huija!!!'});
}


public async delete (req: Request, res: Response): Promise<void> {
          // res.json({text: 'borrando juego nro.: ' + req.params.id +  ' huijaaaa!'})
        const { id } = req.params;
     pool.query('DELETE FROM games WHERE id = ?', [id] );
        res.json({message: 'eliminado el juego ' + id});
      //}
}
public async update (req: Request, res: Response): Promise<void>  {
    //res.json({text: 'actualizando juego ' + req.params.id});
    const { id } = req.params;
     pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
    res.json({message: 'actualizado el juego ' + id});
  }
}
//ahora exporto el controlador instanciado
const gamesController =new GamesController();
export default gamesController;
