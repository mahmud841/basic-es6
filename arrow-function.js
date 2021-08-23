// function declare 
function add(num1,num2) {
    return num1 + num2;
}
// function expression
// function ke var akareo declare kora jai 
const add2 = function add2(number1, numbver2){
    return number1 + numbver2;
}
//function expression anonymous 
const add3 = function(number1, number2){
    return number1+ number2;
}

// arrow function writting format line 16
const add4 =(number1, number2) => number1+ number2;

const sum1 = add(15,14);
const sum2 = add2(15,15);
const sum3 = add3(15,16);
const sum4 = add3(15,17);
console.log(sum1,sum2,sum3,sum4);