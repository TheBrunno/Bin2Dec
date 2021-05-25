const button = document.getElementById('decimalButton')
const result = document.getElementById('decimalResult')
const caracters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function convertToBinary(input){
    let decimal_number = input.value
    let equal;
    for(i in decimal_number){
        equal = false
        for(n in caracters){
            if(decimal_number[i] == caracters[n]){
                equal = true
                break
            }
        }
        if(equal == false){
            break
        }
    }
    if(equal == false){
        alert('Enter only decimal numbers')
    }else{
        let $rest = '';
        while(decimal_number > 1){
            $rest += String(decimal_number % 2)
            decimal_number = (decimal_number - (decimal_number % 2)) / 2
        }
        $rest += decimal_number
        $rest = $rest.split('').reverse().join('')
        result.innerHTML = $rest
    }
}

button.onclick = function(){
    convertToBinary(document.getElementById('decimalCode'))
}
document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        convertToBinary(document.getElementById('decimalCode'))
    }
}, false)