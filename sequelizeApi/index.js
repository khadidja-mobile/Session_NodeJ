const express = require("express");

const cors = require("cors");

const app = express();

const db = require("./src/models");
const user = db.user;
db.sequelize.sync(); // plus fiable car les données seront tjrs là !

// db.sequelize.sync({ force: true}).then(function () {  // supprime et resset les valeurs, à eviter car drop tout
//   console.log("Drop and re-sync db ");
//   initial();
// });

app.use(cors());

app.use(express.json());

function initial() { // création rapide des users, idéal pour tester
  user.create({
    id:1,
    nom:"NOM1",
    prenom:"PRENOM1"
  });
  user.create({
    id:2,
    nom:"NOM2",
    prenom:"PRENOM2"
  });
  user.create({
    id:3,
    nom:"NOM3",
    prenom:"PRENOM3"
  });

}

// http://localhost:8080/api/users/1/posts
require('./src/routes/post.routes')(app);

app.use(express.urlencoded());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to our application." });
});



  

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}.`);

});