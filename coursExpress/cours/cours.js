// Express.js est un framework pour construire des applications web basées sur Node.js. 
// C'est de fait le framework standard pour le développement de serveur (Back-end) en Node.js.
var express = require('express');
var app = express();

// Un Middleware est essentiellement une fontion qui recevra les object Request et Response
// et Comme 3eme argument, une autre fonction next() que l'on appelera une fois notre code middleware terminé 

var middleware1 = function(req, res, next){
    console.log('middleware 1 :', req.url);
    next();
}

var middleware2 = function(req, res, next){
    console.log('middleware 2 :', req.url);
    next();
}

var myLogger = function(req, res, next){
    console.log('Vous etes connecté');
    next();
}

var requestTime = function(req, res, next){
    req.requestTime = new Date(Date.now());
    next();
}

app.use(middleware1);
app.use(middleware2);
app.use(myLogger);
app.use(requestTime);

// get et post sont des methodes HTTP
// '/' est la route
// res.send(...) est l’instruction permettant de retourner une reponse au client

// Envoie dans la reponse "hello world" lorsqu'une requête GET est envoyée et recupère l'heure de reception de la requete
// par l'appel du middleware requestTime
app.get('/', (req, res) =>{
    console.log('requete recu!');
    var responseText = 'Hello world';
    responseText += ' appelé à :' + req.requestTime + '';
    res.send(responseText);
});

app.post('/', function(req, res) {
    res.send('Requete Post');
});

app.get('/personne', function(req, res) {
    res.send('Bonjour personne');
})

// La fonction app.listen () est utilisée pour lier et écouter les connexions sur l'hôte et le port spécifiés
app.listen(8080, function(){
    console.log('Express en attente');
});