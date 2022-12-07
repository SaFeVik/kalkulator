const prosent1El = document.querySelector('#prosent1')
const mengde1El = document.querySelector('#mengde1')
const konverterProsentBtn = document.querySelector('#konverter-prosent')
const konverterMengdeBtn = document.querySelector('#konverter-mengde')
const prosent2El = document.querySelector('#prosent2')
const mengde2El = document.querySelector('#mengde2')
const prosent3El = document.querySelector('#prosent3')
const mengde3El = document.querySelector('#mengde3')
const pilsEl = document.querySelector('#pils')
const hjelp1El = document.querySelector('.hjelp1')
const hjelp2El = document.querySelector('.hjelp2')
const hjelpText1El = document.querySelector('.hjelpText1')
const hjelpText2El = document.querySelector('.hjelpText2')

hjelp1El.addEventListener('click', vis1)
function vis1(){
    hjelpText1El.classList.toggle('vis')
}

hjelp2El.addEventListener('click', vis2)
function vis2(){
    hjelpText2El.classList.toggle('vis')
}

konverterProsentBtn.addEventListener('click', konverterProsent)
konverterMengdeBtn.addEventListener('click', konverterMengde)

function konverterProsent(){
    console.log('konverterer prosent')
    let prosent2 = Number((prosent1El.value * mengde1El.value)/mengde2El.value)
    console.log(`ml2: ${prosent2}`)
    prosent2El.value = `${Math.round(prosent2 * 100) / 100}`
}
function konverterMengde(){
    let ml2 = Number((prosent1El.value * mengde1El.value)/prosent2El.value)
    console.log(`ml2: ${ml2}`)
    mengde2El.value = `${Math.round(ml2 * 100) / 100}`
}


prosent3El.oninput = drikke3
mengde3El.oninput = drikke3

function drikke3(){
    antallPils = Number((prosent3El.value * mengde3El.value)/4.5/500)
    console.log(antallPils)
    pilsEl.innerHTML = `ANTALL PILS: ${Math.round(antallPils * 100) / 100}`
}



