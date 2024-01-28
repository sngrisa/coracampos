const express = require("express");
const {
  getOwners,
  postOwner,
  deleteOwners,
  updateOwners,
} = require("../controllers/owners.controller");
const { check } = require("express-validator");

const router = express.Router();

router.get("", getOwners);

router.get(
  "/:id",
  [check("_id", "El id es obligatorio").isLength(3)],
  getOwners
);

router.post("", postOwner);

router.delete("/:id", deleteOwners);

router.put("/:id", updateOwners);

module.exports = router;
