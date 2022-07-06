const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usuariosGet = (req, res) => {
  const { api_key, nombre } = req.query;

  res.json({ msg: "Petición GET" });
  api_key, nombre;
};

const usuariosPost = async (req, res) => {
  //verificar si el correo es valido
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { nombre, email, password, role } = req.body;
  const usuario = new Usuario({ nombre, email, password, role });

  //validar si el mail existe
  const existeEmail = await Usuario.findOne({ email });
  if (existeEmail) {
    return res.status(400).json({
      msg: "El correo ingresado ya existe",
    });
  }

  //encriptar contraseña

  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  await usuario.save();
  res.status(201).json({ msg: "Petición POST" });
  usuario;
};

const usuariosPut = (req, res) => {
  const { id } = req.params;

  res.json({ msg: "Petición PUT" });
  id;
};

const usuariosDelete = (req, res) => {
  res.json({ msg: "Petición DELETE" });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
