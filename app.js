// Store accounts, inputs, balances, and buttons inside variables
// Translated variables into objects with properties by account
// Write deposit functions as methods inside account objects 
// Add withdraw functions as methods
// Add event listeners to the buttons for the methods
// Add non-negative and zero-class functionality to methods

let savings = document.getElementById('savings')
let checking = document.getElementById('checking')

let save = {
    wdraw: savings.getElementsByClassName('withdraw')[0],
    depo: savings.getElementsByClassName('deposit')[0],
    balance: savings.getElementsByClassName('balanceNum')[0],
    input: savings.getElementsByClassName('input')[0],
    deposit: function() {
        save.balance.innerHTML = parseInt(save.balance.innerHTML) + parseInt(save.input.value)
            if(save.balance.innerHTML > 0){
                savings.classList.remove('zero')
            }
    },
    withdraw: function() {
            if(parseInt(save.input.value) > parseInt(save.balance.innerHTML)) {
                let diff = parseInt(save.input.value) - parseInt(save.balance.innerHTML)
                if(diff > parseInt(check.balance.innerHTML)) {
                    alert('Not enough money!')
                    return
                } else {
                check.balance.innerHTML -= diff
                if(check.balance.innerHTML == 0) {
                    checking.className = 'account zero'
                }
                save.balance.innerHTML = 0
                return
                }
            }
        save.balance.innerHTML = parseInt(save.balance.innerHTML) - parseInt(save.input.value)
            if(save.balance.innerHTML == 0) {
                savings.className = 'account zero'
            }
    }
}

let check = {
    input: checking.getElementsByClassName('input')[0],
    wdraw: checking.getElementsByClassName('withdraw')[0],
    balance: checking.getElementsByClassName('balanceNum')[0],
    depo: checking.getElementsByClassName('deposit')[0],
    deposit: function() {
        check.balance.innerHTML = parseInt(check.balance.innerHTML) + parseInt(check.input.value)
            if(check.balance.innerHTML > 0){
                checking.classList.remove('zero')
            }
    },
    withdraw: function() {
            if(parseInt(check.input.value) > parseInt(check.balance.innerHTML)) {
                let diff = parseInt(check.input.value) - parseInt(check.balance.innerHTML)
                if(diff > parseInt(save.balance.innerHTML)) {
                    alert('Not enough money!')
                    return
                } else {
                save.balance.innerHTML -= diff
                if(save.balance.innerHTML == 0) {
                    savings.className = 'account zero'
                }
                check.balance.innerHTML = 0
                return
            }
        }
        check.balance.innerHTML = parseInt(check.balance.innerHTML) - parseInt(check.input.value)
            if(check.balance.innerHTML == 0) {
                checking.className = 'account zero'
            }
    }
}

save.depo.addEventListener('click', save.deposit)
save.wdraw.addEventListener('click', save.withdraw)
check.depo.addEventListener('click', check.deposit)
check.wdraw.addEventListener('click', check.withdraw)



