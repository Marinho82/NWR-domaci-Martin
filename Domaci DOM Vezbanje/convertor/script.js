

let input = document.getElementById('input-amount')
let output = document.getElementById('output-amount')
let convertBtn = document.getElementById('convert-btn')
let resetBtn = document.getElementById('reset-btn')

convertBtn.addEventListener('click', ()=>{
    let euro = input.value 
    let dinar = euro * 115
    output.innerHTML = dinar;
    
})

resetBtn.addEventListener('click', ()=>{
    input.value = '';
    output.innerHTML = 0
})

