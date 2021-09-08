// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchina = [
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
var somma=0;

for(var i=0; i<zucchina.length;i++){
    somma+= zucchina[i]["peso"];
}
console.log(somma);