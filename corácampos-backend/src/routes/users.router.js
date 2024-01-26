const express = require("express");
const {
  getUsers,
  postUsers,
  putUsers,
  getUsersById,
  getUsersByEmail,
  getUsersByStatus,
} = require("../controllers/users.controller");
const { check } = require("express-validator");

const router = express.Router();

router.get("/", getUsers);

router.post(
  "/",
  [
    check("email", "El email del usuario es obligatorio").isEmail(),
    check("username", "El username del usuario es obligatorio").isLength(3),
  ],
  postUsers
);

router.put(
  "/",
  [
    check("email", "El email del usuario es obligatorio").isEmail(),
    check("username", "El username del usuario es obligatorio").isLength(3),
  ],
  putUsers
);

router.get(
  "/:id",
  [check("id", "El id del usuario es obligatorio").isLength(2)],
  getUsersById
);

router.get(
  "/email/:email",
  [check("email", "El email del usuario es obligatorio").isEmail()],
  getUsersByEmail
);

router.get(
  "/email/:username",
  [check("username", "El username del usuario es obligatorio").isLength(3)],
  getUsersByEmail
);

router.get(
  "/status/:status",
  [check("status", "El status del usuario es obligatorio").isBoolean()],
  getUsersByStatus
);

module.exports = router;
