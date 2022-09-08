console.log("hello i am linked");
// How you write JSDocs

/**
 * This function adds two numbers together
**/

//Write documentation 
function addNumbers(a, b) {
    return a + b;
}

addNumbers(); // hover over and se what this function does

// Practice in class
/**
* This function displays a message to the user
**/

function greeting() {
    return `<span>Hello friendly user </span>`
}

greeting();

// @Params 
//Create a functions that adds three numbers and JSDocs with param

/**
 * This function adds three numbers together 
 * @param {number} a first value
 * @param {number} b second value
 * @param {number} c third value
 * @returns {number} sum of params
 */

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

addThreeNumbers(10, 10, 19);

// @Return
/**
 * Display cat names
 * @param {string} cat1 First cat
 * @param {string} cat2 First cat
 * @param {string} cat3 First cat
 * @param {string} cat4 First cat
 * @returns {string} list of cat names
 */

function addFourCats( cat1, cat2, cat3, cat4){
    return `<ul>
                <li>${cat1}</li>
                <li>${cat2}</li>
                <li>${cat3}</li>
                <li>${cat4}</li>
            </ul>`
}

addFourCats("Felix", "Reidar", "Gunnar", "Svein");

// @example
/**
 * Adds two numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @param {number} c Third value
 * @param {number} d Fourth value
 * @returns {number} Sum of params
 * @example
 * ```js
 * // Add two numbers together
 * const a = 40;
 * const b = 30;
 * const c = 20;
 * const d = 10;
 * const sum = addNumbers(a, b, c, d);
 * // expect sum to be 100
 * ```
 */

function addFourNumbers(a, b, c ,d) {
    return a + b + c + d;
}

addFourNumbers(10, 20, 40, 50);

//Optional parameters
/**
 * Multiply two numbers together
 * @param {number} a First value
 * @param {number} [b] Second value
 * @returns {number} Multiplication of two numbers
 */

function multiplyNumbers(a, b = 10) {
    return a * b;
}

multiplyNumbers(1);
// @Typedef

/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * Adds two numbers together
 * @param {NumberLike} a
 * @param {NumberLike} b
 */

function addTwoDigits(a, b) {
    return a + b;
}

addTwoDigits();

// Complex objects
/**
 * @param {Object} userObject Object description
 * @param {string} userObject.name "a" property description
 * @param {string} userObject.role "b" property description
 */

function handleUserLogin({name, role}){
    loginUserWithToken();
}

function loginUserWithToken(){

}

handleUserLogin({
    name: "sandra",
    role: "sugarbabe"
});

const userLoginData = {
    name: "sandra",
    role: "sugarbabe"
}

console.log(userLoginData);
console.log(userLoginData.name);





// cd JSDocs
// npm init - enter all the way
// npm install jsdoc -S -D
// node_modules/jsdoc/jsdoc.js js/script.js



