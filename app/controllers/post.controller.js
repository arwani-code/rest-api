const db = require("../models/");
const Post = db.posts;

exports.findAll = (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some not value",
      });
    });
};

exports.createPosts = (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    published: req.body.published,
  });

  post
    .save(post)
    .then((data) => res.send(data))
    .catch((err) => res.send(`Some error a create`, err));
};

exports.findPost = (req, res) => {
  const id = req.params.id;

  Post.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.send("Request gagal!!"));
};

exports.updatePost = (req, res) => {
  const id = req.params.id;

  Post.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) res.status(404).send("Gagal mengubah data!");
      res.send("Data berhasil di ubah");
    })
    .catch((err) => res.status(409).send("some error while a updata post"));
};

exports.deletePost = (req, res) => {
  const id = req.params.id;

  console.log(id);

  Post.findByIdAndRemove(id)
    .then((data) => {
      if (!data) res.status(404).send("data tidak ditemukan");
      res.send("data berhasil di hapus");
    })
    .catch((err) => res.send("data di hapus error"));
};
