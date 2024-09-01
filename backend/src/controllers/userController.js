const userModel = require("../models/userModel");

//================================================================
const login = async (request, response) => {
  console.log("CHAMOU A ROTA: /login");
  if (request.body.email === undefined || request.body.password === undefined) {
    return response.status(400).json({ message: "Invalid data" });
  }

  const user = await userModel.login(request.body);

  if (!user) {
    return response
      .status(400)
      .json({ message: "Email or password incorrect" });
  }

  console.log("RES:", user);
  return response.status(200).json(user);
};

//================================================================
const cadastrar = async (request, response) => {
  console.log("CHAMOU A ROTA: /cadastrar");
  if (
    request.body.Fname === undefined ||
    request.body.Lname === undefined ||
    request.body.email === undefined ||
    request.body.password === undefined
  ) {
    return response.status(400).json({ message: "Invalid data" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(request.body.email))
    return response.status(400).json({ message: "Invalid Email" });

  const IDuser = await userModel.cadastrar(request.body);

  if (!IDuser) {
    return response.status(400).json({ message: "Email already in use" });
  }

  console.log("RES:", IDuser);
  return response.status(200).json(IDuser);
};

//================================================================

//------------- Exports -------------
module.exports = {
  login,
  cadastrar,
};
