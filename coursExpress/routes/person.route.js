// déclarer express
var express = require('express');
// la fct suivante Router() permet de définir des routes 
// dans une application express -
var router = express.Router();
var personController = require('../controllers/person.controller');

// router.get('/add', function(req, res){
//     res.send('Ajout personne');
// });

// router.get('/edit', function(req, res){
//     res.send('Edit personne');
// });

// router.get('/search', function(req, res){
//     res.send('Search personne');
// });

//http://localhost:8080/person/show
router.get('/show', personController.show);

// ex : http://localhost:8080/users/id/posts
// ex : http://localhost:8080/users/id/posts/id
router.get('/getOne/:id', personController.findById);

//http://localhost:8080/person/1
router.get('/:id', personController.findById);

//http://localhost:8080/person/save
router.post('/save', personController.save);  

//http://localhost:8080/person/1/update
router.put('/:id', personController.update);   // update

//http://localhost:8080/person/1/delete
router.delete('/:id', personController.delete);  // delete

module.exports = router;