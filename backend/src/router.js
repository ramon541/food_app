const express = require("express");

const router = express.Router();

const userController = require("./controllers/userController");

router.post("/login", userController.login);
router.post("/cadastrar", userController.cadastrar);

module.exports = router;
