const button = document.getElementById('binaryButton')
const result = document.getElementById('binaryResult')

function convertToDecimal(input){
    // Here it checks if the data that was passed by the user is a 'binary code'
    let binary_number = input.value
    let binary = true
    for(number in binary_number){
        if((binary_number[number] == 1 || binary_number[number] == 0) && binary){
            binary = true
        }else if(binary == false){
            break
        }else{
            binary = false
        }
    }
    if(binary == true){
        // This is where the calculation is done
        let $sum = 0;
        for(number in binary_number){
            $sum += (2 ** number) * binary_number[--binary_number.length - number]
        }
        result.innerHTML = $sum
    }else{
        alert('Enter only binary numbers')
        input.value = ''
    }
}

// When the user presses the button or the enter key the conversion will be calculated
button.onclick = function(){
    convertToDecimal(document.getElementById('binaryCode'))
}

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        convertToDecimal(document.getElementById('binaryCode'))
    }
}, false)