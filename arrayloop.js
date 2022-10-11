
//- ---------------------------------------ARRAYS-------------------------------
// //  arrays will be  mutated
// // const arr=[1, 2, 3, 4];
// // const arr1=arr;
// // console.log (arr1)
// //         arr1.push ("hello")// first array will be mutated too  [1, 2,3, 4. "hello"];
// // console.log (arr1)

// console.log(arr.at(-1)) // last element , same as arr[arr.length -1]

// const arr=[1, 2,  null, "kiwewewh", [ 12,4, 5],  {} , 319, 83];

// const arr2= new Array (...arr);//[ 1,2,3,4,5] {} same as if we wrote const arr2=[...arr]
// // console.log (arr);

// // arr2.push (5) // add element to the end 
// // console.log (arr2)

// // // arr2.shift () // delete first element 
// // // console.log (arr2);

// console.log(arr2.length);
// // console.log(arr2[2]);// show element 2=3 

// // console.log(arr2[length-1]);//7

// console.log(arr2[arr2.length-1])// shows last element in array =83

// console.log(arr2.indexOf("kiwewewh")) // 3 

// console.log(arr2.indexOf(1, 3)) // we say look for 1 after index ( element 3 ), 
// console.log(arr2.indexOf(null,1))// 2 element 

// arr2 [1]=3 // we changed element 1 to value 3, we can do anything to values in array, +-/ nd ect
// console.log (arr2)//[1, 3,  null, "kiwewewh", [ 12,4, 5],  {} , 319, 83];

// arr2.push (4, 8, "po") // add any number of elements to the end
// console.log (arr2) //[1, 2,  null, "kiwewewh", [ 12,4, 5],  {} , 319, 83,4, 8,"po"];


// console.log (arr2.pop ()) // 83 POP deletes the last elememnt and shows what was deleted 
// console.log (arr2.unshift (23, 44, 55) )//  UNSHIFT shows length of new array and add any element to beginning !!!![23,44,55,1, 2,  null, "kiwewewh", [ 12,4, 5],  {} , 319, 83]
// console.log (arr2.shift())//23         SHIFT  deletes first element 
// //all metods who ADD shows new length , all metods which DELETE show what was deleted
// console.log (Array(2)) // [undefined, undefined] you may enter any length. if Array (3)= [undefined, undefined,undefined ] as if you reserve emply array , later you can add new values to elements

// const arr=[1, 2, 3, 6, 7]
// arr.pop()
// arr.shift()
// console.log(arr.join())
// console.log(splice(index, delete CountQueuingStrategy, el..eN))
// arr.splice(2,2, "k" ) // el 2 will be deleted too
//  arr.splice(2, 0, 56) = it will not delete anything, 0== delete count 
// console.log(arr)


// const arr1=[1]
// const arr2=[2]
// const arr3=["student"]
// let result=arr1+arr2+arr3
// console.log (result) //12student
// operator spread will link two arrays in one array. or we can use arr1.push (arr2) and result will be [1,2,3,[2,4,5]]
// let result=arr1+arr2
// console.log (result) //1,2,32,4,5



// let result2=arr1+ ", " +arr2 //1,2,3, 2,4,5
// console.log (result2)
// console.log ([...arr1,...arr2]) // [1,2,3,2,4,5]
// console.log (arr1[0]+arr2 [1])//5=1+4


// let g="343ko35u"   values have to be written 345.6, not 345,6 and only must be located in the [0] elements of array 

// console.log (parseInt (g))//343
// let g="343.7879ko35u"
// console.log (parseFloat (g)) //343.787

// function century(year) {
//  const arr=[year]
// arr=Number (arr)
//  if (1<=arr[2]<=99 && 1<=arr[3]<=99) {
// console.log (arr[0]+arr[1]+1)
//  }   if (array[2]==0 && array[3]==0) {
//   console.log  (arr[0]+arr[1])
// }


// loops 
// const arr=[];
// let i=0;
// for (; i<6; i++) {
//   console.log (i) 
// arr.push(i);
// }  // )) ARE VERY IMPOTRANT AS WE CLOSE LOOP DEPENS WERE THEY ARE 
// console.log(arr);

// LETS SHOW ONLY ODD NUMBERS 
// for (i=0; i<10; i+=2) {
//   console.log (i) 
// } 
// SAME BUT IN ARRAY 
//  const arr = [1,2,3,4,5,6,7,8,9,10]
//  for (i=0; i<10; i+=2) {
//   console.log (arr[i])
// } 
//--------------------------------------inline varuable declaration 
// for (i=5; i>=-2; i--) {
//   console.log (i) 
// }  // 5,4,3,2,1,0,-1,-2
//---------------------------------------outsude varuable declaration 
// let i=0
// for (; i<3; i++) {
//   console.log (i)// 0,1,2 inside of loop , because loop if i=3  stopted, then we have concole outside of loop i=3 and it shows 
//   } 
// console.log (i) // 3      console is outside of loop


// / --------------------------------example with loop 
// const arr = [1,2,3,"hi", 7,8,9,10]
//  for (let i=0; i<arr.length; i++) {
//   // console.log (i) // 0,1,2,3,4, 5,6,7
// console.log (arr[i])// [1,2,3,"hi", 7,8,9,10]
// }

// const arr =[1,2,3,"hi", 7, 8, null, 10]
//  for (let i=0; i< arr.length; i++) {
//  if (typeOf arr[i]==="number") {  
// console.log (arr[i]*2)
//  }
// }


// const arr=[1,2,3,"hi", 7, 8, null, 10]
// const arr1=[]
//  for (let i=0; i< arr.length; i++) {
//  if (typeOf arr[i]==='number'){  
//  arr1.push (arr[i]*2)
//  }
//  console.log (arr1)  
// }


// const arr=[1,2,3,"hi", 7, 8, null, 10]
// const arr1=[]
//  for (let i=arr.length-1; i>=0; i--) {
//  if (typeof arr[i] === "Number") {  
//  arr1.push(arr[i]*2)
//  }
// }
// console.log (arr1)

// const arr =[1,2,3,"hi", 7, 8, null, 10]    // 
//  for (let i=arr.length-1; i>=0; i--) {
//  console.log (arr[i], i)
// }
// // 10 7 // 10 elment , 7index
// null 6
// 8 5
// 7 4
// hi 3
// 3 2
// 2 1
// 1 0

// task to write following string 
// "1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15 
// 16 17 18 19 20"

// let str= " "
// for (i=1; i<=20;i++) {
//     str+=i
// } console.log (str) //1234567891011121314151617181920

// // solution 
// let str= " "
// for (let i=1; i<=20;i++) {
//     if (i % 5==0) str+=i + " "+ "\n"; // we add probel i perenos dlya stok  na 5, 15 )
//     else str+=i+ " "
// }
// console.log (str.trim())

//************************************************************************************************************************* */

// find a simbol  in array
// const array =["mam", "padas", "uefhs"]
// function search  (array) {
//     for (let i=0; i<array.length; i++) {
//         for (let j=0; j<array[i].length; j++) {
//             if (array [i][j]=="s") {
//             return array[i]
//         }
//     }
//     }
// }
// console.log (search (array))

// const arr= ["jrgkfjn", "kfief"]
// console.log (arr[0][3])// k element 3 v pervom ele array
//************************************************************************************************************************* */

// // reverse array 
// const arr =[1,2,3,"hi", 7, 8, null, 10]
// const arr5 = " "
//  for (let i=arr.length-1; i>=0 ; i--) {
//   arr5.push(arr[i]);
//  }
//  console.log (arr5);

//ili idem s nachala i delaem unshift
//  const arr =[1,2,3,"hi", 7, 8, null, 10]
// const arr5 = " "
//  for (let i=0; i<arr.length-1; i++) {
//   arr5.unshift(arr[i]);
//  }
//  console.log (arr5);

//************************************************************************************************************************* */

//with string 

// let string ="hello my dear!"
// let string2 = " "
//  for (let i=string.length-1; i>=0 ; i--) {
//     string2+=string[i]; // string2= string2+ string[i=!]
//     console.log (string2) // we will see what we are doing on each iteration 
//  } // !+r+a
//  console.log (string2);
//************************************************************************************************************************* */

// without adding an extra array 
//  const arr =[1,2,3,"hi", 7, 8, null, 67, 10]

//   for (let i=0; i<arr.length/2; i++) {
//    let temp=arr[i];
//    arr[i]= arr[arr.length-1-i] // arr[0]= 10-0, arr[1=2]= null i tAKK DALEE,
//   }
//   console.log (arr);
//************************************************************************************************************************* */

// while (condition ){
//     delai to to
// }
//  let i=0
//  const arr= []
//  while (i<3) {
//     i++// important where we put increment see ex below we first increment , then push 
//     arr.push(i)
//  }
// console.log (arr) //[ 1, 2, 3 ]
//************************************************************************************************************************* */

// let i=0
//  const arr= []
//  while (i<3) {
//     // important where we put increment see ex below 
//     arr.push(i)
//     i++
// 
//  }console.log (arr) [ 0, 1, 2 ] because we first push and then increment 
//************************************************************************************************************************* */

// fill array fronm 0 to n  without sertain character, for exp "2"
// function fillArray (num, X) {
// const array =[ ] 
//  for (let i=0; i<=num; i++) {
//     if (i!==X) {
//      array.push(i)
//     } continue;
// }

// return array
// }
// console.log (fillArray (8,3));
//************************************************************************************************************************* */

// let str= ""
// for (let i=0; i<5; i++) {
//         if (i===1) {
//      continue;// propusti 
//         }
//       str+=i ; 
//     }  
//     console.log(str)
//************************************************************************************************************************* */

//  let arr=["mamas",["mys, mi, nre"], "papas", "sam"]
// for (let i=0; i< arr.length; i++) { 
//       for (let j= i+1; j < arr[i].length; j++) {
//       if (arr[i][j]==="s") {    
//        } 
//     }
//   console.log (arr[i]);
//  }
//   const arr=[1,2,3, 2, 5,4, 12, 7, 7]
//   let arr1=[]
//   for (let i=0; i< arr.length; i++) { 
//   if (arr[i]>2 && arr[i]<5){
//    arr1.push("senior")
//   } else arr1.push("po")
// }
//  console.log(arr1)
//************************************************************************************************************************* */

//  let data=[[45, 12],[55,21],[19, -2],[104, 20]]
//   let result=[]
//   for (let i=0; i< data.length; i++){
//    if (data[i][0]>=55 && data[i][1]>7) {
//      result.push("Senior")
//   } else {
//    result.push("Open")
//   }
//   }
//    console.log(result) 


//************************************************************************************************************************* */


//  ne rabotaet 
// function removeSmallest(numbers) { 
//     let arr=[]
//     if (numbers.length<=0 || numbers.length==1) return [];
//     let min=numbers[0]
//     for (let i=0; i < numbers.length; i++){
//       if (numbers[i] < min){
//         numbers[i]=min 
//       }
//       if(numbers[i]==min && numbers.indexOf(numbers[i]) < numbers.indexOf(min)){
//          continue;        
//       } else  {
//         arr.push(i)   
//     }
//        console.log(arr) 
//    }  
//    removeSmallest([5, 3, 2, 1, 4 ])


//************************************************************************************************************************* */



// function getDivisorsCnt(n){
// let n1=""+n;
// let count=0 ;
//  for (let i=n1; n1>0; i--){
//    n1+=i
//      if (n % n1[i] == 0){
//        count++;
//      }
//    }
// console.log(count); 
// } 
// console.log(getDivisorsCnt(10))

// let arr=[2,4,58,3,7,11,65,34,9]
// let arr1=arr.sort((a,b)=>b-a)
// console.log(arr1)

//************************************************************************************************************************* */

// function powersOfTwo(n){
//    let n1=[];
//   while (n>0){
//      n1.push(n*2);
//       n--;
//       if (n==0){
//        n1.push(1)
//      }
//    }
//    console.log(n1) ;
//  }
//  console.log(powersOfTwo(4));

// let arr=["mango", "43o4"]
// console.log(arr.includes("43"))



//***************************************************************************************************************************************************** */
// let arr = [10, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 10, 'abc'];
//  var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//  const pets = ['cat', 'dog', 'bat'];
//  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// function arrLongest (arr) {
//     let longest=arr[0].length
//     // let num=0
//     for (let i=0; i<arr.length; i++){
//         if (longest< arr[i].length) {
//             longest=arr[i].length
//             //   num=i
//         }
//     }
//     return  longest
// }
// console.log(arrLongest(pets))
//************************************************************************************************************************************************************ */
// function findNumber(arg) {
//     for (let i=0; i<arg.length; i++){
//     //  if (typeof (arg[i]) === "Number")
//     //    console.log(arg[i]);
//         for (let i=0; i<arg[i].lengt; i++){
//             if (typeof (arg[i][j]) == "Number") 
//             console.log(arg[i][j])
//         }
//  }
// }
// findNumber(arr)

// function findNumbers (arg){

//     for(let i = 0; i < arg.length; i++){
//       if(typeof(arg[i]) == 'number')
//       console.log(arg[i]);
//       for(let j = 0; j < arg[i].length; j++){
//       if(typeof(arg[i][j]) == 'number')
//       console.log(arg[i][j]);
//       } 
//     }  
//   }
//   findNumbers(arr);

//*************************************************************************************************** */


// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same
//  value next to each other and preserving the original order of elements.
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']


// function uniqueinOrder(iterable){
//     let arr=[]
//     for (let i=0; i<=iterable.length-1; i++) {
//     if (iterable[i] !== iterable[i+1]) {
//         arr.push(iterable[i])
//     }
//    }
//     return arr
// }
//    console.log(uniqueinOrder('AAAABBBCCDAABBB'))
//********************************************************************************************************* */


// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// function flattenAndSort(array) {
//     let arr = []
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j <=array[i].length ; j++) {       
//              arr.push(array[i][j]) 
//             //  console.log(arr)
//             }
//         }
//       return arr.sort((a, b) => a - b)   
//     }
// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))


// let arr=[[3, 2, 1],[4, 6, 5],[],[9, 7, 8]]
//  console.log(arr.length)
//*********************************************************************************************************************************************** */
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// function flattenAndSort(array) {
//     let arr = []
//     for (let i = 0; i < array.length; i++) {
//              if (array[i].length ===0 || array[i] == "," ){
//                  continue; 
//              }
//              arr.push(...array[i])
//         }
//       return arr.sort((a, b) => a - b)   
//     //   
//     }
// console.log(flattenAndSort([[3, 2, 1],[],[4, 6, 5],[],[9, 7, 8]]))

// BEST SOLUTION 
// return [].concat(...array).sort((a,b) => a - b);
// /************************************************************************************************************************************************************ */

// Write a function which returns a new string containing the same character sequences
//  except the first and the last ones but this time separated by spaces.

// function array(arr){
//     if (arr.length==0) return null
//     let a = arr.split(",")
//     console.log(a)
//      a.pop()
//      a.shift()
//    return a.toString().replaceAll(","," ")
//    }
//    console.log(array('1,2,3,4,5'))

// /************************************************************************************************************************************************************ */

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
//  Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// function repeats(arr){
//     return arr.filter(el=> arr.indexOf(el) == arr.lastIndexOf(el)).reduce((accum, el) => accum + el)
//     console.log(arr)
 
//     }
//     console.log(repeats([9, 10, 19, 13, 19, 13]))

// /************************************************************************************************************************************************************ */

// ???? Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// function high(x){
//     let a = x.split(' ').sort ((a, b) => a.length - b.length)
//     console.log(a)
//    return a[a.length-2].length == a[a.length-1].length ? a[a.length-2] : a[a.length-1]
//     }
//     console.log(high('what time are we climbing up the volcano'))

// /************************************************************************************************************************************************************ */


// CALL BACK FUNCTIONS 

// .forEach                    return nothing

// const arr = [-1, -3, -4, -7, -9, -7, -4, -8]
//  const changeSign = function (el) {
//  console.log(-el)
//  }
//  changeSign(arr[0])

//  arr.forEach(ChangeSign)

//  const changeSign = el => console.log(-el)

//  arr.forEach(el => console.log(-el))
 
//  arr.forEach((el, i) => i % 2 == 0 ? console.log(-el) : "!")

//  arr.forEach( el => console.log(el**3)) 
// ********************************************************************
// .sort 

// const arr = ["anna", "steave"," koy"]
// console.log (["8","9"].map(el => +el)) 
// console.log((["8","9"].map(el => Number(el))))

// console.log(arr.map(el => el.length))
// console.log(arr.map((el, i, arr) => i==0 || i == (arr.length-1) ? `**${el}**` : el))
// [ '**anna**', 'steave', '** koy**' ]
// .reverse())

// ********************************************************************
// reduce(accumulator, el, index. array) => {....}, initial value)

// const arr= [1, 2, 3, 5, 7, 8]

// console.log(arr.reduce((sum, el) => sum + el, 0))

// console.log(arr.reduce((prod, el) => prod * el, 1))
// *************************************************************
// array.rom // fill
// keys 

// let finish=25
// let start = 10
// const a = Array.from(Array(finish-start+1).fill(start))
// console.log(a)

// console.log([...Array(11).keys()])
// *************************************************************
// Array.of same type of elemebt as indicated
// console.log(Array.of(10, null, "Anna")) 

// *************************************************************
//Array.isArray()

// console.log(Array.isArray(null)) // false 
// let a= 123
// let n= 120




// array.splice(index, howMany, [element1][, ..., elementN]);
// index − Index at which to start changing the array.
// howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.
// element1, ..., elementN − The elements to add to the array. If you don't specify any elements, splice simply removes the elements from the array.

// let fruits = ["Banana", "Orange", "Apple", "Mango"]

// console.log(fruits.splice(2, 0, "Lemon", "Kiwi")) // Banana,Orange,Lemon,Kiwi,Apple,Mango

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(friuts.splice(2,2 ) // Banana,Orange,Kiwi


// arrayObject.splice(a,b,[c,d,e,...,z])
// Then ask yourself three questions:

// Where do I start removing elements?   ---- a
// How many elements need to be removed? ---- b
// What elements should be added after the removal of the element?
// --- c,d,e,...z

// function removeOdd(arr){
//     //remove odd number of arr
//     for (var i=arr.length;i>=0;i--)
//       if (arr[i]%2) arr.splice(i,1)
//     return arr;
//   }
//   console.log(removeOdd([1,2,3,4,5]))   //output: [ 2, 4 ]
//   console.log(removeOdd([1,3,5,7,9]))   //output: []



// *******************************************************************************************88


// ??
// https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript

//  function checkifArray(arr) {
//    if (arr.length == 1  && Array.isArray(arr[0][1])) return true 
//     for ( i = 0; i < arr.length; i++){   
//       if ( Array.isArray(arr[i])) {
//           return true
//         }
// }
//      return false  
//     }
//     console.log(checkifArray([[],{}]))

// *************************************************************************************************************

// const arr= [1, 2, 3, 5, 7, 8]
// console.log(arr.shift()) //   1
// console.log(arr) // [ 2, 3, 5, 7, 8 ]

// console.log(arr.unshift(6)) //5 new length 
// console.log(arr) // [ 6, 2, 3, 5, 7, 8 ]

// **************************************************************************************************************

// Test.assertSimilar(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) , [[9,1,2],[3,4,5],[6,7,8]]);
// Test.assertSimilar(infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2)  , [[3,4],[5,6,7,8],[9,10,1,2]

// function add(num1, num2) {
//     let padded = padStart((num1.toString(), num2.toString()))
//     console.log(padded)
//     let final = '';
//     let paddedOne = padded[0].split('');
//     padded[1].split('').map( (c, i)=>{
//        let int = ( parseInt(padded[1][i]) + parseInt(paddedOne[i]) ).toString();
//        final += int
//      })
//     return parseInt(final);
//   }

// //  console.log(add(2,13))
//  let a = 123
//  console.log(padStart((123).toString()))