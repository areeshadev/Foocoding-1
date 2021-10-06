// No. 1 STRINGS// 

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log('string with comma :'+ myString);
console.log('string length is :'+ myString.length);

let myStringWithoutComma = myString.replace(/,/g ,' ');
console.log('string without comma :'+ myStringWithoutComma);

// No. 2  ARRAYS//

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0, 'meerkat');
console.log('I think the splice method 1,0 have enabled me to add meerkat to the second index of the array');
console.log(favoriteAnimals);
console.log('The array has a lenght of:'+ favoriteAnimals.length);
let pos = favoriteAnimals.indexOf('giraffe');
favoriteAnimals.splice(pos, 1);
console.log(favoriteAnimals);
let pos2 = favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index :' + pos2);

// More JavaScript //
// Create a function that takes 3 arguments and returns the sum of the these arguments. //
function sumOfAll(a,b,c){
    return a + b + c;
}

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example. //
function colorCar(color){
    return console.log('a '+ color + ' car')
}

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.//
let user = {
    name : 'Joe',
    age : '20'
}

function userData(user){
    return console.log(user);
}
userData(user);

// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)//
function vehicleType(color,code,age){
    if((code === 1 && age === 5)) return console.log('a '+ color +' used car');
    if((code === 2 && age === 5)) return console.log('a ' + color + ' used motorbike');

}
vehicleType('red',2,5);

/*
function vehicleType(color,code){
    if(code === 1) return console.log('a ' + color + ' car');
    if(code === 2) return console.log('a ' + color + ' motorbike');
}
vehicleType('blue',1);
*/

// No. 5 //
console.log(3===3? "yes":"no");

// no 7 - 8 //
let listOfVehicles = ["motorbike", "caravan", "bike",];
console.log(listOfVehicles[2]);

// no 8 - 11 //


// no 12
let emptyObj = {};

// no 13
let teachers = [
    {
        name : 'Sahin',
        course : 'Javascript'
    },
    {
        name : 'Ildana',
        course : 'Html'
    },
    {
        name : ['Claudio','Alex', 'Saif'],
        course : 'css'
    }

]


// no. 15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); // false, because they are stored in different memory area
console.log(x === y); // false, because they are stored in different memory area as well
console.log(z == y); // true, stored in the same memory arrea just a change of variable names
console.log(z == x); // false, because they are stored in different memory area as well also

// no. 16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
// changing o2 will also change o3, because same value stored in differnt variable name
// changing o1 will not affect o3 , because both of them are stored differntly in memory

// no. 17
let bar = 42;
typeof typeof bar;
// the following code will return a string because the first typeof return a number and the second typeof coverts it to a string.
console.log(typeof typeof bar);