const posts = require("../controllers/post.controller");
const route = require("express").Router();

module.exports = (app) => {
  route.get("/", posts.findAll);
  route.post("/", posts.createPosts);
  route.get("/:id", posts.findPost);
  route.put("/:id", posts.updatePost);
  route.delete("/:id", posts.deletePost);
  app.use("/api/posts", route);
};
