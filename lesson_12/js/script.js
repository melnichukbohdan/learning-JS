let arrTwo = [
    'Kolia',
    {
      type: 'JS',
      age: 36,
    },
    true,
    function () {
        console.log('Hello, I am Kolia');
    },
];

console.log(arrTwo);
console.log(arrTwo[1].type);
arrTwo[3]();

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix[0][1]);

// push() - add element in array (last position)
arr = ['Kolia', 'Vasia'];
arr.push('Olia')
console.log(arr);

// shift() - remote the first element in array

arr.shift();
console.log(arr);

// pop() - remove the last element in array
arr.pop()
console.log(arr);

// unshift - add elements as the first in array
arr.unshift('Peter', 'Bob', 'Dodik');
console.log(arr);


// delete  - remove VALUE for element, but element value = 'empty' and length not change
delete arr[1];
console.log(arr);

// splice()
console.log('splice()');
// splice() for remove
arr.splice(1, 1)
console.log(arr);

// splice() for remove element in variable
let splice = arr.splice(0, 1);
console.log(splice);

// splice() for changing value for array item
console.log(arr);
arr.splice(1 , 1 , 'Masha');
console.log(arr);

// splice() for add element in array on position...
arr.splice(1, 0, 'Vasia', 'Bob');
console.log(arr);

// splice for remive the last element
arr.splice(-1, 1);
console.log(arr);

console.log('------ array copying ------')

let arrCopy = ['Dodik', 'Vasia', 'Bob', 'Masha', 'Peter', 'Julia'];
// copying start of array
let arrStart  = arrCopy.slice(1, 2);
console.log(arrStart);

//copying end of array
let arrEnd = arrCopy.slice(-2, -1);
console.log(arrEnd);

// copying full array
let arrFull = arrCopy.slice();
console.log(arrFull);

// copying and add new element
let arrConcat = arrCopy.concat('Jec');
console.log(arrConcat);

console.log('--- find position element in array ---');

let arrFind = ['Dodik', 'Vasia', 'Bob', 'Masha', 'Peter', 'Julia'];

// Find position of element at beginning of array
// Find in all array
console.log(arrFind.indexOf('Masha'));
console.log(arrFind.includes('Masha'));
//Find in array with position 3
console.log(arrFind.indexOf('Vasia', 3));

// Find position of element at end of array
console.log(arrFind.lastIndexOf('Masha'));
console.log(arrFind.includes('Masha'));
//Find in array with position 3
console.log(arrFind.lastIndexOf('Vasia', 3));

console.log('--- find object by condition in array')

let arrObjects = [
    {name: 'Vasia', age: 25},
    {name: 'Petia', age: 18},
    {name: 'Julia', age: 'not ask'},
]

// find the first element
let resultFunc = arrObjects.find(function (item, index, array) {
    return item.age === 18;
});
console.log(resultFunc);

let resultArrowFunk = arrObjects.find(item => item.age === 18);
console.log(resultArrowFunk);

// find index of element
let resultIndex = arrObjects.findIndex(item => item.age === 18);
console.log(resultIndex);

// find element in array but do not stop if found the first
// let resultFilter = arrObjects.filter(function (item, index, array) {
//     console.log(item)
//     return item.age >= 18;
// });

let resultFilter = arrObjects.filter(item => item.age >= 18);
console.log(resultFilter);

console.log('--- Sorting---');

let arrSort = ['Dodik', 'Vasia', 'Bob', 'Masha', 'Peter', 'Julia'];

// Sorting A-Z
console.log(arrSort.sort());

//NUmber sorting
let arrNumb = [2, 10, 36, 4];

function compareNumeric (a, b) {
    // if (a > b) return 1;
    // if (a === b) return 0;
    // if  (a < b) return -1;

    return a - b;
}
console.log(arrNumb.sort(compareNumeric));
console.log(arrNumb.sort((a, b) => a - b));

// revers() - sorting in reverse order
let arrSort2 = ['Dodik', 'Vasia', 'Bob', 'Masha', 'Peter', 'Julia'];
console.log(arrSort2.reverse());

console.log('--- convert array ---');
let arrConv = ['Dodik', 'Vasia', 'Bob', 'Masha', 'Peter', 'Julia'];

// map() - return new array after process by custom logic (for example - return first letter of word)
// let arrMap = arrConv.map(function (item, index, array) {
//     return item[0];
// })
let arrMap = arrConv.map((item, index, array) => item[0]);
console.log(arrMap);

// split()  - convert string to array by separator
let str = 'Dodik, Vasia, Bob, Masha, Peter, Julia';

let arrStr = str.split(',');
console.log(arrStr);

// join() - convert array to string by separator

let arrJoin = arrStr.join(',');
console.log(arrJoin);

// check isArray

let arrArray = [];
let arrObject = {};

if (Array.isArray(arrArray)) {
    console.log('Is array');
} else {
    console.log('Is not array');
}

if (Array.isArray(arrObject)) {
    console.log('Is array');
} else {
    console.log('Is not array');
}

// array traversal
console.log('--- array traversal ---');
arrTR = ['Dodik', 'Vasia', 'Bob', 'Masha', 'Peter', 'Julia'];

// FOR circle
for (let i = 0; i < arrTR.length; i++) {
    console.log(arrTR[i]);
}

for (let arrItem of arrTR) {
    console.log(arrItem);
}

// simple function
arrTR.forEach(function (item, index, array) {
    console.log(`${item} on position ${index} in array ${array}`);
});

// arrow function
arrTR.forEach((item, index, array) =>
    console.log(`${item} on position ${index} in array ${array}`)
);

// reduce - return the only one result after process all array
arrNumb2 = [1, 2, 3, 4];
let reduceValueOne = arrNumb2.reduce(function (previousValue, currentValue, currentIndex, array) {
    return currentValue + previousValue;
}, 0)
console.log(reduceValueOne);

let reduceArr = arrTR.reduce(function (previousItem, item, index, array) {
    console.log(previousItem);
    console.log(item);
    return `${item}, ${previousItem}`;
});
console.log(reduceArr);

// reduceRight - start at the end of array;
arrTR2 = ['Dodik', 'Vasia', 'Bob', 'Masha', 'Peter', 'Julia'];
let reduceRight = arrTR2.reduceRight((previousItem, item, index, array) => {
   console.log(previousItem);
   console.log(item);
   return `${item}, ${previousItem}`;
});

console.log('--- home work ---');

// #1
let arrHW = ['Vania', 'Ishtvan', 'Olia'];
let newArr = arrHW;
newArr.push('Petia');
console.log(arrHW.length);

// #2

let arrHW2 = ['Vania', 'Ishtvan',];
arrHW2.push('Olia');
// arrHW2.findIndex('Ishtvan')
// function changeValue (arr, oldValue, newValue) {
//     let index = arr.indexOf(oldValue);
//     return arr.splice(index, 1,  newValue)
// }
// changeValue(arrHW2, 'Ishtvan', 'Petia');

changeValue = (arr, oldValue, newValue) => {
    let index = arr.indexOf(oldValue);
    return arr.splice(index, 0, newValue);
}
console.log(arrHW2);
changeValue(arrHW2, 'Ishtvan', 'Petia');
console.log(arrHW2);

let theFirst = arrHW2.shift();
console.log(theFirst);

arrHW2.unshift('Masha', 'Pasha');
console.log(arrHW2);

// #3
let arrHW3 = ['Vania', 'Ishtvan', 'Olia'];
let theIshtvanIndex = arrHW3.indexOf('Ishtvan');
let theIshtvan = arrHW3.splice(theIshtvanIndex, 1)
console.log(theIshtvan);

// #4
let str4 = 'Vania, Ishtvan, Olia'
let toArr = str4.split(',');
console.log(toArr);

//#5
let numericArr = [9, 2, 8];
let reduceValue = numericArr.reduce((previousValue) => console.log(previousValue));
