// const { config } = require("dotenv");
// const express = require("express"); //importar algo
// const app = express();

// app.get("/", function (req, res) {
//   // res.json({msg:'Hello World',})
//   res.send("Hello world");
// });

// app.listen(process.env.PORT, () => {
//   console.log("server online port:", process.env.PORT);
// });

const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.listen();
