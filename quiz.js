function getSum(a, b = 9) {
    return a + b;
}
// console.log(getSum(2, 7));

const y = x => x * x;
const x = y(5);
// console.log(x)

const name = 'Hero';
const greetings = 'Welcome Home!' + ' ' + name;
console.log(greetings);

const greetings2 = `Welcome Home! ${name}`;
console.log(greetings2);


/* const division = num1, num2 => console.log(num1 / num2);
const sum = division(4,2);
console.log(sum); */
// syntax error 

const nayikas = ['mousumi', 'popy', 'shabnur', 'purnima'];
const nayikas2 = [...nayikas];
console.log(nayikas2);



// var arr = [1, 2, 3];
var arr = [10, 20, 30, 40, 50, 60, 70];
var max = Math.max(...arr);
// console.log(max);

var numbers = [10, 20, 30, 40, 50, 60, 70];
// var numbers = (10,20,30,40,50,60,70) ;
// var max = Math.max(numbers); // output NaN dibe cause ata array akare ase .jodi [] ermodhe na theke () er modhe thaklto tahole max value dito

var max2 = Math.max(...numbers);// three dot diye likhar jonne akhon max value dibe 
console.log(max);



const cars = ['toyota', 'honda', 'mercedes'];
const newCars = [...cars, 'ferrari'];
// const newCars = [...cars,];// ata korle just cars ta copy hobe
console.log(newCars);