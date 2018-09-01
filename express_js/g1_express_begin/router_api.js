const express = require('express');
const router = express.Router();
// esto es para enviar datos del servidor al navegador

router.get('/', (req, res) => {
  res.json( {
    miprimerapi: "api de muestra"
  });
});

module.exports = router;
