// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”


// SEZIONE FUNZIONE

function arrBetween(num1, num2, array){

    let resultArr=[];
    while(resultArr==0){
        
        if(num1<num2 && num2<=array.length){
            for(let i = num1; i<=num2; i++ ){
                resultArr.push(array[i]);
            }          
            
        }else if(num2>array.length){
            while(num2>array.length){
                let newNum= prompt("Inserisci un secondo numero, inferiore rispetto alla dimensione dell'array, di dimensioni pari a "+ array.length);
                num2=newNum;
            }
        }else if(num1>=num2){
            while(num1>=num2){
                let newNum= prompt("Inserisci un primo numero, inferiore rispetto al secondo, che è pari a "+num2);
                num1=newNum;
            }
        }

    }
    return resultArr;

}

// /SEZIONE FUNZIONE




// SEZIONE PRINCIPALE DEL CODICE

var num1=11;
var num2=11;
var array=[1,2,3,4,5,6,7,8,9,10];


console.log("Numero iniziale: ",num1);
console.log("Numero finale: ",num2);
console.log("Array: ",array, "di lunghezza: ",array.length);


console.log(arrBetween(num1,num2,array));


// /SEZIONE PRINCIPALE DEL CODICE