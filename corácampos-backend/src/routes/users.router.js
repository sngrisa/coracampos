const express = require("express");
const { validateFields } = require("./../middlewares/validateFields");
const {
  getUsers,
  postUsers,
  putUsers,
  getUsersById,
  getUsersByEmail,
  getUsersByStatus,
  getUsersByUsername,
  deleteUsers,
} = require("../controllers/users.controller");
const { check } = require("express-validator");

const router = express.Router();

router.get("", getUsers);

router.post(
  "/",
  [
    check("email", "El email del usuario es obligatorio").isEmail(),
    check("username", "El username del usuario es obligatorio").isLength(3),
  ],
  validateFields,
  postUsers
);

router.put(
  "/",
  [
    check("_id", "El id es obligatorio").isLength(1),
    check("email", "El email del usuario es obligatorio").isEmail(),
    check("username", "El username del usuario es obligatorio").isLength(3),
  ],
  validateFields,
  putUsers
);

router.put(
  "/delete/:id",
  [
    check("_id", "El id es obligatorio").isLength(1),
    check("email", "El email del usuario es obligatorio").isEmail(),
    check("username", "El username del usuario es obligatorio").isLength(3),
  ],
  validateFields,
  deleteUsers
);

router.get(
  "/:id",
  [check("_id", "El id del usuario es obligatorio").isLength(1)],
  validateFields,
  getUsersById
);

router.get(
  "/username/:username",
  [check("email", "El email del usuario es obligatorio").isLength(5)],
  validateFields,
  getUsersByUsername
);

router.get(
  "/email/:email",
  [check("email", "El email del usuario es obligatorio").isEmail()],
  validateFields,
  getUsersByEmail
);

router.get(
  "/status/:status",
  [check("status", "El status del usuario es obligatorio").isBoolean()],
  validateFields,
  getUsersByStatus
);

module.exports = router;
