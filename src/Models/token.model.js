const jwt = require("jsonwebtoken");
const secrets = require("../Secrets/secrets");
const token = jwt.sign({ userId: 1 }, secrets.secret, { expiresIn: 3000 });

// RESPONSES

const tokenOK = {
  authentication: true,
  message: "Permissão bem sucedida!",
  token: token,
};

const tokenNOK = {
  authentication: false,
  message: "Usuario não tem permissão para acessar o sistema!",
};


module.exports = {tokenOK, tokenNOK, token}