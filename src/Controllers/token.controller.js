const secrets = require("../Secrets/secrets");
const tokenModel = require("../Models/token.model");

exports.token = (req, res) => {
  const {user, password} = req.body;

  if(user === secrets.user &&  password === secrets.password){
    res.status(200).json(tokenModel.tokenOK)
  }
  res.status(400).json(tokenModel.tokenNOK)
};
