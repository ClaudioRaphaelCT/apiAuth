const key = require('../Models/token.model')
const response = require('../Models/arquivo.model')

exports.arquivo = (req,res) => {
    const auth = req.headers['authorization']
    if(auth === key.token){
        res.status(200).json(response.arquivoOk)
    }
    res.status(400).send(response.arquivoNOK)
}