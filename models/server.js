const { json } = require("express");
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.routes();
    this.middlewares();
    this.usuariosPath = "/api/usuarios";
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server online port:", this.port);
    });
  }
}

module.exports = Server;
