const url = require("../../config/db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.url = url;
db.mongoose = mongoose;
db.posts = require("../models/post.model")(mongoose);

module.exports = db;
