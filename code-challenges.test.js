// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    });
});

// ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// Declare a function: The function is "codedMessage". The function should iterate over each character in the string and switching the vowels out for an assigned number.  Using the .replace() (might/should) work for replacing the specified vowels with the numbers. 
//Parameters: const secretCodeWord1 = "Lackadaisical", Expected output: "L4ck4d41s1c4l"; const secretCodeWord2 = "Gobbledygook", Expected output: "G0bbl3dyg00k"; const secretCodeWord3 = "Eccentric", Expected output: "3cc3ntr1c" 
//Thought processes below:
        // const codedMessage = (value) => {
        //     return value
        // } 
// console.log(codedMessage(secretCodeWord1)) => "L4ck4d41s1c4l"
//I just wanted to make sure that I started with the bones of the function. I went back to the syllabus and wrote this first part out to make sure I didn't stray from this layout so it would stay a function.
// ----------------------------------------------------------------------------
// const secretCodeWord1 = "Lackadaisical"
// const codedMessage = (string) => {
//     string.replace(codedMessage(/a/gi,"4", /e/gi/, "3", /i/gi/, "1", /o/gi/, "0"))
//     return string
// }
// console.log(codedMessage(secretCodeWord1))
    // Maximum call stack size exceeded
// After researching how to replace characters, I tried putting it all together but I wasn't getting the desired result. 
// ---------------------------------------------------------------------------
// const secretCodeWord1 = "Lackadaisical"
// const codedMessage = (string) => {
//     string.replace(/a/gi,"4", /e/gi,"3", /i/gi,"1", /o/gi,"0")
//     return string
// }
// console.log(codedMessage(secretCodeWord1))
//Syntax errors with the commas; W3, stackoverflow suggested
// ----------------------------------------------------------------------------
// const secretCodeWord1 = "Lackadaisical"
// const codedMessage = (string) => {
//     string.replace(/a/gi,"4").replace(/e/gi,"3").replace(/i/gi,"1").replace(/o/gi,"0") 
//         return string
// }
// console.log(codedMessage(secretCodeWord1))
//I realized that I needed to use a for loop. I did some research on how to write it out using all the character changes and came up with the below function. 
const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"

const codedMessage = (string) => {
    for (let i=0; i<string.length; i++) {
    string = string.replace(/a/gi,"4").replace(/e/gi,"3").replace(/i/gi,"1").replace(/o/gi,"0")
}  
  return string
}
  
console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessage(secretCodeWord3))


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("specificFruit", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a" 
    const letterE = "e"
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(specificFruit(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]);
        expect(specificFruit(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    });
});

// b) Create the function that makes the test pass.
//PsuedoCode:
//Declare a function: Using .filter() and putting in either "const letterA" or "const letterE" then the output should be those fruits containing those letters
//Parameters: fruitArray and letterA; fruitArray and letterE
//Expected output: const letterA: ["Mango", "Apricot", "Peach"]; const letterE: ["Cherry", "Blueberry", "Peach"]

// const specificFruit = (array, value) => {
//     return array.filter((value) => {
//         return array; 
//     })
// }
// const specificFruit = (value, array) => {
//     return array.filter(specificFruit(value = letterA)); 
// }
// console.log(specificFruit(fruitArray, letterA))
// const specificFruit = (array) => {
//     return array.filter((value, index) => {
//         return index !== value
//     })
//     }
// console.log(specificFruit(fruitArray, letterA))
// console.log(specificFruit(fruitArray, letterE))
// const specificFruit = (array, value) => {
//   return array.filter((value) => {
//     return array
//    })
//  }
//console.log(specificFruit(fruitArray, letterA));
// const specificFruit = (array, value) => {
//     for(let i = 0; i = array.length; i++) {
//         if(array.filter(value)) {
//             return value 
//         }else {
//             return "not found"
//         }
//     } 
// }
//const specificFruit = (array, value) => {
    //     let eachItem = []
    //     for(let i = 0; i = array.length; i++) {
    //         if(array.includes(value)) {
    //             eachItem.filter(value)
    //         }else {
    //             return "not found"
    //         }
    //     } 
    //     return eachItem
    // }
    // console.log(specificFruit(fruitArray,letterA))

//There were many more attempts but the I would have thousands of lines of code. As I was on the resource page trying to figure out how to filter an array based off a specific variable, I scrolled onto a section regarding queries. I was trying to figure out how to make the function so that that either const letterA or const letterE could be used in the invocation. That's what I was stuck on for a couple hours.  
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
const letterE = "e"
const specificFruit = (array, query) => {
    // filtering the array, putting the values to all lowercase so a capital letter does not interfere with getting the desired return. const letterA or const letterE will be the query entries in the invocation. 
  return array.filter(value => value.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}
console.log(specificFruit(fruitArray, letterA))
console.log(specificFruit(fruitArray, letterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        expect(fullHouse(hand1)).toEqual(true);
        expect(fullHouse(hand2)).toEqual(false);
        expect(fullHouse(hand3)).toEqual(false);
    });
})

// ReferenceError: fullHouse is not defined
// b) Create the function that makes the test pass.
// PseudoCode:
// Declare a Function: Iterate (.map(), for loop) over all of the values and if there's three of the same value such as x and two of value y then that makes the output true. Any other possibiities would result in the output being false. An if else statement would be needed (maybe). Sorting the numbers first to make sure the same numbers are next to one another before looping over it will make it easier to write the loops.
    //Full House 
        //Sort      
        //Three of a kind: Does [0] match [1] = true, does [0] match [2] = true: three of a kind; [0] = [1] & [0] = [2] then [1 = [2]
        //Pair: Does [3] =[4] = true: two of a kind

// const fullHouse = (array) => {
//     let x = Number
//     let y = Number
//     for(let i=0; i < array.length; i++){
//     if(array[i] === x, x !== y) { 
//     return true
//     } else {
//     return false
//     };
//   }
// ReferenceError: x is not defined
// ReferenceError: y is not defined
// TypeError: array is not a function

// const fullHouse = (array) => {
//     array.sort((a, b) => a-b);
//     let newArr = []
//     for(let i=0; i<array.length; i++){
//         if(array[0] === array[1] === array[2] && array[3] === array[4]){
//             return 'true'
//         }else if(array[0] === array[1] && array[2] === array[3] === array[4]){
//             return 'true'
//         }else {
//             return 'false'
//         }
//     }return newArr
// }

const hand1 = [5, 5, 5, 3, 3]
const hand2 = [5, 5, 3, 3, 4]
const hand3 = [5, 5, 5, 5, 4]

const fullHouse = (array) => {
    let newArr = array.sort((a, b) => a-b)
    for(let i=0; i<array.length; i++){
        if(array[0] === array[1] !== array[2] === array[3] === array[4]){
            return 'true'
        }else if(array[0] === array[1] === array[2] !== array[3] === array[4]){
            return 'true'
        }else {
            return 'false'
        }
    } return newArr
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
//I'm stuck on this one but not really frustrated with it too much. I get what I have to do but figuring out how to compare each array element to one another is where I'm not getting it. 