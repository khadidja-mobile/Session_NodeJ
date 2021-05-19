var express = require('express');
// La fonction Router() permet de définir des routes dans 
// une application Express -
var router = express.Router();
var personController = require('../controllers/person.controller')

// router.get('/add', function(req, res) {
//     res.send('Ajout personne');
// });

// router.get('/edit', function(req, res) {
//     res.send('Edit personne');
// });

// router.get('/search', function(req, res) {
//     res.send('Search personne');
// });

router.get('/show', personController.show);

module.exports = router;