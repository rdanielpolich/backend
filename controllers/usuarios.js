const usuariosGet = (req, res) => {
  const { api_key, nombre } = req.query;

  res.json({ msg: "Petición GET" });
  api_key, nombre;
};

const usuariosPost = (req, res) => {
  const body = req.body;
  res.json({ msg: "Petición POST" });
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
