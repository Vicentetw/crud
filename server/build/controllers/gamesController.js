"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    index(req, res) {
        database_1.default.query('DESCRIBE games');
        res.json('Hello gamesController');
    }
    create(req, res) {
        res.json({ text: 'creating a game' });
    }
}
//ahora exporto el controlador instanciado
const gamesController = new GamesController();
exports.default = gamesController;
//esto lo copiè de IndexController pero no exporto la clase 
//sólo la intanciaciòn que es otra
