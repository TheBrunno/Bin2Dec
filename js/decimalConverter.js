const button = document.getElementById('binaryButton')
const result = document.getElementById('binaryResult')

function starter(input_local){
    // Start functions
    const binaryCode = input_local.value
    const binary = checkBinaryCode(binaryCode)
    binary ? convertToDecimal(binaryCode) : error(input_local)
}
function checkBinaryCode(number){
    // Here it checks if the data that was passed by the user is a 'binary code'
    let binary = true
    for(n in number){
        if((number[n] == 1 || number[n] == 0) && binary){
            binary = true
        }else if(binary == false){
            break
        }else{
            binary = false
        }
    }return binary
}
function convertToDecimal(binary_number){
    // This is where the calculation is done
    let $sum = 0;
    for(number in binary_number){
        $sum += (2 ** number) * binary_number[--binary_number.length - number]
    }
    updatingDisplay($sum, result, 'inner')
}
function error(local_input){
    // If not binary number
    alert('Enter only binary numbers')
    updatingDisplay('', local_input, 'error')
}
function updatingDisplay(value, local, func){
    // Updating display
    if(func == 'inner'){
        local.innerHTML = value
    }else if(func == 'error'){
        local.value = value
    }
}
// When the user presses the button or the enter key the conversion will be calculated
button.onclick = function(){
    starter(document.getElementById('binaryCode'))
}

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        starter(document.getElementById('binaryCode'))
    }
}, false)