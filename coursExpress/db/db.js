// npm install mysql2 --save

var mysql2 = require('mysql2'); // récupérer le module mysql2

// préparation à la connexion 
var db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'formation_db'
});
// établissement de la connexion (err de connexion captée)
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to db');
});

// mise en place de la variable globale (dans toute l'app)
// nous voulons utiliser la meme instance de connexion dans les différents modules de l'application
global.db = db;
module.exports = db;