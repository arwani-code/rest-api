const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!!!"))
  .catch((err) => {
    console.log("Connection database error!!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "This is a message",
  });
});

require("./app/routes/post.routes")(app);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
