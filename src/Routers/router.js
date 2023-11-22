const express = require("express");
const router = express.Router();
const tokenController = require('../Controllers/token.controller')
const arquivoController = require('../Controllers/arquivo.controller')

router.post('/token', tokenController.token)
router.post('/obterArquivo', arquivoController.arquivo)

module.exports = router;