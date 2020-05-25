const express = require("express");
const routes = express.Router();


const ProdutoController = require("./controllers/produtoController");


routes.get("/produtos", ProdutoController.index);

routes.post("/produtos", ProdutoController.store);

routes.put("/produtos/:id", ProdutoController.update);

routes.delete("/produtos/:id", ProdutoController.destroy);

module.exports = routes;