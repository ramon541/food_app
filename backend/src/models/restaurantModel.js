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
const getCardapio = async (id) => {
  const queryTiposDePrato = "SELECT * FROM tipodeprato";
  const tiposDePrato = await connection.execute(queryTiposDePrato);

  const cardapio = [];

  for (let tipo of tiposDePrato[0]) {
    const queryPratos = `
      SELECT
        cardapio.IDcardapio IDprato,
        cardapio.imagem imagemCardapio,
        cardapio.nome nomeCardapio,
        ingredientes,
        preco,
        descricao
      FROM restaurantes
        INNER JOIN cardapio
        ON restaurantes.IDrestaurante = cardapio.IDrestaurante AND restaurantes.IDrestaurante = ${id}
        INNER JOIN tipodeprato
        ON cardapio.IDtipodeprato = tipodeprato.IDtipodeprato AND tipodeprato.IDtipodeprato = ${tipo.IDtipodeprato};
    `;
    const res = await connection.execute(queryPratos);
    cardapio.push({ tipo: tipo.descricao, items: res[0] });
  }

  return cardapio;
};

//================================================================

//------------- Exports -------------
module.exports = {
  getRestaurants,
  getCardapio,
};
