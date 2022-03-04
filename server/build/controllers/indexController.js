"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'API is /api/games' });
    }
}
//ahora exporto el controlador instanciado
exports.indexController = new IndexController();
// copio todo para usar en gamesControler
