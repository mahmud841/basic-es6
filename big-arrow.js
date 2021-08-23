// dui ta sonkhar plus using arrow function
const plus = (num1,num2) => num1 +num2;
const result = plus(30, 50);

// three digit multiply using arrow function
const plus3 = (num1,num2,num3) => num1 * num2 *num3 ;
const sum = plus3(1,2,3);

// one digit multiply five times 
const mulFive = (num1) => num1 *5; 
const sum2 = mulFive(5);
// one parameter hole bracket na dileo cholbe 
const mulTen = num1 => num1 *10; 
const sum3 = mulTen(5);
// name as parameter 
const getName = () => 'Mahmud Khan';
const name = getName()

// multiLine 
const mathCalculate = (x,y) => {
    const sum = x+y;
    const minus = x-y;
    const result = sum * minus;
    const output = result * 5;
    return output;
}
const total = mathCalculate(30,10);
console.log(result,sum,sum2,sum3,name,total);

/* document.getElementById('my-btn').addEventListener(event => {

}) */