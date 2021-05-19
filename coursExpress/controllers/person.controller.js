var personModel = require('./../models/person.model');

var personController = function () { }

personController.show = function (req, res) {
    personModel.getAllPersons(function (err, result) {
        if (err)
            throw err; // si catch erreur, il sort
        res.json({
            status: 200,
            result,
            message: "Success getAll"
        })
    })
}
personController.findById = function (req, res, next) {

    let id = req.params.id;
    personModel.findPersonById(id, function (err, result) {
        try {
            if (result == null)
                throw err; // si catch erreur, il sort

                res.send(result); // angular

            // res.json({
            //     status: 200,
            //     result,
            //     message: "Success FindId"
            // })
        } catch (err) {
            next(err);
        }
    })
}
personController.save = function (req, res) {

    let data = {
        //id:req.body.id, // si sans autoIncrémentation AI
        nom: req.body.nom,
        prenom: req.body.prenom,
        salaire: req.body.salaire,
        ville: req.body.ville
    }
    // npm i body-parser
    personModel.savePerson(data, function (err, result) {
        if (err)
            throw err; // si catch erreur, il sort
        res.json({
            status: 200,
            result,
            message: "Success save"
        })
    })
}
personController.update = function (req, res) {
    let id = req.params.id;
    let data = {
        id: req.params.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        salaire: req.body.salaire,
        ville: req.body.ville
    }
    personModel.updatePersonById(id, data, function (err, result) {
        try {
            if (result == null)
                throw err; // si catch erreur, il sort

            res.json({
                status: 200,
                result,
                message: "Success Update"
            })
        } catch (err) {
            next(err);
        }
    })
}
// si pb de clé étrangères : SET FOREIGN_KEY_CHECKS=OFF; -- to disable foreign key checks
personController.delete = function (req, res) {
    let id = req.params.id;
    personModel.deletePersonById(id, function (err, result) {
        try {
            if (result == null)
                throw err; // si catch erreur, il sort

            res.json({
                status: 200,
                result,
                message: "Success Delete"
            })
        } catch (err) {
            next(err);
        }
    })
}

module.exports = personController;