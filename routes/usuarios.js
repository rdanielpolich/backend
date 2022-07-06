const { Router } = require("express");
const { check } = require("express-validator");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios");
const router = Router();
router.get("/", usuariosGet);
router.post(
  "/",
  [
    check("email", "El correo no es valido").isEmail(),
    check("nombre", "El nombre es obligatorio").notEmpty(),
  ],

  usuariosPost
);
router.put("/:id", usuariosPut);
router.delete("/:id", usuariosDelete);

module.exports = router;
