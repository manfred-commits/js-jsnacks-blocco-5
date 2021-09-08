// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.



var zucchine = [
    {   
        "varietà": "varietà-1",
        "peso": 500,
        "lunghezza": 30,
    },
    {   
        "varietà": "varietà-2",
        "peso": 600,
        "lunghezza": 20
    },
    {   
        "varietà": "varietà-3",
        "peso": 20,
        "lunghezza": 10
    },
    {   
        "varietà": "varietà-4",
        "peso": 100,
        "lunghezza": 5
    },
    {   
        "varietà": "varietà-5",
        "peso": 700,
        "lunghezza": 20
    },
    {   
        "varietà": "varietà-6",
        "peso": 800,
        "lunghezza": 40
    },
    {   
        "varietà": "varietà-7",
        "peso": 200,
        "lunghezza": 30
    },
    {   
        "varietà": "varietà-8",
        "peso": 600,
        "lunghezza": 40
    },
    {   
        "varietà": "varietà-9",
        "peso": 700,
        "lunghezza": 20
    },
    {   
        "varietà": "varietà-10",
        "peso": 20,
        "lunghezza": 10
    }
]
console.log(zucchine);
var piùDi=[];
var menoDi=[];

for(var key in zucchine){
    if(zucchine[key]["lunghezza"]>15){
        piùDi.push(zucchine[key]["lunghezza"]);
    }else{
        menoDi.push(zucchine[key]["lunghezza"]);
    }
    
}
console.log(`L'array con lunghezza superiore a 15 cm, è: ${piùDi}`);
console.log(`L'array con lunghezza inferiore a 15 cm, è: ${menoDi}`);