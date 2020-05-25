const express = require("express");
const routes = express.Router();

const PostController = require("./controllers/postController");

routes.get("/posts", PostController.index);

routes.post("/posts", PostController.store);

routes.delete("/posts/:id", PostController.destroy);

routes.put("/posts/:id", PostController.update);

module.exports = routes;
