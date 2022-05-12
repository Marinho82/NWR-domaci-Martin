
//Zadatak sa casa

let niz = [1, 'web', 2, 'desing',3];

function mapirajNiz(){
    let noviNiz=[];

    for(i=0; i<niz.length; i++){
        let novaRec = niz[i]+'IZMENJENO'; 
        noviNiz.push(novaRec)
    }

    if(Array.isArray(noviNiz)==true){
        console.log(noviNiz);
    }else{
        return (console.log([]));
    }
}

mapirajNiz();

//Zadatak 1

function zbirOpsega(start,end){
    let zbir=0;

    for(i=start; i<=end; i++){
        // console.log(i);
        zbir += i;
        console.log(zbir)
    }
}

zbirOpsega(5,10)


//Zadatak 2

let niz1=[1,2,3,40,80];
let niz2=[4,5,6,50,50];

function zbirNizova(a,b){
    let noviNiz = [];
    let zbirIndexaNiza = 0;

    if(niz1.length == niz2.length){

        for(i = 0; i<niz1.length; i++){
            zbirIndexaNiza = niz1[i] + niz2[i];
            noviNiz.push(zbirIndexaNiza);
        }
        console.log(noviNiz);
    }else{
        console.log('Nizovi imaju razlicit broj clanova');
    }

    
}
zbirNizova(niz1,niz2);

