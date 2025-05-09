// Arrow Function

// Arrow Function Implicent Return
const add = (numOne, numTwo) => numOne + numTwo;

let arrowSum = add(2,3);
console.log(arrowSum);

// Arrow Fucntion with a code block
const concat = (wordOne, wordTwo) => {
    return wordOne + wordTwo;
}

let solve = concat("Butter", "Ball");
console.log(solve);

// Test Average and Grade with Arrow Function
// Provide 5 numbers
// Ask user for 5 grades
// Letter grade for each score
// 6th score is average score

// let grades = [];
// let average = 0;


// const determineGrade = (list, average) => {
//     for (let i = 0; i < list.length; i++) {
//         list[i];

//         if(list[i] >= 90) {
//             console.log(`${list[i]} recieved letter A!`);

//         } else if (list[i] >= 80){
//             console.log(`${list[i]} recieved letter B!`);

//         } else if (list[i] >= 70){
//             console.log(`${list[i]} recieved letter C!`);

//         } else if (list[i] >= 60){
//             console.log(`${list[i]} recieved letter D!`);

//         } else {
//             console.log(`${list[i]} recieved letter F!`);
//         }
        
        
//     }

//     if(average >= 90) {
//             console.log(`Average grade: ${average} recieved letter A!`);

//         } else if (average >= 80){
//             console.log(`Average grade: ${average} recieved letter B!`);

//         } else if (average >= 70){
//             console.log(`Average grade: ${average} recieved letter C!`);

//         } else if (average >= 60){
//             console.log(`Average grade: ${average} recieved letter D!`);

//         } else {
//             console.log(`Average grade: ${average} recieved letter F!`);
//         }
// }

// const calcAverage = (listOfGrades) => {
//     let sum = 0;
//     for (let i = 0; i < listOfGrades.length; i++) {
//         sum += listOfGrades[i];

//     }

//     average = sum / 5;
//     console.log(average);
//     determineGrade(listOfGrades, average);
// }


// const getGrades = () => {
//     for (let i = 0; i < 5; i++) {
//         grades[i] = Number(prompt("Enter Grade:"));

//     }
//     calcAverage(grades);
// }
// getGrades();
// console.log(grades);


// Combine the two arrays into one (use concat())
// deduplicate the array NO MATCHING VALUES(includes())

function mergeUnique(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
       //  console.log("i for loop", arr1[i]);

        for (let j = 0; j < arr2.length; j++) {
            // console.log("j for loop", arr2[j]);
            if (arr1[i] == arr2[j]) {
                console.log(`${arr1[i]} is the same number as ${arr2[j]}`);
                arr2.splice(j,1)
            } else {
                console.log("Not a Duplicate");
            }
        }
        
    }

    //console.log(arr1 + arr2); // ex. (1,2,32,3,4)
    console.log(arr1.concat(arr2)); // ex. [1, 2, 3, 2, 3, 4]

}

mergeUnique([1,2,3], [2,3,4]);
mergeUnique([4,3,5], [6,3,2])