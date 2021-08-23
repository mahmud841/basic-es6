function add(number1,number2) {
    // option 2 
    // number2 = number2 || 0;
    console.log(number1,number2);
    //option 1 
   /*  if (number2 == undefined) {
        number2 =0
    } */
    const sum = number1 + number2;
    return sum;
}
const result = add (15);
console.log(result);



 function fullName (first , last = 'Khan'){
    let name = first + ' ' + last;
    return name ;
 }
 const folafol = fullName('Mahmud', 'Hassan');
 console.log(folafol);

 // akhane last parameter a khan declare korar jonne consloelog korle mahmud khan output dibe . but jodi ami function call kore duita parameter er value declare kore di tahole khan ignore kore Hassan niye nibe . 