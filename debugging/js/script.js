
//CONSOLE.WARN ()
console.warn();
//CONSOLE.ERROR ()
console.error(); 


// CONSOLE.LOG (Logging what you do, always remove)

const name = "sandy pandy";
console.log(name);

const responseDataOne = [
    {
        name: "sandra",
        age: "30"
    },
    {
        name: "tulling",
        age:"2"
    }
];

const responseDataTwo = [
    {
        name: "sandra",
        age: "30"
    },
    {
        name: "tulling",
        age:"2"
    },
    {
        name:"hjertrud",
        age: "99"
    }
];

console.log("responseDataOne", responseDataOne);
console.log("responseDataTwo", responseDataTwo);

// CONSOLE.CLEAR (clearing the console)
//console.clear(); 

//CONSOLE.TABLE (list your array in a table format )
console.table(responseDataOne); 

//CONSOLE.TIME (starts timer) AND CONSOLE.TIMEEND (this ends timer)
function counter() {
    for (let i = 0; i < 1000; i++){
        console.log(i);
    }
}

counter();

// Run three separate tests below

console.time('myTimer');
counter();
console.timeEnd('myTimer');
// Logs:
// myTimer: 101ms - timer ended

console.time('myTimer');
counter();
console.timeEnd('myTimer');
// Logs:
// myTimer: 155ms - timer ended

console.time('myTimer');
counter();
console.timeEnd('myTimer');
// Logs:
// myTimer: 128ms - timer ended


// 
function sum(num1, num2) {
    return num1 + num2;
}

let number1 = 10;
console.log(number1);
let number2= 20;
console.log(number2);

//let total = sum(number1, number2);

//console.log("total", total);


// crate a function which calculate the average of given 3 numbers (params)
function getAverage (num1, num2, num3) {
   return (num1 + num2 + num3) / 2;
}

let myAverage = getAverage (2, 3, 5);
console.log("myAverage", myAverage);

// create a function which gets the average of the numbers in this array
const myArray = [1, 3, 4, 5]

function getArrAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log("total", total);
    const numberOfItemInArr = arr.length;
    console.log("numberOfItemInArr", numberOfItemInArr);
    return total / numberOfItemInArr;

}
const resultAverage = getArrAverage(myArray);
console.log("resultAverage", resultAverage);
// make an API call

function getCatFacts(){
    fetch("https://catfact.ninja/fact")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.data);
        })
    .catch(error => {

    })
}

getCatFacts();

//async await

async function getCatyFacts() {
    const response = await fetch ("https://catfact.ninja/fact");
    console.log("response: ", response);
    const catFacts = await response.json();
    console.log(catFacts);
    console.log(catFacts.data);
    return catFacts;
}

getCatyFacts().then(r => {

});