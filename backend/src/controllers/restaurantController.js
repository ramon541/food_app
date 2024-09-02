const restaurantModel = require("../models/restaurantModel");

//================================================================
const getRestaurants = async (request, response) => {
  console.log("CHAMOU A ROTA: /restaurantes");

  const restaurantes = await restaurantModel.getRestaurants();

  console.log("RES:", restaurantes);
  return response.status(200).json(restaurantes);
};

//================================================================

//------------- Exports -------------
module.exports = {
  getRestaurants,
};
