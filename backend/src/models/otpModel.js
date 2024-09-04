const connection = require("./connection");
const nodemailer = require("nodemailer");

//================================================================
const sendOtp = async (email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const queryGetID = `SELECT IDpessoa FROM PESSOAS WHERE email = ?;`;
  const pessoa = await connection.execute(queryGetID, [email]);

  const otp = await generateOtp(pessoa[0][0].IDpessoa);

  console.log(pessoa[0][0].IDpessoa);
  const configEmail = {
    from: process.env.USER,
    to: email,
    subject: "Código de verificação - Food App",
    html: `
       <h3>Seu código de verificação é:</h3>
         <h1>${otp}</h1>
    `,
  };

  return await transporter
    .sendMail(configEmail)
    .then(() => otp)
    .catch((err) => {
      console.log(err);
    });
};

//================================================================
const generateOtp = async (IDpessoa) => {
  const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

  const query = `
          INSERT INTO OTP (IDpessoa, otp) VALUES (?, ?);
      `;

  await connection.execute(query, [IDpessoa, otp]);

  return otp;
};

//================================================================
const getOtp = async (email) => {
  const query = `
          SELECT IDotp, otp, expiresAt, verified FROM OTP
              INNER JOIN PESSOAS
              ON PESSOAS.IDPESSOA = OTP.IDPESSOA AND PESSOAS.EMAIL = ?
          WHERE EXPIRESAT > NOW()
          ORDER BY IDOTP DESC LIMIT 1;
      `;

  const resultOTP = await connection.execute(query, [email]);

  return resultOTP[0][0];
};

//================================================================
const verifyOtp = async (email, otp) => {
  const result = await getOtp(email);
  console.log(result);

  if (!result || result.otp != otp) {
    return false;
  }

  if (result.verified === 0) {
    const queryUpdate = `
            UPDATE OTP
            SET verified = 1
            WHERE IDOTP = ?;
        `;

    await connection.execute(queryUpdate, [result.IDotp]);
    result.verified = 1;
  }
  return result;
};

//================================================================

//------------- Exports -------------
module.exports = {
  sendOtp,
  generateOtp,
  getOtp,
  verifyOtp,
};
