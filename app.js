// Store accounts, inputs, balances, and buttons inside variables
// Translated variables into accounts with properties
let savings = document.getElementById('savings')
let checking = document.getElementById('checking')
let save = {
    wdraw: savings.getElementsByClassName('withdraw')[0],
    depo: savings.getElementsByClassName('deposit')[0],
    balance: savings.getElementsByClassName('balanceNum')[0],
    input: savings.getElementsByClassName('input')[0]
}
let check = {
    input: checking.getElementsByClassName('input')[0],
    wdraw: checking.getElementsByClassName('withdraw')[0],
    balance: checking.getElementsByClassName('balanceNum')[0],
    depo: checking.getElementsByClassName('deposit')[0]
}

