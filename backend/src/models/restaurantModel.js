const connection = require("./connection");

//================================================================
const getRestaurants = async () => {
  const query = `
    SELECT * FROM RESTAURANTES;
  `;
  const returnedRestaurants = await connection.execute(query);

  return returnedRestaurants[0];
};

//================================================================

//------------- Exports -------------
module.exports = {
  getRestaurants,
};
