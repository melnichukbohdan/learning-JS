let hi = 'Hello';
let textAll = `${hi} I am string`;
console.log(textAll);

function someSum(a ,b) {
    return a + b;
}

console.log(`Sum: ${someSum(5, 6)}`);

let text = `
    Hello
    Word
    Lorem
`;

console.log(text);

let text2 = "Hello \n Word \n Lorem";
console.log(text2);

let text3 = "Hello \n\t Word \n\t\t Lorem";
console.log(text3);

let text4 = 'Hello!'
console.log(text4.length);

for (let symbol of text4) {
    console.log(symbol);
}

console.log(text4.toUpperCase());
console.log(text4.toLowerCase());

//Search string in text
console.log(text4.indexOf('ell'));
console.log(text4.indexOf('ell', 3));

console.log(text4.includes('ell'));
console.log(text4.includes('ell', 3));

console.log(text4.startsWith('ell'));
console.log(text4.endsWith('!'));

let text5 = 'Hello!';
let searchText = 'Ll';
console.log(text5.toLowerCase().includes(searchText.toLowerCase()));

console.log(text4.slice(1, 2))
console.log(text4.slice(-2, -1));
console.log(text4.slice(1));

console.log('----- Homework -----');
// #1
let fls = 'Freelancer';
console.log(`Hello I an ${fls}`);

// #2
let position = fls.indexOf('n');
console.log(fls[position]);

// #3
let textH3 = 123 + "456";
console.log(textH3);

// #4
console.log(fls.toUpperCase());

// #5
let positionH5 = fls.indexOf('lan');
console.log(positionH5);
console.log(fls.slice(positionH5, (positionH5 + 3)));

// #6

console.log(fls.includes('lan', 5));