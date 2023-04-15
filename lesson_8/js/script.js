// #1

function showName() {
    console.log('Vasia!');
}
setTimeout(showName, 0);
console.log('Kolia!');

// #2

//showMessage();
function showMessage() {
    console.log('Message');
}

// #3


// let showMessage = function () {
//     console.log('Message')
// };
//
// showMessage();


// #4
let getSum;
if (2 > 1) {
    getSum = function () {
        let sum = 1+ 2;
        console.log(sum);
    };
}

getSum()

// // function + cycle
// function calcSum(numOne, numTwo) {
//     let result = 1;
//     for (let i = 0; i < numTwo; i++) {
//         result *= numOne;
//     }
//
//     return result;
// }
//
// console.log(calcSum(2, 3));

// recursive function

function calcSum(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * calcSum(numOne, numTwo -1);
    }
}

console.log(calcSum(2 , 3));

// arrow function

let getMessage = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
}
console.log(getMessage('Hello', 'World'));

//setTimeout
function showHello(text, name) {
    console.log(`${text}, ${name}!`);
}

setTimeout(showHello, 3000, 'Hello', 'Vasia');

//setInterval
setInterval(showHello, 500, 'Hello', 'Petia');

//clearInterval()

let result = 0;
function showNumber(num) {
    result += num;
    console.log(result);
    if (result === 5) {
        clearInterval(timeId);
    }
}

let timeId = setInterval(showNumber, 1000, 1);