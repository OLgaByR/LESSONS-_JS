//  Find shoertest length in string
// let s="bitcoin take over the world maybe who knows perhaps"
//     let s1=s.split(" ")
//      console.log(s1)
//     let minL=s1[0].length
//      for (let i=0; i<s1.length; i++){
//        if (s1[i].length<minL){
//         minL=s1[i].length
//         //  console.log(minL , s[i]) 
//        }
//        console.log(minL) 


//88888888888888888888888888888888888888888888888888888888888888888888888888888888888    


// let str= "ppofjeu"
// let Upper="u".toUpperCase() //U
// let str1=
// console.log(Upper)
// console.log (str.replaceAll(str2)) 


// let s="abfrtkfru"  //  to A-Bb-Fff-Rrrr-Ttttt-Kkkkkk-Fffffff-Rrrrrrrr-Uuuuuuuuu
// let s1=s.toUpperCase()
// //  console.log(s1.split)
// let s2=s1.split('')
// // console.log(s2)
// // let str="H"+ "h".repeat(2)+"-"
// // console.log (str) //Hhh-
// for (i=0; i<s2.length; i++){
// if (s2[i]!==" ") {
// s2[i]=s2[i]+s2[i].toLowerCase().repeat(i)+"-"
// }
// }
// console.log (s2.join("").slice(0,-1))
// ********************************************************************************************************
//    let srtJaden=
// let strJaden=str.split(" ")
// for (let i=0; i<strJaden.length; i++){ 
// strJaden[i]=strJaden[i][0].toUpperCase()+strJaden[i].slice(1)
// } 
// return (strJaden.join(' '))
// }

// let arr=[0, 1, 0, 1]
// let str=arr.toString()
// console.log(str)
// *********************************************************************************************************
// //   let str2=""  
// // for (i=0; i<str.length; i++){
// //    if str2+=str[i]
// // }

// let str2="0001"
// console.log(str2.charCodeAt())

// ***********************************************************************************************************************

// let word="DInn"
// let word1=word.toLowerCase()
// let wordNew="";
// for (let i=0; i<=word1.length-1; i++) { 
//  if (word1.indexOf(word1[i]) === word1.lastIndexOf(word1[i])) { 
//  wordNew+=")";  
// //  console.log (wordNew);   
//  } else {    
//  wordNew+="(";
//   }
// }
// console.log (wordNew); 

//   ******************************************************************************************************************

// let text="a2ab2Bc00de"
// let text2=""
// for (let i=0; i<= text.length-1; i++) {
//     if (text[i]==="2"){
//         text2+="S"
//     } else if (text[i]==="0") { 
//         text2+="O" 
//     } else  {
//       text2+=text[i]  
//     } 
//     console.log(text2)
// }

//  for (let j = i+1; j < i; j++) {
//   if (text2[i][j] == "a") { 
//     count++
//    } else console.log(0)
//   }
//    console.log(count) 
//  }

// ************************************************************************************************
//  rabotat 
// if (/^[0-9]+$/.test(pin)===true && pin.length==4){
//     return true;
//   } else if (/^[0-9]+$/.test(pin)===true && pin.length==6){
//     return true;
//   } else return false;
//  } 

// **********************************************************************************************************
// function correct(string){
//     let str = "" ;
//     for (let i=0; i < string.length; i++){
//       if (string[i]==="5"){
//         str+="S";
//       } else if (string[i]==="0"){
//         str+="O";
//       } else if (string[i]==="1"){
//         str+="I";
//        } else {
//         str+=string[i]
//        }
//     }
//        console.log(str)
//     }
//    console.log(correct("PAR15"))
// ********************************************************************************************************
// let s="helo! wort!"
// let str = "" ;
// for (let i=0; i < s.length; i++){
//   if (s[i] === "!") {
//     continue;  
//    }
//    str+=s[i];
// }  
// console.log(str) 
//****************************************************************************************************** */

//  REVERSE WORDS in STRING 
//     function reverseWords(str) { 
//       let arr=str.split (' ')
//       console.log(arr)
//       for (let i=0; i<=arr.length-1; i++){ 
//       //  console.log(arr[i].split("").reverse().join(""))
//         arr[i]=arr[i].split("").reverse().join("")
//     } 
//    console.log(arr.join(" "))
//   }
//       console.log(reverseWords("double spaces"))
//******************************************************************************************************** */

//  function isPangram (string){
// let alphabet="abcdefghijklmnopqrstuvwxyz".split("");
// //console.log(alphabet)
// let string1=string.toLowerCase();
// let count=0;
// for (let i=0; i< alphabet.length; i++){
//   if (string1.indexOf(alphabet[i]) > -1){
//     count++
//   }
//   (count == 26)? console.log(true):console.log(false);
// }
// }
// console.log(isPangram ("The quick brown fox jumps over the lazy dog"))
// **************************************************************************************************************
// function sumMix(x){
//     let sum=0
//      for (let i=0; i< x.length; i++) {
//        if (typeof x[i]==="string"){
//         sum+=+x[i] 
//         console.log(sum)
//         } else {
//          sum+=x[i]
//         }
//    }
//    console.log(sum) 
//    }
//    console.log(sumMix([9, 3, '7', '3']))

// function sumMix(x){
//         let sum=0
//          for (let i=0; i< x.length; i++) {
//             sum+=+x[i] 
//        }
//        console.log(sum) 
//        }
//    console.log(sumMix([9, 3, '7', '3']))

// ********************************************************************************************************************
// ?? let word="is2 Thi1s T4est 3a"
// let word1=word.split(" ")
// const nums = word1.filter(n => typeof n === "number").sort((a, b) => a - b).join(" "); 
// console.log(nums)
// const non_nums =word1.filter(x => typeof x != "number").sort().join(" "); 
//    console.log(non_nums)
//     const res = [...nums, ...non_nums];
// console.log(res)


//******************************************************************************************************************** */

// function strCount(str, letter){  
//     let count=0
//     for (let i=0; i<str.length; i++) {
//       if (str[i] === letter[0]) {
//         count++
//       } else {
//         console.log(0);
//       }
//     }
//       console.log(count);
//     }
//     console.log(strCount("hellloo", "o"))
// **************************************************************************************************************

//  function printerError(s){
//    let wanted='abcdefghijklm'.split("");
//    let unWanted='nopqrstuvwxyz'.split("")
// //    let s="aaaxbbbbyyhwawiwjjjwwm"
//    let s1=s.split("")
//    let count=0
//     // console.log (s.search(/[a-m]/g))`
//     for (let i = 0; i < s1.length; i++){
//         // for (let j = 0; j< s1.length; j++) {
//        s1.filter(el => s1.includes(unWanted[i])=> {
//      return i++}
//         console.log (i+"/"+s.length)       
//       } else {
//      console.log (0+ "/"+ s.length)
//         }
//       } 
//    console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

// let str= "www.codewars.com#about"
// // let index=str.indexOf('#')
// // console.log(index)
// // console.log(str.slice(0,index))
// console.log(str.split('#')
// ****************************************************************************************************************
// There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.
// // The ocean is to the right of the buildings. A building has an ocean view 
// if the building can see the ocean without obstructions. 
// Formally, a building has an ocean view if all the buildings to its right have a smaller height.
// // Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

// let height = [4,2,3,1]  

// // // Output: [0,2,3]

// let canSeeOceanEnd=[]
// for (let i =0 ;  i<height.length;  i++) {
//    if ( height[i] > Math.max(...height.slice(i+1))) {
//      canSeeOceanEnd.push(i)
//  } 

//    canSeeOceanEnd.sort((a, b) => a - b);

//  }
// console.log (canSeeOceanEnd)

// ******************************************************************************************************************
// let height = [4,2,3,1]  
// // // Output: [0,2,3]
// let canSeeOceanEnd=[]
// let canSeeOcean=true
// for (let i=0; i< height.length; i++) {
//  if ( height[i] < height[i+1]) {
//     canSeeOcean=false
//  } 
//   if (canSeeOcean) console.log(canSeeOceanEnd.push(i))
// }
// canSeeOceanEnd.sort((a, b) => a - b)
// console.log (canSeeOceanEnd)

// let height = [1,3,2,4]  // // Output: [3] (only build 4 see ocean)
// let canSeeOceanEnd=[]
// let max=height[0]
// for (let i=0; i< height.length; i++) {
//     if (height[i] > max ){
//         max=height[i]
//     }
// for (let j=0; j<=height.length-1; j++) {
//     if ( height[j] < height[j+1] && j < height.indexOf(max)) {
//     continue;
//     } 
//    }
//    console.log(canSeeOceanEnd.push(i))


//    console.log ([1,3,2,4].filter((el, i) => el[i-1] > el[i]))

// *****************************************************************************************************************




//                                 // REMOVE VOWELS FROM STRING 

// let str="kkkyzzou zzarzze zzzkkkwonkkkdzzerfulzzzlzz kkktezkkkacher, i zzhozzzkkkpe i akkkm kkkgozzod kkkstukkkdenzzzt!"
// let str1=""
// for ( let i=0; i<=str.length-1; i++) {
//   if (str[i]== "z" || str[i]== "k" ) continue;
//  str1+=str[i]
// }
// console.log (str1)
// console.log (str1.replace(/[aeiou]/gi, '')) 


//  remove all el from a if they are equal to b or the opposirt-- from b if they are eqaul to a
// function arrayDiff(a, b) {
//   let result;
//     return result=a.filter(el => !b.includes(el))  ;

//   }
//   console.log(arrayDiff([1,2,3], [1]))


//************************************************************************************************ */ 


// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
//  with the same value next to each other and preserving the original order of elements.
// 
// 'AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

// var uniqueInOrder=function(iterable){
// // let iterable1=iterable.split("")
// // console.log(iterable1)
// let arr=[]
//   for (let i=0; i< iterable.length; i++) {
//       if (iterable[i]!==iterable[i+1]) {
//        arr.push(iterable[i])
//     } 
//  }
//     return arr  
// }
//  console.log(uniqueInOrder("adddbbbbttttuuu"))

//  return [...iterable].filter((a, i) => a !== iterable[i-1]) best solution 

//  console.log('AAAABBBCCDAABBB'.charAt(6))

//********************************************************************************************************** */

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2

// var 1
// function duplicateCount(text) { 
//     let text2=text.toLowerCase().split("")
//     let array= new Set(text2);
//     // console.log(array) // { 'i', 'n', 'd', 'v', 's', 'b', 'l', 't', 'e' }
//     return [...array].filter(el => text2.indexOf(el) !== text2.lastIndexOf(el)).length  
//  }
//     console.log(duplicateCount("Indivisibilitiess"))

// var 2 

// function duplicateCount(text) {  
// let duplicates = []
// for(let i = 0; i < text.length; i++) {
//   //Find the matching in the string, if the matching index is not equal to the 
//   //Current index and the element does not exist in the duplicates array then push.
//   if(text.toLowerCase().indexOf(text[i]) !== text.toLowerCase().lastIndexOf(text[i])  && 
//      !duplicates.includes(text[i])) {
//          duplicates.push(text[i])
//          console.log(duplicates)
//   }
// }
// return duplicates.length
// }
// console.log(duplicateCount("Indiviibilities"))



// var 3 

// function duplicateCount(text) {
//     return [...new Set(text.toLowerCase())].filter(elem => text.toLowerCase().indexOf(elem) != text.toLowerCase().lastIndexOf(elem)).length
// }
// console.log(duplicateCount("Indiviibilitiess"))
// *******************************************************************************************************************


// function unusualFive() {
//     return "abcdt".length
//   } 
//   console.log(unusualFive())

//************************************************************************************************************************* */

///////replace letter with its alphabet position 

// function alphabetPosition(text) {
//     let textEnd=[]
//     let text1=text.replaceAll(/[^a-zA-Z]/g,"").toLowerCase().split("")
//     console.log(text1)
//     let alphabet="abcdefghijklmnopqrstuvwxyz".toLowerCase()
//     for (let i=0; i<text1.length; i++) {
//       textEnd.push(alphabet.indexOf(text1[i])+1)  
//          console.log(textEnd, text1[i])
//       }
//      return textEnd.join(" ") 
//     } 
// console.log(alphabetPosition("The sun@set s_ets at t*welve o' clock."))



//   "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//   let text ="sunset"
//   console.log(text.fromCharCode(i))
//   let TextEnd=[]
//   let alphabet="abcdefghijklmnopqrstuvwxyz"

// console.log("is2 Thi1s T4est 3a".split(" ").sort( a,b => typeof a[i]===number - typeof b[i]===number))

//********************************************************************************************************************* */

// const toJadenCase = function (string) {
//     let strJaden=string.split(" ")
//   for (let i=0; i < strJaden.length; i++) { 
//   strJaden[i]=strJaden[i][0].toUpperCase()+strJaden[i].slice(1)
//  } 
//   return strJaden.join(" ")
// }
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))


//********************************************************************************************************************* */


// function Case (s){
//     let stringNew=""
//     let countUp=0
//     let countLo=0
//     for (let i=0; i<s.length; i++) {
//      if (s[i]==s[i].toLowerCase()) {
//         countLo++
//      } if (s[i]==s[i].toUpperCase()) {
//         countUp++
//      } 
//     }
//      return  countLo>=countUp ? s.toLowerCase(): s.toUpperCase()
//     }

// console.log(Case ("CODe"))
// console.log(typeof "H*.eLLo Wou4Ld".indexOf(2))

// best solution 
// s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()


//  ***************************************************************************************************************

// function AlternativeCase(string){
// let stringAltern=""
// for (let i=0; i<string.length; i++) {
//     if (string[i].toUpperCase()==string[i].toLowerCase()) {
//         stringAltern+=string[i]
//     }  else if (string[i]==string[i].toLowerCase()) {
//         stringAltern+=string[i].toUpperCase();
//     } else {
//         stringAltern+=string[i].toLowerCase()
//    } 
// }
//  return stringAltern
// }
// console.log(AlternativeCase("he2L8L*O"))


//********************************************************************************************************************

// find first diffent from el number
// function stray(numbers) {
//     return +numbers.filter(el => numbers.indexOf(el) == numbers.lastIndexOf(el)).join("")
//   }
//   console.log(stray([1, 1, 2]))

//************************************************************************************************************************* */


// function replace(s){
//     return s.replace(/[aeiou]/gi,"!") 
//     }
//     console.log(replace("AEU"))

// function stringClean(s){
//     return s.replaceAll(/[0-9]/g,"")
//    }
//    console.log(stringClean("(E3at m2e2!!)"))


//********************************************************************************************************** */
// ???????????????Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// function findOdd(A) {
//     const count = {};

//     for (element of A) {
//       if (count[element]) {
//         count[element] += 1;
//       } else {
//         count[element] = 1;
//       }
//     }
//     return count
// }
// console.log(findOdd([1, 1, 1, 3, 4, 5, 5]))


// function findOdd(A) {
//  let a=A.filter(el => A.indexOf(el) !== A.lastIndexOf(el))
//  console.log(a)
//  let count=[]
//  for (let i=0; i<a.length; i++) {
//       if (a[i] == a[i+1]) {
//         count.push(a[i])
//       }
// }console.log(count)
// }
// console.log(findOdd([1, 1, 1, 3, 4, 5, 5]))


//********************************************************************************************************** */
// [1, 4, 3, 4, 5, 6, 7, 8, 5, 0])) // "(123) 456-7890"

// function createPhoneNumber(numbers){

// let newA=new Array(...numbers)
// //  console.log(newA)
//    let a=newA.splice(0,3)
//   a.unshift("(")
//   a.push(")", " ")
// //   console.log(a)

//   let arr2=new Array(...numbers)
//   let b=arr2.slice(3,6)
//   b.push("-")
// //   console.log(b)

//   let arr3=new Array(...numbers)
//   let c= arr3.slice(6)
// //   console.log(c)
//   let phone=[].concat(a,b,c)
// //   console.log(phone)
//    return phone.join('') 
//  }
//  console.log(createPhoneNumber([1, 4, 3, 4, 5, 6, 7, 8, 5, 0])) // "(123) 456-7890"


// var 2 

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";

//     for(var i = 0; i < numbers.length; i++) {
//       format = format.replace('x', numbers[i]);
//     }    
//     return format;
//   }
// console.log(createPhoneNumber([1, 4, 3, 4, 5, 6, 7, 8, 5, 0]))

// ************************************************************************************************************************

//  Testing 1-2-3 => ["1: a", "2: b", "3: c"]

// var number=function(array){
//     let result=[]
//      for (let i=0; i<array.length; i++) {
//       result+=`${i+1}`+": " + array[i]+"-"
//       }
//       return result.split("-").slice(0,-1)
//    }
//   console.log(number(["v", b, d"])) // ["1: a", "2: b", "3: c"]

//    console.log([" "].length)

// best solution 
// function number(arr) {
//     return arr.map((e, i) => `${++i}: ${e}`);
//   }
// ************************************************************************************************************************
// ???
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.

// function high(x){
//     let xAlphabetScore=[]
//     let x1=x.split("")
//     console.log(x1)
//     let alphabet="abcdefghijklmnopqrstuvwxyz"
//     for (let i=0; i<x1.length; i++) { 
//         xAlphabetScore.push(alphabet.indexOf(x1[i])+1)  
//       }
//       console.log(xAlphabetScore.toString())
//     //    for (let i=0; i<xAlphabetScore[i].length; i++) { 
//     //     if (xAlphabetScore[i] == "0"){

//     //     }
//     } 

// //     let a = xAlphabetScore.split(' ').sort ((a, b) => a.length - b.length)
// //      return a[a.length-2].length == a[a.length-1].length ? a[a.length-2] : a[a.length-1]
// //   }
//   console.log(high('what time are we climbing up the volcano'))


// ************************************************************************************************************************

//   And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?
//   In case you don't know, what the Fibonacci number is:
//   The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) := 0 and fib(2) := 1. 
//   With these initial values you should be able to calculate each following Fibonacci number.

// function fib(n) {
//     const a=[0,1]
//     for (let i= 2; i<=n; i++){
//       a.push(a[i-1] + a[i-2])
//     }
//     return a[a.length-2]
//   }
// // console.log(fib(5))

// function fibnTH(n) {
//     const a=[0,1]
//     for (let i= 2; i<=n; i++){
//       a.push(a[i-1] + a[i-2])
//     }
//     return a[a.length-2]
//   }
//   console.log(fibnTH(4))


// ************************************************************************************************************************

//  Create the function consecutive(arr) that takes an array of integers and return the minimum number of 
// integers needed to make the contents of arr consecutive from the lowest number to the highest number.
// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two
//  numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.


// Find the Smallest and Largest Element in Array.
// Get the count of can say, difference of 
// Largest and Smallest value of array in order to calculate, how many elements must be there to make it as a continuous array . 
//  and also add 1 to the result to make count inclusive.
// Find the Length of the Array

// Subtract the count i.e. "difference of largest and smallest value " with the length of array

// ************************************************************************************************************************

// function consecutive(arr) {

//     let max=Math.max(...arr)
//     console.log(max)
//     let min=Math.min(...arr)
//     console.log(min)
//     let elCountConcsecutive=max-min+1 

//     return arr.length == elCountConcsecutive ? 0 : elCountConcsecutive - arr.length
//     }
//     console.log(consecutive([4,6,8]))

// ************************************************************************************************************************


//   Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n and generates
//  an array containing the pairs of integers [a, b] that satisfy the following conditions:

//   0 <= a <= b <= n
//   The pairs should be sorted by increasing values of a then increasing values of b.
//   For example,
//   generatePairs(2) should return
//   [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]


// function generatePairs(n) {
//     let newArr = []
//     for (let i = 0; i <= n; i++ ) { 
//         for (let j = i; j <= n; j++ ) {
//        newArr.push([i, j])
//   }
// }
//   return newArr
// }
// console.log(generatePairs(2))

// ********************************************************************************************************************************


// function divisors(integer) {
//     let arr = []
//     for (let i = 2; i <= integer; i++) {
//         if (integer == i) {
//             continue
//         } if (integer % i == 0) {
//             arr.push(i)
//         }
//     }
//           return arr.length == 0 ? ` ${integer} is prime` : arr
// }
// console.log(divisors(13))

// ***********************************************************************************************************************************

// ????
// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 
// of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
//  n=3 [ 0,  1,    3,      6,   ...]
//        0  0+1  0+1+2  0+1+2+3

// function sumOfN(n) {
//  let arrSum = []
//  for (let i = 0; i <= n; i++ ) { 
//       let a = i + 1
//         arrSum.push(a)
//     }
//       return arrSum
//     }
// console.log(sumOfN(3))

// ***********************************************************************************************************************************

// you 3 will 3 win 4"
// function addLength(str) {
//     return str.split(" ").map(el => el+" "+el.length)
// }
// console.log(addLength("you will win"))

// ***********************************************************************************************************************************

// function mergeArrays(arr1, arr2){
//     let newArr=arr1.concat(arr2)
//      return newArr.filter(el => newArr.indexOf(el) == newArr.lastIndexOf(el)).sort((a, b) => a-b)
//    }
//    console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))


// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

// function mxdiflg(a1, a2) {
//  if (a1.length == 0 || a2.length == 0) return -1
//  let a1sorted= a1.map(el => el.length).sort((a, b) => a-b)
//   console.log(a1sorted)

//  let a1Max=a1sorted[a1sorted.length-1]
//  let a1Min=a1sorted[0]

//  let a2sorted= a2.map(el => el.length).sort((a, b) => a-b)
//  console.log(a2sorted)

//  let a2Max=a2sorted[a2sorted.length-1]
//  let a2Min=a2sorted[0]

//   return (a1Max > a2Max) ?  (a1Max - a2Min) : (a2Max - a1Min)
//  } 
//  console.log(mxdiflg(  ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"] , ["bbbaaayddqbbrrrv"]))


//  ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]


// ******************************************************************************************************************************

// function digits(num){
//     return (""+num).split("").reduce((a, b) => a + b)
//     console.log(num)
//    }
//    console.log(digits(156))

// ******************************************************************************************************************************

// let str = "(())(())"
// function brackets (arg) {
//     let arr = []
//     for (let i = 0; i < arg.length; i++ ) {  
//           if (arg[i] == "(") {
//             arr.push(arg[i])
//           } else {
//             if (arr.length == 0) {
//                arr.pop() 
//             } else {
//                 return false
//             }
//           }
//         }
//         // return arr.length == 0 ? false : true 
//         return !arr.length
//     }
//     console.log(brackets(str))

// *********************************************************************************************************************
// let str = "(())())("
//     function bracket(arg) {
//         let arr = []
//         for (let i = 0; i < arg.length; i++ ) {
//             if (arg[i] == "(" ) {
//                 arr.push(arg[i])
//             }
//             else {
//                 if (arr.length) {
//                     arr.pop()
//                 }
//                 else {
//                     return false
//                 }
//             }
//         }
//         return !arr.length
//     }
//     console.log(bracket(str))

// *******************************************************************************
//  function calculate(str) {
//         let a = str.replace(/plus/g, "+").replace(/minus/g, "-")
//         let c = a.split("")
//         console.log(c)
//         let result = c[0]
//          for (let i = 0; i< c.length; i++) {
//            if ( c[i] == "+") {
//               result += +c[i+1]
//               console.log(result)
//            } else if (c[i] == "-") {
//               result -= +c[i+1]
//               console.log(result)
//            }
//          }
//        return ""  + result
//        }
//     console.log(calculate('8minus1minus1plus4'))

// function calculate(str) {
// let a = str.replace(/plus/g, "+").replace(/minus/g, "-") 
// let a1 =  a.match(/\w+|[*+/-]/g)
// console.log(a1)
//  let result = a1[0]
//  for (let i = 0; i< a1.length; i++) {
// if ( a1[i] == "+") {
//  result += +a1[i+1]
//  console.log(result)

//  } else if (a1[i] == "-") {
//   result -= +a1[i+1]

//  }
//  }
//  return  result
//  }
       
//  console.log(calculate('200minus150minus1plus4'))




// *******************************************************************************
// https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript

// function mirrorImage(arr){
//     for (let i = 0; i < arr.length-1; i++) {  
//     if (arr[i] === +(arr[i+1].toString().split("").reverse().join(""))) {
//          return  [arr[i], +arr[i+1]]
//         }         
//     }
//     return [-1,-1] 
// }
//      console.log(mirrorImage([11,22,57,75,22,11]))
//     //  console.log((233).toString().split("").reverse().join(""))

//  best solution 
//  arr.some((val, idx) => (i = idx, `${val}` === [...`${arr[++idx]}`].reverse().join(``))) ? [arr[i], arr[++i]] : [-1, -1];


// **********************************************************************************************

//https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
// let  arr = [123,456,789,12,3,4,5,6,78]
//  3+4 6+7 9+1 2+3 4+5 6+7  


//  |   |   |   |   |   |
// [7 ,13 ,10 , 5 , 9 ,13]  

// console.log(('123').toString().split("").slice(-1))
//   console.log('123'.split("").slice(0,1))

// console.log((123).toString().split("").pop()) // 3
// console.log((123).toString().split("").shift()) // 1
// console.log((123).toString().split("").slice(-1)) // 3
// console.log((456).toString().split("").slice(0,1)) // 4


// function tailAndHead(arr){

// let arrN = []
// for (let i = 0; i< arr.length-1; i++) {  
// arrN.push(+(arr[i]).toString().split("").pop() + (+(arr[i + 1]).toString().split("").shift()))
// // return arrN
// } 
//  return arrN.reduce((total, el, i, arrN) => total * el, 1)  
// }
//     console.log(tailAndHead([123,456,789,12,3,4,5,6,78]))



// ***********************************************************************************************

//https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript// 


//   let half = Math.ceil(5/2) // bolshiu 
//   half = Math.floor(5/2) //2

//  function isolateIt(arr){
//  return arr.map(el => el.length % 2 ? el = el.slice(0, el.length/2) + "|"+ el.slice(-el.length/2)  :  el = el.slice(0, Math.floor(el.length/2))+ "|"+ el.slice(-Math.ceil(el.length/2)))
// }
//   console.log(isolateIt(["YR9#L1$h!.","&JDrrM","mEK.-ChFAO|0j$U","bbD+P0c1FU","=uUzCYcLpzECTZS8","r pLTel,tg-zJ","xr76hsIke.","-SF","ACxVi"]))


//   best solution 

//   function isolateIt(arr){
//     return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
//   }
// console.log(isolateIt(["YR9#L1$h!.","&JDrrM","mEK.-ChFAO|0j$U","bbD+P0c1FU","=uUzCYcLpzECTZS8","r pLTel,tg-zJ","xr76hsIke.","-SF","ACxVi"]))

// ***************************************************************************************************************************


// https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

//  function sortIt(a){
// return a.map((el, i) => (a.lastIndexOf(a[i]) - a.indexOf(a[i]) + 1) > (a.lastIndexOf(a[i++]) - a.indexOf(a[i++]))).sort((a, b) => a-b)
// }
//     //   i = a.lastIndexOf(a[i]) + 1;
//   console.log(sortIt([1,1,1,2,2,3]))

// ******************************************************************************************************************************
// https://www.codewars.com/kata/5a084a098ba9146690000969/train/javascript

// console.log((78).toString().split("")) // "78"

// function timeConvert(num) { 
//     if (num == 0 || num < 0)   return "00:00"
//    let hours = Math.trunc(num/60)
// //    console.log(Math.trunc(134/60))
//    let minutes = num - hours*60
//    return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes: minutes)+ " "
// }
// console.log(timeConvert(8))

// Test.assertEquals(timeConvert(32), '0'+0+':'+32);
// Test.assertEquals(timeConvert(75), '0'+1+':'+15);
// Test.assertEquals(timeConvert(63), '0'+1+':'+'0'+3);
// Test.assertEquals(timeConvert(134), '0'+2+':'+14);
// Test.assertEquals(timeConvert(180), '0'+3+':'+'0'+0);

// ***********************************************************************************
// https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
// function infiniteLoop(arr,d,n){
//     for (let i = 0; i <= n; i++){
//       if (d == "left") {
//         arr[0].push(arr[1].shift())
//         arr[1].push(arr[2].shift())
//         arr[2].push(arr[0].shift())
//          return arr

//       } if (d == "right") {

//         arr[0].unshift(arr[2].pop())
//         arr[2].unshift(arr[1].pop())
//         arr[1].unshift(arr[0].pop())
//         return arr
//       }
//    console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"right",1))

//    let arr = [[1,2,3,4],[5,6,7]]
//    console.log(arr[0].push(arr[1].shift()))
//    console.log(arr[1].push(arr[0].shift()))
//    console.log(arr)

//    console.log(arr[0].unshift(arr[1].pop()))
//    console.log(arr[0])
//    console.log(arr[0].pop())
//    console.log(arr[0])

// **************************************************************************************************************************


//   function stringy(size) {
// console.log(stringy(5))
//         let res = ''
//         let size1 = size.toString()
//          if (size1.length == 0) return "1"
//        for (let i = 0; i < size1.length-1; i++){
//              if(i % 2 === 0){
//              res += 1
//              } else { 
//            res += 0
//              }
//          }
//         return res
//         }
//  console.log(stringy("111111111111111111111111111111111111111111111111111111111111111111"));


// 
//  console.log(("apple,rottenBanana,apple").includes("rotten"))
//  console.log (["rottenBanana"].toString().slice(6))

// function add(num1, num2) {
//     let a = num1.toString()
//     let b = num2.toString()
//     if (a.length  == b.length) return +a+ (+b)
//     else {
//         return 
//     }
//     a = a.padStart(num2.length, 0)
//     console.log(a)
//     b = b.padStart(num1.length, 0)
//     console.log(b)
//     let num = ""
//     for (let i = 0; i < a.length ; i++) {
//         for (let j = 0; j < b.length ; j++) {
//             num += +a[i] +(+b[j]) 
//             console.log(num)
//         }
//     }
// //     return Number(num)

//  }
// console.log(add(45,12))
// // console.log("1368".padStart(5, 0))

// ********************************************************************************************************************************
// reverse "a+b-c/d*30")) // "30*d/c-b+a"
//   [ and ] are the start and end of a character set.
//   \W means "non-word", as opposed to \w which will match a word.
//   _ is the "_" character.
//   / mark the beginning and end of a regular expression.
//   g means it's a global search.

// function solve(eq){
// //   return eq.match(/\w+|[*+/-]/g).reverse().join("") // \w+ -- repeated characters, | -- 


// //   return eq.split(/\b/g).reverse().join("");
//  return eq.split(/([-+*/])/).reverse().join("")
// }
//  console.log(solve("a+b-c/d*30")) // "30*d/c-b+a"

// ********************************************************************************************************************************


// console.log(Array.from(1,9))


// function dontGiveMeFive(start, end){
//     let array =[ ] 
//      for (let i=start; i<=end; i++) {
//         if ( (""+ i).includes(5) ) {
//             continue;
//         }   
//         array.push(i)
//     }
//     return array.length
//     }
// console.log(dontGiveMeFive(4,17))    

// console.log("15".includes("5"))


//***************************************************************************************************************************************************************** */

// function misplelled (word1, word2) {
// //return  word2.split("").filter(el => !word1.split("").includes(el)).length == 1 ? true: false 
// //console.log(b)
//  if (word2 == word1) return "True"
// //  let a = word1.split("").filter(el => word2.split("").includes(el)).length
//  //console.log(a)
//   let a =  word2.split("").filter( el => word1.split("").includes(el)).length 
//  return word2.length - a ==1 ? true : false 
// //    word2.length - .length == 1 ? true : false 
// //   console.log(word1.split("").filter(el => word2.split("").includes(el)))
// }
// console.log(misplelled('versed', 'vxersed'))
// //  console.log("versed".split("").includes('versedd'))










 //***************************************************************************************************************************************************************** */


 function digits(num){
    let arr = []
    let arr2 = (""+ num).split("")
    for (let i = 0; i< arr2.length; i++) {
      for (let j = i+1; j< arr2.length; j++){
        arr.push(+arr2[i] + (+arr2[j]))
        console.log(arr)
      }
    }
      return arr
  }
console.log(digits(156))  