// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


function alternatArray(array1, array2){

   let letENumeri=[];

    for(var i=0; i<array1.length;i++){
        letENumeri.push(array1[i]);
        letENumeri.push(array2[i]);
        
    }
    return letENumeri;
}


var lettere=["a","b","c"];
var numeri=[1,2,3];



console.log("Array di lettere ",lettere);

console.log("Array di numeri ",numeri);



console.log("L'array ricavato è:",(alternatArray(lettere, numeri)));
