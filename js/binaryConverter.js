const button = document.getElementById('decimalButton')
const result = document.getElementById('decimalResult')
const caracters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function starter(local){
    // Start functions
    const decimal = checkDecimal(local.value)
    decimal ? convertToBinary(local.value) : error(local)
}
function checkDecimal(input){
    // Here I check if the data that was passed by the user is really a number
    let equal;
    for(i in input){
        equal = false
        for(n in caracters){
            if(input[i] == caracters[n]){
                equal = true
                break
            }
        }
        if(equal == false){
            break
        }
    }    
    return equal
}
function error(local){
    // If not decimal number
    local.value = ''
    alert('Enter only decimal numbers')
}
function convertToBinary(input){
    // This is where the calculation happens
    let $rest = '';
    while(input > 1){
        $rest += String(input % 2)
        input = (input - (input % 2)) / 2
    }
    updatedDisplay($rest, input)
}
function updatedDisplay(value, value2){
    // It is from here that makes the user see the results
    value += value2
    value = value.split('').reverse().join('')
    result.innerHTML = value
}
// When the user presses the button or the enter key the conversion will be calculated
button.onclick = function(){
    starter(document.getElementById('decimalCode'))
}
document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        starter(document.getElementById('decimalCode'))
    }
}, false)