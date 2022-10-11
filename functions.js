
//     function isPrime(num) {
//         if (num > 1) {
//             for (let i = 2; i < num; i++) {
//                 if (num % i == 0) {
//                     return false;
//                 } 
//             }
//             return true;
//         }
//         return false;
//     }
    

// console.log(isPrime(5))        

// function haveManyPrimes(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(haveManyPrimes(8))

// let arr = [-5, 1, 15, 2, 6, 9, 25, 7, 17, 19, 26, 27, 100]

// console.log(haveManyPrimes(arr));

//**************************************************************************
// function printerError(s){
//    let count=0
//    for (let i = 0; i < s.length; i++){
//     if (s.charCodeAt(i) >= 110) {
//       count++
//       }
//   } 
//   return count+"/"+s.length
// }
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

// let s1="aaaxbbbbyyhwawiwjjjwwm"
// console.log(s1.charCodeAt(8))


//**************************************************************************
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// function checkExam(array1, array2) {
//     let score=0
//     for (let i=0; i < array1.length; i++) {
//         if (array1[i] === array2[i]) {
//           score+=4 
//           console.log(score)
//         } if (array2[i] == "") {
//           score+=0
//           console.log (score)
//         } if (array1[i] !== array2[i] && array2[i]!=="") {
//           score-=1
//           console.log(score)
//         }
//       }
    //   return score < 0 ? 0 : score
    //  } 
    // console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))

// ******************************************************************************************************************************
    // function factorial(n) { 
    //     if (n <0 || n>12 ) {
    //       throw "RangeError"
    //     } else if (n==0) { 
    //       return 1
    //     } else {   
    //      for (let i=n-1; i>=1; i--) {
    //        n*=i
    //       } 
    //      }  return n  
    //    } 
    //     console.log(factorial(0)

      //   let n=5
      //  for (let i=n-1; i>=1; i--) {
      //   n*=i
      //   console.log(i, n)
      //  } 
      
// ***********************************************************************************************************************
    //   function hello(name) {
    //     if (name =="" || !name) {
    //        return "Hello, World!"
    //      } else if (name[0].toUpperCase() !== name[0]) {
    //      return `Hello, ${name[0].toUpperCase()+name.toLowerCase().slice(1)}!`
    //      } else {
    //       return `Hello, ${name[0].toUpperCase()+name.toLowerCase().slice(1)}!`
    //  }
    // }
    //  console.log(hello(""))

// ***********************************************************************************************************************

//  reverse and delete any non alphabetic el 
  // function reverseLetter(str) {
  //   return str.split('').reverse("").filter(el => el.toUpperCase() !== el.toLowerCase()).join('')
  // }
  // console.log(reverseLetter("Hell&o"))



//  reverse and delete any non alphabetic el but save  spaces (" ")
//  function reverseLetter(str) {
//     return str.split('').reverse("").filter(el => el.toUpperCase() !== el.toLowerCase() || el == " ").join('')
//   }
//   console.log(reverseLetter("Hell&o, my dear friend"))


//   function reverseLetter(str) {
//     return str.split('').reverse("").join('')
//   }
//   console.log(reverseLetter("my dear friend"))


  // console.log("Hello, how are you".split("").reverse().filter(el => el.toUpperCase() !== el.toLowerCase() || el == " "))).join("")

  // console.log(["Ryan", "Kieran", "Mark"].filter((el => el.length == 4)))

//   function sum(  num1, num2){
//     return function (){
//       return num1+num2
//     }
//   }
//   const newSum=sum(12, 12)
//   console.log(newSum())
//   console.log(sum(10,12))

//   const calculator=function (num1,num2,operator) {
//     if (operator.toLowerCase() == "add"){
//       return num1+ num2;
//     } if (operator.toLowerCase() == "sub"){
//       return num1 - num2;
//   }
// } 
// console.log(calculator(1,5, "add"))


// CALLBACK
// const add= function (num1, num2){
//   return num1+num2
// }

// const sub= function (num1, num2){
//   return num1-num2
// }

// const calculator=function (num1, num2, callback) {
//   return callback(num1, num2)
// }
// console.log(calculator(2,6,add))



// function mirrorImage(arr){
//  arr.some((x, i) => {
//       x = arr[i]
//        return [x === +(arr[i + 1].toString().split("").reverse().join("")) , arr[ i + 1]] ? [arr[i], arr[i]] : [-1, -1]
//      });  
//   } 
//    console.log(mirrorImage([11,22,33,33,22,11]))