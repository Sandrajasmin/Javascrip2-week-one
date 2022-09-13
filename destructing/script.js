//DESTRUCTING 
// How to destruct from objects 

// Example 1 - dot notation
const person = {
    firstName: 'Sandra',
    lastName: 'Tullemus',
    country: 'bygda',
};

const greeting = `Heisann, jeg er
    ${person.firstName} 
    ${person.lastName} 
    fra
    ${person.country}.`;
console.log(greeting);
// Logs:
// Heisann, jeg er Sandra tullemus fra bygda.

// Use of destructing 
const {firstName, lastName, contry} = person;
const greetings = `Heisann ${firstName} ${lastName} fra ${contry}`

console.log(greetings);
//logs: Heisann Sandra Tullemus fra bygda


//The old way
//function greetUser (userObject){
//    const {name, land} = userObject;
function greetUser ({name, land, alder}){
    console.log(`Hello I am ${name} from ${land} i am ${alder} years old`);
}

const user = {
    name: "sandra",
    land: "aalesund",
    alder: "28",
}

greetUser(user);
//logs: Hello i am Sandra from Aalesund i am


// DESTRUCTING IN ARRAYS
const people = [
    {
        name: "Kalle",
        age: "18",
        score: 180,
    },
    {
        name: "Svein",
        age: "22",
        score: 2000,
    },
    {
        name: "Pål",
        age: "27",
        score: 10,
    }
]

// DESTRUCTURING PARAMETERS - rule condition 

    //const winner  = people.filter((currentItem) =>{
    //    if(currentItem.score >= 15)
    //    return true;
    //}) 
    // OLD WAY 

const winner = people.filter(({ score }) => {
    if (score >= 15) {
      return true;
    }
  });
  
console.log(winner);

// ARRAY DESTRUCTURING

const coords = [12, 30, 5, 9, 100, 53];

    // 'x' is index 0 in the array
    // 'y' is index 1 in the array
const [x, y] = coords;

console.log(x, y);
    // Logs:
    // 12 30

// TASK - create a string array of name which contains 4 names and 
//destruct the first three names 

const taskNames = [ "Hesh", "Linda", "Alex", "Fariad", "Aladin", "Turid"]; 

const [name1, name2, name3, ...rest] = taskNames;

console.log(name1, name2, name3);
    //logs: Hesh Linda Alex

console.log(rest);
    //logs rest of names


// IGNORING VALUES
            //  0   1  2   3   4
const values = [1, 12, 32, 23, 44];

const [value0, , value2] = values;
console.log(value0, value2);
    // Logs:
    // 1 32

const myCat = {
    catName: "Kitty",
    catAge: "10",
    catBreed: "skogskatt",
}
                        // add objects keyname catBreed:Breed
const {catName, catAge, catBreed} = myCat
console.log(`My Cats name is ${catName}, she is ${catAge} years old and she is a ${catBreed}`);

