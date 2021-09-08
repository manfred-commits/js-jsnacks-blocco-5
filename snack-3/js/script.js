// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


// funzione che gira una stringa 
function reverseStrg(stringa){

    // trasforma la stringa in un array di indice pari a le lettere della stringa a partire da 0
    var stringToArray= stringa.split("");

    // gira l'array ricavato in precedenza
    var arrayReverse= stringToArray.reverse();

    // trasforma l'array, adesso girato nuovamente in una stringa
    var arrayToString= arrayReverse.join("");

    return arrayToString;
}

var prova = "Ciao";
console.log(prova);
console.log(reverseStrg(prova));