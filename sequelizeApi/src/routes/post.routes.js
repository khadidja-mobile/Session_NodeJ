const controller = require("../controllers/post.controller");

module.exports = function (app) {

    app.get("/api/users/:userId/posts", controller.getAllPostsOfUser); // http://localhost:8080/api/users/1/posts
    app.post("/api/users/:userId/posts", controller.createPostByUser); // http://localhost:8080/api/users/1/posts
    app.put("/api/users/:userId/posts/:postId", controller.updatePostByUser); // http://localhost:8080/api/users/1/posts/1
    app.delete("/api/users/:userId/posts/:postId", controller.deletePostByUser); // http://localhost:8080/api/users/1/posts/1
    app.get("/api/users/:userId/posts/:postId", controller.getOnePostByUser); // http://localhost:8080/api/users/1/posts/1

}