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

getSum();