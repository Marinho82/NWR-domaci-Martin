

let generateButton = document.getElementById('generate-color')
let spanColor = document.getElementById('color')
let main = document.getElementById('main')


generateButton.addEventListener('click', ()=>{

    let colorR = Math.floor(Math.random() * 225);
    let colorG = Math.floor(Math.random() * 225);
    let colorB = Math.floor(Math.random() * 225);

    let rgb = `rgb(${colorR},${colorG},${colorB})`;
    spanColor.innerText = rgb
    main.style.backgroundColor = rgb
    
    
})


// document.body.style.backgroundColor = 'rgb(25, 75, 100)'


// const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
// const r = randomBetween(0, 255);
// const g = randomBetween(0, 255);
// const b = randomBetween(0, 255);
// const rgb = `rgb(${r},${g},${b})`;

// console.log(rgb)




