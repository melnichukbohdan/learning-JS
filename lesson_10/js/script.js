// #1
let numFloat = 1.005 + Number.EPSILON;
let numOne = Math.round(numFloat * 100 ) / 100;
console.log(numOne);

// #2
let value2 = '135.58px';
console.log(Number.parseFloat(value2));

// #3
let value3 = Number(58 + "Freelancer");
if (Number.isNaN(value3)) {
    console.log('I am Nan');
}

// #4
let value4 = Math.max(10, 58, 39, -150, 0);
console.log(value4);

// #5
let  value5 = Math.floor(58.858);
console.log(value5);
