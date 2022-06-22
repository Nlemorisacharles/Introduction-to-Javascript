/* Second Javascript task 1 */
const num1 = parseFloat(prompt("Enter first number"))
const num2 = parseFloat(prompt("Enter second number"))
const opr =  prompt("Enter operator from the list below +, -, *, /")
let result = 0

if(isNaN(num1) || isNaN(num2)){
    alert('Fill all inputs! Enter number values!')
}else{
    if(opr){
        if(opr == '+'){
            result = num1 + num2;
            alert('Your answer is ' + result)
        }
        else if(opr == '-'){
             result = num1 - num2;
            alert('Your answer is ' + result)
        }
        else if(opr == '*'){
            result = num1 * num2;
            alert('Your answer is ' + result)
        }
        else if(opr == '/'){
            result = num1 / num2;
            alert('Your answer is ' + result)
        }
    }
    else{
        alert('Invalid operator')
    }
}

