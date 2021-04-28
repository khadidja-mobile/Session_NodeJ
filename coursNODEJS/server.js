// Trois types de modules
// Des modules qui sont définis dans le noyau du nodeJS : pour les utiliser, il faut juste :
        // => require('nomModule');   
// Des modules de la communauté NodeJS : pour les utiliser il faut les télécharger puis les utiliser via la console
// Nos propores modules : Pour les utiliser, il faut les exporter puis les importer avec :
            // => require('./nomModule');

// >> npm init >> package.json 
// >> npm install --save lodash ou npm install -S lodash

var math = require('lodash'); // lodash librairie très connue
// >> npm i request
const request = require('request'); // permet de faire des requêtes http

// Utilisation des modules

// La méthode map() crée un tableau de valeurs et qui prend en 2eme paramètre un callback, 
// ici retourne chaque valeur du tableau
console.log(math.map([1,5,3], function(a){
    return a * 2;
}))

// Appeler le request
request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {

    if (error) {
        console.error(`Ne peut pas envoyer de requête à l\'API:' ${error.message}`);
        return;
    }

    // Vérifier code 200

    if (response.statusCode !== 200) {
        console.error(`Code status 200 OK mais reçu:' ${response.statusCode}`);
        return;
    }

    console.log('Récupération de la liste du film ...');
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`); // $ string interpolation
    })

});

// Modules
var mod = require('./mesModules');
var http = require('http');
//const { url } = require('node:inspector');
var url = require('url');
var querystring = require('querystring');

// Utilisation 
//mod();

// var server = http.createServer(function(req, res){
//     res.writeHead(200);
//     //res.end('Hello World');
//     res.write('<!DOCTYPE html>' +
//         '<html>' +
//         '   <head>' +
//         '       <meta charset="UTF-8" />' +
//         '       <title>Ma page Node JS</title>' +
//         '   </head>' +
//         '   <body>' +
//         '       <h1>Hello world</h1>' +
//         '   </body>' +
//         '</html>'
//     );
// });

// http://localhost:8080/mapage
// http://localhost:8080

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write('Hello world, this is your requested page : ' + page);
    res.end();
});

// http://localhost:8080?prenom=john&nom=wick
var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).
        query);
    res.writeHead(200, { "Content-Type": "text/plain" });
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous etes ' + params['prenom'] + ' ' +
            params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prenom et un nom, non ?');
    }
    res.end();
});

// Ecrire un prog qui affiche le resultat d'une addition des nombres passes en parametre nbr1 et nbr2
// http://localhost:8080?nbr1=1&nbr2=2
var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { "Content-Type": "text/plain" });
    if ('nbr1' in params && 'nbr2' in params) {
        var x = Number(params['nbr1']); var y = Number(params['nbr2']); var s = Number(x + y);
        res.write('la somme des nombres ' + params['nbr1'] + ' et de ' +
            params['nbr2'] + ' est : ' + s);
    }
    else {
        res.write('Il n\' y a pas de nombre ?');
    }
    res.end();
});


// Comment retourner du code html

server.listen(8080); // ouvrir htpp://localhost:8080

mod.direBonjour();




