// npm init >> npm install --save express >> node index.js ou node server.js
// npm i cors // angular

// Express.js est framework pour construire des applications web basée sur Node js
// c'est de fait le framework standard pour le développement de server (Back-end) en Node.js

var express = require('express'); // pour récupérer le module
var person = require('./routes/person.route');
var app = express();
var cors = require('cors'); // ajouter pour angular
//var bodyParser = require('body-parser');
// npm uninstall body-parser
app.use(cors()); // ajouter  pour angular
app.use(express.json());
app.use(express.urlencoded()); // important

// Utilise Body-Parser, pour pouvoir lire les entrées d'un formulaire

// le stocke comme un obj Javascript

// accessible via req.body

app.use(express.urlencoded({ extended: false }));



// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.listen(8080);
// >> node index.js

// Middle Ware
var middleware1 = function (req, res, next) {
    console.log('Middleware 1 : ', req.url, );
    next();
}

var middleware2 = function (req, res, next) {
    console.log('Middleware 2 : ', req.url, );
    next();
}

var myLogger = function (req, res, next) {
    console.log('Vous êtes connectés');
    next();
}

var requestTime = function (req, res, next) {
    req.requestTime = new Date(Date.now());
    next();
}

app.use(middleware1);
app.use(middleware2);
app.use(myLogger);
app.use(requestTime);

// get et post sont des méthodes HTTP : '/' est la route
// res.send(...) est l'instruction permettant de retourner une réponse au client

app.get('/', (req, res) => {
    console.log('requete reçue !');
    var responseText = 'Hello world';
    responseText += ' appelé à : ' + req.requestTime + ''; 
    res.send(responseText);
    //res.send('Hello World');
});


app.post('/', function(req, res){
    res.send('Requete Post');
});

// chemin final :   http://localhost/person/add
//                  http://localhost/person/edit
//                  http://localhost/person/search

app.use('/person', person); // Definition de la route

// app.get('/personne', function(req, res){
//     res.send('bonjour personne');
// });

app.listen(8080, function () {
    console.log('Express en attente');
});