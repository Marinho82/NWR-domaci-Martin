

let budzet = 100;
let zeljenaPotrosnja = '';

while(budzet>0){
    zeljenaPotrosnja = +prompt('Unesite koliko zelite da potrosite')

    budzet = budzet-zeljenaPotrosnja
    console.log(`Stanje na racunu: ${budzet}`);
    
    if(budzet===0){
        console.log('Potrosili ste sav novac');
    } else if(budzet<0){
        console.log('Usli ste u minus');
    }
}
