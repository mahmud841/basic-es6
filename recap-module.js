let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the great';
// const = constant use korle pore r var update kkora jabe na .tokhon let use korte hobe 

// default parameter
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
}

// template string diye dynamic kora jai 
const myPeople = `My lovely person is  ${hubby} and his fullName is ${getName('Akbar')}. My name is ${priyoPerson}.`

console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}
const output1 = getName2('Mahmud', "khan");
const output2 = fiveTimes(10);
const output3 = bigArrowFunc(12,10,20);
console.log(output1,output2,output3);



const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers)
console.log(min);
