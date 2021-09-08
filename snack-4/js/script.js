// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].



var lettere=["a","b","c"];
var numeri=[1,2,3];
var letENumeri=[];



console.log(lettere);

console.log(numeri);

for(var i=0; i<lettere.length;i++){
    letENumeri.push(lettere[i]);
    letENumeri.push(numeri[i]);
    
}

console.log(letENumeri);
