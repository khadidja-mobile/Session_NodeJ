// Trois types de modules

// Des modules qui sont definis dans le noyau du nodeJS : pour les
// utiliser, il faut juste 
//          -> require('nomModule');

// Des modules de la communaute NodeJS : pour les utiliser, il faut
// les telecharger puis les utiliser via la console

// Nos propres modules : pour les utiliser, il faut les exporter puis les
// importer avec 
//          -> require('./nomModule');

// npm install --save lodash
// Lodash est une bibliothèque JavaScript qui fournit des fonctions 
// utilitaires pour les tâches de programmation courantes
// Lodash contient des outils pour simplifier la programmation avec des chaînes, des nombres, 
// des tableaux, des fonctions et des objets.
var math = require('lodash');

// npm i request
// Le module renvoie une fonction qui peut effectuer des requêtes HTTP
const request = require('request');

var mod = require('./mesModules');

var http = require('http');
var url = require('url');
var querystring = require('querystring');

// Utilisation des modules importés


// On cree un serveur qui attend les clients sur le port 8080 (port
// generalement utilise par nodeJS)
// A la connexion d’un client, le serveur affiche hello world
// Quand le serveur recoit une requete sur le port http://localhost:8080/
// il envoie dans la reponse le message " hello world ""
// writeHead permet d’ ecrire a l’entete de la reponse l’ etat 200 : tout fonctionne bien

// var server = http.createServer(function(req, res){
//     res.writeHead(200);
//     res.end('Hello World');
// })

// Comment retourner du code HTML?

// http://localhost:8080

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
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


// var server = http.createServer(function (req, res) {
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     res.write('Hello world, this is your requested page : ' + page);
//     res.end();
// });

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

// Ecrire un programme qui affiche le resultat d’une addition des nombres passes en parametre (nbr1 et nbr2)

server.listen(8080);

mod.direBonjour();

// La méthode _.map () crée un tableau de valeurs et qui prend en 2 eme parametre 
// une callback, ici retourne chaque valeur du tableau * 2 
console.log(math.map([1, 5, 3], function (a) {
    return a * 2;
}));

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {

    // Notre fonction callback vérifie en premier si nous avons reçu une erreur.
    // BEST PRACTICE :  consiste à vérifier d'abord s'il y a des erreurs dans un 
    // callback afin que l'exécution du callback ne se poursuive pas avec des données manquantes.
    if (error) {
        console.error(`Ne peut pas envoyer de requètes à l'API: ${error.message}`);
        return;
    }
    // Nous vérifions ensuite le code de statut de la réponse.
    // En vérifiant que le code de statut est 200, cela  signifie que la requête était “OK”
    if (response.statusCode !== 200) {
        console.error(`Code status attendu 200 OK mais recu : ${response.statusCode}`);
        return;
    }
    // Enfin, nous analysons le corps de la réponse dans un Tableau et 
    // passons en boucle chaque film pour enregistrer son nom et son année de sortie.
    console.log("Recupération de la liste de films ...");
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`);
    })

})

// // Ecrire un programme qui affiche le resultat d’une addition des nombres passes en parametre (nbr1 et nbr2)

// http://localhost:8080?nbr1=1&nbr2=2

var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).
        query);
    res.writeHead(200, { "Content-Type": "text/plain" });
    if ('nbr1' in params && 'nbr2' in params) {
        var resultat = parseInt(params['nbr1']) + parseInt(params['nbr2']);
        res.write('Le resultat de l\'addition est ' + resultat);
    }
    else {
        res.write('Merci de rentrer un nombre, banane !');
    }
    res.end();
});