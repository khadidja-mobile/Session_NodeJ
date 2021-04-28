// Node. js est une plateforme logicielle avec une architecture orientée événements 
// qui permet d'utiliser le langage de script JavaScript, initialement développé 
// pour une utilisation côté client

// event-driven : architecture orientée événements
// Les architectures event-driven offrent souvent des solutions élégantes 
// pour fournir du code maintenable, gérer des tâches asynchrones et construire des applications fiables.

// SYNCHRONE / ASYNCHRONE

// En informatique, on dit que deux opérations sont synchrones lorsque la seconde attend 
// que la première ait fini son travail pour démarrer, le début de l’opération suivante dépend de la complétude de l’opération précédente.

// Au contraire, deux opérations sont qualifiées d’asynchrones en informatique lorsqu’elles sont indépendantes 
// c’est-à-dire lorsque la deuxième opération n’a pas besoin d’attendre que la première se termine pour démarrer.

// Par défaut, le JavaScript est un langage synchrone, bloquant et qui ne s’exécute que sur un seul thread.

// Cela signifie que :

// Les différentes opérations vont s’exécuter les unes à la suite des autres (elles sont synchrones) ;
// Chaque nouvelle opération doit attendre que la précédente ait terminé pour démarrer 
// (l’opération précédente est « bloquante ») ;
// Le JavaScript ne peut exécuter qu’une instruction à la fois

// boucle événementielle : Construction JavaScript qui permet de terminer une nouvelle tâche tout en attendant une autre

// Le code asynchrone sera écrit de trois façons : les callbacks, les promesses et les mots-clés async await

// Lorsque JavaScript rencontre une opération asynchrone, comme l'écriture dans un fichier, 
// elle l'ajoute à une table dans sa mémoire. Cette table stocke l'opération, la condition 
// pour qu'elle soit exécutée et la fonction à appeler lorsqu'elle est terminée.

// Synchrone : Cela peut rapidement poser problème dans un contexte Web :

// imaginons qu’une de nos fonctions ou qu’une boucle prenne beaucoup de temps à s’exécuter. 
// Tant que cette fonction n’a pas terminé son travail, la suite du script ne peut pas s’exécuter (elle est bloquée) 
// et le programme dans son ensemble parait complètement arrêté du point de vue de l’utilisateur.

// Ecrire une fonction qui permet de verifier si element appartient a tab

var tab = [1, 3, 6, 8, 9];
var element = 5;
// Sychrone
for (var i = 0; i < tab.length; i++) {
    if (element === tab[i]) {
        console.log("element " + element + " est present dans le tableau");
    }
}

function search(elt, tab) {
    for (var i = 0; i < tab.length; i++) {
        if (elt === tab[i]) {
            console.log("elt " + element + " est present dans le tableau");
        }
    }
}

search(element, tab);

// Asynchrone

// Une fonction de callback est une fonction qui est transmise comme argument 
// à une autre fonction, puis exécutée lorsque l'autre fonction est terminée.
// une fonction de rappel ou « callback » en anglais est une fonction qui va pouvoir être 
// rappelée (« called back ») à un certain moment et / ou si certaines conditions sont réunies. 
// Nous utilisons les callbacks pour nous assurer que le code est exécuté uniquement 
// après la fin d'une opération asynchrone.

var tab = [1, 3, 6, 8, 9];
var element = 5;
var data = { tableau: tab, filtre: element };

var searchElement = function (data, callback) {
    for (var i = 0; i < data.tableau.length; i++) {
        if (data.filtre === data.tableau[i]) {
            return callback(null, i);
        }
        return callback("Element " + data.filtre + " non retrouvé dans le tableau");
    }
}

searchElement(data, function (err, result) {
    if (err) {
        console.log("Erreur " + err);
    } else {
        console.log(element + " existe à la position " + result);
    }
});

var tab = [1, 3, 6, 8, 9];
var element = 6;
var data = { tableau: tab, filtre: element };
// Cette fonction lit l'objet Data, ici un tableau et un element de maniere asynchrone

// En d'autres termes, le programme n'attends pas la fin de la fonction 
// Et lorsque cette fonction termine sa tache, elle appelle la fonction Callback

// Une fonction CallBack prend deux parametres

// un parametre err qui reste vide si la fonction a bien ete executee,
// un parametre result qui contient le resultat si la fonction n’a pas detecter d’erreurs
// sinon il contient le contenu du message d’erreur

searchElement(data, function (err, result) {
    if (err)
        console.error("erreur :" + err)
    else
        console.log(data.filtre + " existe a la position " +
            result)
});

// PROMESSES

// un objet JavaScript utilise souvent pour realiser des traitements
// sur un resultat suite a une operation asynchrone
// disposant d’une premiere methode then() permettant de traiter
// le resultat une fois l’operation accomplie
// disposant d’une deuxieme methode catch() qui sera executee
// en cas d’echec de l’operation
// compose de deux parties : declaration et utilisation

// Declaration

// var test = true;
// var promesse = new Promise((resolve, reject) => {
//     if (test)
//         resolve();
//     else
//         reject();
// });

// // Utilisation

// promesse.then(() => console.log('test reussi'))
//     .catch(() => console.log('erreur'));

// Ou 

// Declaration
var promesse = () => {
    return new Promise((resolve, reject) => {
        if (test)
            resolve();
        else
            reject();
    });
};


// Utilisation

promesse().then(() => console.log('test reussi'))
    .catch(() => console.log('erreur'));

// Une promesse peut recevoir des parametres et retourner un resultat
let division = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b != 0)
            resolve(a / b);
        else
            reject("Erreur : Division par zéro impossible !");
    });
};

// affiche resultat : 5
division(10, 2).then((res) => console.log('Resultat :' + res))
    .catch((error) => console.log(error));

division(5, 0).then((res) => console.log('Resultat :' + res))
    .catch((error) => console.log(error));

// Remarque : les promesses s'executent de manière asynchrone

// ASYNC / AWAIT 
let somme = async (a, b) => a + b;
somme(2, 3).then((res) => console.log('Res : ' + res)); // affiche 5

//console.log(somme(2,3));

// await
let somme2 = (a, b) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(a + b) }, 2000);
    })
}

let sommeCarre = async (a, b) => {
    let s = await somme2(a, b).then((res) => res);
    let result = Math.pow(s, 2);
    return result;
}

sommeCarre(2, 3).then((res) => console.log('Resltat Somme Carre : ' + res));

// En utilisant les fonctions callback, ecrire une fonction qui permet de
// determiner le nombre d’occurrence d’une sous-chaıne de caractere ch
// dans une chaıne de caractere str.
// ch = ab
// str = abbbaaaabaaabb
// la fonction retourne 3.

var ch = "ab";
var str = "abbbaaaabaaabb";
var nb = 0;
// var indexOfFirst = str.indexOf(ch);
// console.log('indexOfFirst : ' + indexOfFirst);
function searchCh(c, chaine) {
    for (var i = 0; i < chaine.length; i++) {
        if (chaine.indexOf(c) != -1) {
            return nb++;
        }
    }
}
console.log(" Le nombre d’occurrence chaine str : " + searchCh(ch, str));

// function searchCh(elt, chaine) {
//     for (var i = 0; i < chaine.length; i++) {
//         if(ch === chaine[i] ){
//             return nb++;
//         } 
//     }
// }

function nbre_caracteres(lettre, mot) {
    mot2 = mot.split(lettre);
    nbre_de_fois_trouve = mot2.length - 1;
    return nbre_de_fois_trouve;
}
console.log("nb carateres fct synchrone : " + nbre_caracteres(ch, str));

let nb_char = (lettre, mot) => {
    return new Promise((resolve) => {
        resolve(mot.split(lettre));
    })
}

let nbre_caracteres_chaine = async (lettre, mot) => {
    let nb = await nb_char(lettre, mot).then((res) => res);
    let result = nb;
    return result;
}

nbre_caracteres_chaine(ch, str).then((res) => console.log('Le nombre d\'occurrence: ' + res));

// Correction 
function search2(elt, str) {
    var count = 0;
    var pos = str.indexOf(elt);
    if (pos != -1) {
        while (pos != -1) {
            count++;
            pos = str.indexOf(elt, pos + 1);
        }
        console.log('Element trouvé ' + count + ' fois');
    } else {
        console.log('Element non trouvé');
    }
}

var str = "abbbaaaabaaabb";
var ch = "ab";
search2(ch, str);
// Async 

var search2_async = function (data, callback) {
    var count = 0;
    var pos = data.tableau.indexOf(data.filtre);
    if (pos != -1) {
        while (pos != -1) {
            count++;
            pos = data.tableau.indexOf(data.filtre, pos + 1);
        }
        return callback(null, count);
    } else {
        return callback("Element chaine ch" + data.filtre + " non retrouvé dans la chaine de caratères string" + data.tableau);
    }
}
// Appeler search2_async();
var data = { tableau: str, filtre: ch };
search2_async(data, function (err, result) {
    if (err)
        console.error("erreur :" + err);
    else
        console.log(ch + " existe " +
            result + " fois dans String");
});


