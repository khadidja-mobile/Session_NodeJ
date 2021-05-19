var sql = require('./../db/db');

var personModel = {};

// recupere toutes les personnes
personModel.getAllPersons = function (result) {
    //sql.query(req, callback);
    sql.query("SELECT * FROM person", function (err, res) {
        if (err) {
            return result(err, null);
        }
        else {
            return result(null, res);
        }
    });
}

// insertion person, enregistrer une personne
personModel.savePerson = function (newPerson, result) {
    sql.query("INSERT INTO person SET ?", newPerson, function (err, res) {
        if (err) {
            return result(err, null);
        }
        else {
            return result(null, res);
        }
    });
}

// trouver une personne par son id, recuperer personne selon son identifiant
personModel.findPersonById = function (id, result) {
    // sql.query("SELECT * FROM person WHERE id ? ", id, function(err, res) {
    sql.query("SELECT * FROM person WHERE id = " + id, function (err, rows) {
        // if(err) 
        //     throw err;
        // if(rows.length <= 0) 
        //     return result(err);
        // return result(rows);
        if (err)
            throw err; // capter l'erreur de connexion
        if (rows.length <= 0) {
            return result(err);
        }
        else {
            return result(null, rows);
        }
    });
}

// mettre à jour une personne selon son identifiant
personModel.updatePersonById = function (id, data, result) {
    sql.query("UPDATE person SET ? WHERE id = " + id, data, function (err, res) {
        if (err)
            result(err);
        return result(null, res); //else
    });
}

// supprime une personne selont son identifiant id
personModel.deletePersonById = function (id, result) {
    sql.query("DELETE FROM person WHERE id = " + id, function (err, rows) {
        if(err)
            throw err;
        if(res.affectedRows == 0){
            return result(err, null);
        }
        return result(null, res);
        // if (err)
        //     throw err;
        // if (rows.length <= 0) {
        //     return result(err);
        // }
        // else {
        //     return result(null, rows);
        // }
    });
}

module.exports = personModel;