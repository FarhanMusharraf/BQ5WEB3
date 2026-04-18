//Print Element
// let arr = [5, 10, 15];

// for (let i = 0; i < arr.length; i++) {
//     let print = arr[i]
//     console.log (`array @ index ${i} is equal to: ${print} `)
//     }

//sum of numbers
let arr1 = [5, 10, 15, 20, 25, 30];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    let index = arr1[i];
    sum = index + sum
}
console.log(`the sum of arr1 is = ${sum}`);