const express = require("express");

const router = express.Router();

const userController = require("./controllers/userController");
const restaurantController = require("./controllers/restaurantController");

router.post("/login", userController.login);
router.post("/cadastrar", userController.cadastrar);
router.get("/restaurantes", restaurantController.getRestaurants);

module.exports = router;
