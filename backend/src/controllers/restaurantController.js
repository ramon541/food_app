const restaurantModel = require("../models/restaurantModel");

//================================================================
const getRestaurants = async (request, response) => {
  console.log("CHAMOU A ROTA: /restaurantes");

  const restaurantes = await restaurantModel.getRestaurants();

  console.log("RES:", restaurantes);
  return response.status(200).json(restaurantes);
};

//================================================================
const getCardapio = async (request, response) => {
  console.log("CHAMOU A ROTA: /restaurantes/cardapio/:id");
  if (!request.params.id) {
    return response.status(400).json({ message: "Invalid data" });
  }

  const cardapio = await restaurantModel.getCardapio(request.params.id);
  console.log(cardapio);
  return response.status(200).json(cardapio);
};

//================================================================

//------------- Exports -------------
module.exports = {
  getRestaurants,
  getCardapio,
};
