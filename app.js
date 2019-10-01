// Store accounts, inputs, balances, and buttons inside variables
// Translated variables into objects with properties by account
// Write deposit functions as methods inside account objects 
// Add withdraw functions as methods
// Add event listeners to the buttons for the methods

let savings = document.getElementById('savings')
let checking = document.getElementById('checking')

let save = {
    wdraw: savings.getElementsByClassName('withdraw')[0],
    depo: savings.getElementsByClassName('deposit')[0],
    balance: savings.getElementsByClassName('balanceNum')[0],
    input: savings.getElementsByClassName('input')[0],
    deposit: function() {
        let amt = parseInt(save.input.value)
        let bal = parseInt(save.balance.innerHTML)
        save.balance.innerHTML = bal + amt
    },
    withdraw: function() {
        let amt = parseInt(save.input.value)
        let bal = parseInt(save.balance.innerHTML)
        save.balance.innerHTML = bal - amt
    }
}

let check = {
    input: checking.getElementsByClassName('input')[0],
    wdraw: checking.getElementsByClassName('withdraw')[0],
    balance: checking.getElementsByClassName('balanceNum')[0],
    depo: checking.getElementsByClassName('deposit')[0],
    deposit: function() {
        let amt = parseInt(check.input.value)
        let bal = parseInt(check.balance.innerHTML)
        check.balance.innerHTML = bal + amt
    },
    withdraw: function() {
        let amt = parseInt(check.input.value)
        let bal = parseInt(check.balance.innerHTML)
        check.balance.innerHTML = bal - amt
    }
}

save.depo.addEventListener('click', save.deposit)
save.wdraw.addEventListener('click', save.withdraw)
check.depo.addEventListener('click', check.deposit)
check.wdraw.addEventListener('click', check.withdraw)



