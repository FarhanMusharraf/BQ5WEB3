

//Print elements
// let arr = [5,10,15];
// for (let i = 0; i < arr.length; i++) {
//     let print = arr[i]
//     console.log (print)

// }

//Sum of numbers
// let arr = [5,10,15];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     sum+= element
//     console.log (sum) //output 5 15 30
// }


// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     sum+= element
// }
// console.log (sum) //output 30

//Find the minimum value
let arr = [5, 10, 15];
let minV = arr[0] //arr[?] This is called bracket notation. It is how you access one specific item from an array. The number you put inside the brackets is called the index — it tells JavaScript which position to go to.
for (let i = 1; i < arr.length; i++) {

    if (arr[i] < minV) {

        minV = arr[i];
    }

}
console.log(`Minimum number is 5 : ${minV} `)
