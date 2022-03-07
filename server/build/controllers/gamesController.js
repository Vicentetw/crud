"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = database_1.default.query('SELECT * from games');
            res.json(games);
            res.json({ text: 'leyendo juego huijaaaa!' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const game = database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            console.log(game);
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO games set ?', [req.body]);
        res.json({ text: 'the game is saved, huija!!!' });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text: 'borrando juego nro.: ' + req.params.id +  ' huijaaaa!'})
            const { id } = req.params;
            database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'eliminado el juego ' + id });
            //}
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'actualizando juego ' + req.params.id});
            const { id } = req.params;
            database_1.default.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'actualizado el juego ' + id });
        });
    }
}
//ahora exporto el controlador instanciado
const gamesController = new GamesController();
exports.default = gamesController;
