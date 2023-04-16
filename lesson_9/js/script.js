//creating Object and geting object data.
let userInfo = {
    name: 'Vasia',
    age: 30,
    "likes javascript": true,
};

console.log(userInfo);
//console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);

//create object property using concatenation
let firstPart = 'likes';
let userInfoConc= {
    name: 'Vasia',
    age: 30,
    [firstPart + " javascript"]: true,
    [firstPart]: false,
};

console.log(userInfoConc["likes javascript"]);
console.log(userInfoConc[firstPart]);
// advantages '[]' over '.property'

let key = 'name';
console.log(userInfoConc[key]);

// data type Symbol in Object
let id = Symbol('id');
let userInfoSymbol = {
    name: 'Vasia',
    age: 30,
    [id]: "something value",
}
console.log(userInfoSymbol);

// nestedness in Object;
let userInfoNest = {
    name: 'Vasia',
    age: 30,
    address: {
        city: 'Lutsk',
        street: 'Freedom',
    },
};

// value from variable
function makeUserInfo(name, age) {
    return {
        name: name, // alternative syntax => "name,"
        age, // alternative syntax => "age: age,"
    };
}

let user = makeUserInfo('Petia', 30);
console.log(user);

// Adds new property;
let userInfoDynamic = {
    name: 'Bob',
}
console.log(userInfoDynamic);

// Adds using '='
userInfoDynamic.age = 25;
console.log(userInfoDynamic);

// Adds using '[]'
userInfoDynamic['likes js'] = true;
console.log(userInfoDynamic);

//Adds using another Object
userInfoDynamic.address = {
    city: 'Lutsk',
    street: 'Freedom',
};
console.log(userInfoDynamic);

// Remove Object property
delete userInfoDynamic.age;
console.log(userInfoDynamic);

//IMPORTANT property also will be able for CONST
 const userInfoChange = {
    name: 'Anna',
    age: 30,
}
console.log(userInfoChange);
userInfoChange.age = 18;
console.log(userInfoChange);

//Coping Object
let userInfoMain = {
    name: 'Anna',
    age: 30,
}
console.log(userInfoMain);

let userCopied = userInfoMain;
userCopied.age = 21;
console.log(userInfoMain);

//Duplicate the Object
let userInfoDubl = {
    name: 'Anna',
    age: 30,
}
// Full copy in new Object
let  userClone = Object.assign({}, userInfoDubl);

userClone.age = 25;
console.log(userInfoDubl);
console.log(userClone);

//Adds new property using Object.assign()
Object.assign(userInfoDubl, {['likes js']: true, city: 'Boston'});
console.log(userInfoDubl);

//Checking property
let userInfoCheck = {
    name: 'Karl',
    // age: 28,
    // address: {
    //     city: 'Lutsk',
    //     street: 'Freedom',
    // },
}

if (userInfoCheck.age) {
    console.log(userInfoCheck.age);
}

// chain check
//console.log(userInfoCheck.address.street); // Gets mistake in console
console.log(userInfoCheck?.address?.street); // Gets 'undefined in console

//use 'in' operator. Empty сheck
if ("name" in userInfoCheck) {
    console.log(userInfoCheck.name);
}

// For in
let userInfoForIn = {
    name: 'Jon',
    age: 35,
    address: {
        city: 'New York',
        street: 'Freedom',
    },
}

for (let key in userInfoForIn) {
    console.log(key);
    console.log(userInfoForIn[key]);
}

for (let key in userInfoForIn.address) {
    console.log(key);
    console.log(userInfoForIn.address[key]);
}

// methods of object
let userInfoAndMethod = {
    name: 'Jon',
    age: 35,
    address: {
        city: 'New York',
        street: 'Freedom',
    },
    // method as property (long syntax)
    // showInfo: function () {
    //     console.log(`
    //         ${userInfoAndMethod.name},
    //         ${userInfoAndMethod.age} years old.
    //         Address: city ${userInfoAndMethod.address.city},
    //         st. ${userInfoAndMethod.address.street}
    //     `);
    // }

    //short syntax
    showInfo() {
            console.log(`
                ${userInfoAndMethod.name},
                ${userInfoAndMethod.age} years old.
                Address: city ${userInfoAndMethod.address.city},
                st. ${userInfoAndMethod.address.street}
            `);
    },

    // MORE useful to use 'this' instead object name.
    showInfoThis() {
        console.log(`
                ${this.name},
                ${this.age} old.
                Address: city ${this.address.city},
                st. ${this.address.street}
            `);
    },

    // To use this with nestedness

    //INCORRECT. Gets Error
    /*
    showInfoNestedness() {
        function show() {
            console.log(`
                ${this.name},
                ${this.age} years old.
                Address: city ${this.address.city},
                st. ${this.address.street}
            `);
        }

        show();
    }
    */

    //CORRECT. Uses arrow function
    showInfoNestedness() {
        let show = () => console.log(`
            ${this.name},
            ${this.age} years old.
            Address: city ${this.address.city},
            st. ${this.address.street}                     
        `);
        show();
    }

}

userInfoAndMethod.showInfo();
userInfoAndMethod.showInfoThis();
userInfoAndMethod.showInfoNestedness();

// Constructor function
function UserInfo (name) {
    this.name = name;
    this.age = 36;
}

console.log(new UserInfo('Fedir'));
console.log(new UserInfo('Max'));

console.log('--------- Homework ---------');

// #1 No. Must the following

let userInfoH = {
    name: "Vasia",
    age: 30,
}

// #2 Value of the property
let userInfoH2 = {
    name: "Vasia",
    age: 30,
    "58": 'Value of a property'
}
console.log(userInfoH2[58]);

// #3 in console will display '45'
let userInfoH3 = {
    name: "Vasia",
    age: 30,
    "58": 'Value of a property'
}
let userH3 = userInfoH3;
userH3.age = 45;
console.log(userInfoH3.age);

// #4 in console will display 'undefined'
let userInfoH4 = {
    name: "Vasia",
    age: 30,
    showInfo() {
        console.log(`${this.name}`);
    },
}
let userH4 = userInfoH4;
userInfoH4 = null
userH4.showInfo();

// #5 in console will display 'values of properties'
let userInfoH5 = {
    name: "Vasia",
    age: 30,
}
for ( const key in userInfoH5) {
    const value = userInfoH5[key];
    console.log(value);
}

// #6 in console will display 'Uzhhorod'
let userInfoH6 = {
    name: "Vasia",
    age: 30,
    address: {
        city: 'Uzhhorod'
    },
}
for (const key in userInfoH6.address) {
    console.log(userInfoH6.address[key]);
}

// #7 Incorrect. correct the following
let userInfoH7 = {
    name: "Vasia",
    age: 30,
    'likes js': true,
}
console.log(userInfoH7["likes js"]);

// #8

//#8.1
let userInfoH8 = {};
console.log(userInfoH8);
//#8.2
userInfoH8.name = 'Vasia';
console.log(userInfoH8.name);
//#8.3
userInfoH8['age'] = 30;
console.log(userInfoH8['age']);
//#8.4
userInfoH8.name = 'Lena';
console.log(userInfoH8.name);
//#8.5
delete userInfoH8.name;
console.log(userInfoH8.name);
