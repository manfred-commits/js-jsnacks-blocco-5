// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


// funzione che gira una stringa utilizzando split("")/reverse()/join("")
function reverseStrg(stringa){

    // trasforma la stringa in un array di indice pari a le lettere della stringa a partire da 0
    var stringToArray= stringa.split("");

    // gira l'array ricavato in precedenza
    var arrayReverse= stringToArray.reverse();

    // trasforma l'array, adesso girato nuovamente in una stringa
    var arrayToString= arrayReverse.join("");

    return arrayToString;
}

// funzione che gira una stringa utilizzando il ciclo for
function reverseCycle(stringa){
    var reverse="";
    for(var i = stringa.length-1; i>=0;i--){
        reverse +=stringa[i];
    }
    return reverse;
}




var prova = "Ciao";
var reverse ="";



console.log("Stringa di base da girare :"+prova);

console.log("Reverse generato con il for :"+reverseCycle(prova));


console.log("Reverse generato con la funzione :"+(reverseStrg(prova)));