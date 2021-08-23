const numbers = [23,34,35,99,97,100 ];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23,34,45,56,99);
const max1 = Math.max([23,34,35,67,89,99,97 ]);// NaN output dibe casuse math.max oprator array nibe na se namber nibe . jodi array pass korete cai tahole array er variable ta declare kore three dots (...) var er age add kore run korte hobe 
const max2 = Math.max(...numbers);
console.log(max,max1,max2);

/* numbers.push(55);
console.log(numbers);// array te 55 push hobe */ 

const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);

//spread operator diye amra array er element gula spread korte pari .notun array create , push ,pop kora jai . onno jaijay element gula bosai dite pari 