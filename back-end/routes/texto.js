const controller = require("../controllers/texto");
const express = require("express")

const router = express.Router();

router.post('/', controller.novo);
router.get('/', controller.listar)
router.get('/:id', controller.obterUm)
router.put('/', controller.atualizar)
router.delete('/', controller.delete)

module.exports = router