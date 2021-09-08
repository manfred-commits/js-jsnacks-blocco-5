// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


function alternatArray(array1, array2){

   let letENumeri=[];
   let newArr1=[];
   let newArr2=[];


   while(letENumeri==0){
       if(array1.length==array2.length){
           for(var i=0; i<array1.length;i++){

               letENumeri.push(array1[i]);
               letENumeri.push(array2[i]);
               
           }        
       }else if(array1.length>array2.length){

           
        for(let i=0; i<array2.length;i++){
            
            newArr1.push(array1[i]);

        }

        array1=[];

        for(let i=0; i<array2.length;i++){
               
            array1.push(newArr1[i]);

        }

       }else if(array2.length>array1.length){
        
           
        for(let i=0; i<array1.length;i++){
            
            newArr2.push(array2[i]);

        }

        array2=[];

        for(let i=0; i<array1.length;i++){
               
            array2.push(newArr2[i]);

        }
       
    }
   }
    return letENumeri;
}


var lettere=["a","b","c",];
var numeri=[1,2,3,4];



console.log("Array di lettere ",lettere);

console.log("Array di numeri ",numeri);



console.log("L'array ricavato è:",(alternatArray(lettere, numeri)));
