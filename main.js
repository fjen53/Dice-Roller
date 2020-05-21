let rollButton = document.querySelector('#roll-button')
let dieRoll = []
let totaldiv = document.querySelector('#total')
let list = document.querySelector('ol')
let showallrolls = document.querySelector('#show-all-rolls-button')
let resetbutton = document.querySelector('#reset-button')
let resetnumber = document.querySelector('#num-resets')
let sidesdice = document.querySelector('#number-of-sides-on-the-dice')

rollButton.addEventListener('click', function () {
    let rollthedice = document.querySelector('#your-number-of-dice').value
    let counter = 0
    let total = 0
    while (counter < rollthedice) {

        let diceRoll = Math.floor(Math.random() * 6 + 1)
        console.log(diceRoll)
        dieRoll.push(diceRoll)

        total += diceRoll
        counter += 1
    }
    console.log(dieRoll)
    totaldiv.innerHTML = total
})

showallrolls.addEventListener('click', function () {
    let counter = 0
    let total = 0
    while (counter < dieRoll.length) {
        list.innerHTML += '<li>' + dieRoll[counter] + '</li>';
        counter += 1
    }
    console.log(total)
})

resetbutton.addEventListener('click', function () {
    console.log('resetbutton clicked')

    let buttonreset = Number(resetnumber.innerHTML) + 1;
    list.innerHTML = 0;
    totaldiv.innerHTML = 0;

})







