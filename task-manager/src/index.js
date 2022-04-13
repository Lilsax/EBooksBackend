const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");
const User = require("./models/user");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const multer = require("multer");

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      cb(new Error(" file must be pdf"));
    }
    cb(undefined, true);
    // cb(new Error(" file must be pdf"));
    // cb(undefined, true);
    // cb(undefined, false);
  },
});

const app = express();
const port = process.env.port || 3000;

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on port ", port);
});
