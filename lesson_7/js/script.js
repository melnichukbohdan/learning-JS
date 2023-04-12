// #1
console.log('for');
for (num = 1 ; num <= 5 ; num++ ) {
    console.log(num);
}

 console.log('while');
let num2 = 1;
while (num2 <= 5) {
    console.log(num2);
    num2++;
}

console.log('do while');
let num3 = 1;
do {
    console.log(num3);
    num3++
} while (num3 <= 5 )

// #2
let num4 = 8;
while (num4) {
    console.log(num4);
    num4--;
}

// #3
let num5 = 0;
while ( num5 < 3 ) {
    console.log(`Numeric ${num5}`);
    num5++;
}

// #4

firstFor: for (let num = 0 ; num < 2 ; num++) {
    for (let size = 0 ; size < 3 ; size++) {
        console.log(size)
        if (size === 1) {break firstFor}
    }
}