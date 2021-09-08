// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”


// SEZIONE FUNZIONE

function arrBetween(num1, num2, array){

    let resultArr=[];

    if(num1<num2 && num2<=array.length){
        for(let i = num1; i<=num2; i++ ){
            resultArr.push(array[i]);
        }
        
        return resultArr;
    }

}

// /SEZIONE FUNZIONE




// SEZIONE PRINCIPALE DEL CODICE

var num1=2;
var num2=8;
var array=[1,2,3,4,5,6,7,8,9,10];


console.log("Numero iniziale: ",num1);
console.log("Numero finale: ",num2);
console.log("Array: ",array, "di lunghezza: ",array.length);


console.log(arrBetween(num1,num2,array));


// /SEZIONE PRINCIPALE DEL CODICE