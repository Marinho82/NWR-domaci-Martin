//Primer 1

let prviBroj;
let drugiBroj;
let treciBroj;

function pronadjNajveci(prviBroj,drugiBroj,treciBroj){
    if(prviBroj>drugiBroj && prviBroj>treciBroj){
        console.log(`Najveci broj je ${prviBroj}`);
    }else if(drugiBroj>prviBroj && drugiBroj>treciBroj){
        console.log(`Najveci broj je ${drugiBroj}`);
    } else{
        console.log(`Najveci broj je ${treciBroj}`);
    }
}

pronadjNajveci(1,456,95);


//Primer 2

let nasumicniBroj;
let start;
let end;

function opsegBrojeva(nasumicniBroj,start,end){
    if(nasumicniBroj>=start && nasumicniBroj<=end){
        console.log(`Broj ${nasumicniBroj} se nalazi u zadatom opsegu`)
    }else{
        console.log(`Broj ${nasumicniBroj} se Ne nalazi u zadatom opsegu`)
    }
}

opsegBrojeva(100,15,100);

//Primer 3

let parametar;

function proveraParametra(parametar){

    if(typeof parametar !== 'number'){
        console.log('UNETA VREDNOST NIJE BROJ');
    }else if(typeof parametar == 'number' && parametar % 2 == 0){
        console.log('UNETA VREDNOST JE PARAN BROJ');
    }else{
        console.log('UNETA VREDNOST JE NEPARAN BROJ');
    }
    
}

proveraParametra('HEHE');





