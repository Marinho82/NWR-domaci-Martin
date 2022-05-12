let polaznici = [
    {
        name: 'Marko Markovic',
        score: 90
    },
    {
        name: 'Petar Petrovic',
        score: 30
    },
    {
        name: 'Stefan Stefanovic',
        score: 50
    }
]

//Zadatak 2

let  velikaSlova = polaznici.map(polaznik=>{
    return {
        name: polaznik.name.toLocaleUpperCase(polaznik),
        score: polaznik.score
    };
})
console.log(velikaSlova);

//Ovo sam samo probao da predstavim na stranici
velikaSlova.forEach(Element=>{
    document.write(`<li>${Element.name}: ${Element.score}</li>`)
})

//Zadatak 3

let stringNiz = polaznici.map(polaznik=>{
    return `${polaznik.name}`
})

console.log(stringNiz);

//Zadatak 4 

let brojevi = [1, 2, 3, 4, 5];

let pomnozeniBrojevi = brojevi.map(broj=>{
    return broj*2
})

console.log(pomnozeniBrojevi);

//Zadatak 5

let stringUbroj = brojevi.map(broj=>{
    return broj.toLocaleString(broj);
})

console.log(stringUbroj);

console.log(typeof(stringUbroj[0]));