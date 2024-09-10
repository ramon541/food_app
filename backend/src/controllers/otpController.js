const otpModel = require("../models/otpModel");
const userModel = require("../models/userModel");

//================================================================
const sendOtp = async (request, response) => {
  if (!request.body.email) {
    return response.status(400).json({ message: "Invalid data" });
  }

  const otp = await otpModel.sendOtp(request.body.email);

  if (!otp) {
    return response.status(500).json({ message: "Internal server error" });
  } else {
    return response.status(200).json({ message: "OTP sent successfully" });
  }
};

//================================================================
const getOtp = async (request, response) => {
  if (!request.body.email) {
    return response.status(400).json({ message: "Invalid data" });
  }

  const otp = await otpModel.getOtp(request.body.email);

  return otp;
};

//================================================================
const verifyOtp = async (request, response) => {
  if (!request.body.email || !request.body.otp) {
    return response.status(400).json({ message: "Invalid data" });
  }

  const otp = await otpModel.verifyOtp(request.body.email, request.body.otp);

  if (!otp) {
    return response.status(200).json({ message: "Invalid OTP", code: false });
  }
  otp.code = true;
  otp.user = await userModel.getUser(request.body);
  return response.status(200).json(otp);
};

//================================================================

//------------- Exports -------------
module.exports = {
  sendOtp,
  getOtp,
  verifyOtp,
};
