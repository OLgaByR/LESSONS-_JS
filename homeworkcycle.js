
// --prime number  
// for (let i=2; i<=13; i++) {
//   let a=true
//   for (let j=2; j<i; j++) {
//   if (i%j==0) a=false     
//   } 
//   if (a==true) console.log (i)  
// } 
//  variant 2 nr rabotaet 
// let n=10
// for (let i=2; i<=n; i++) {
//  if (n%i!==0 && i%2!==0)
// i++
//  console.log (i) 
// }
 
 // “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”

    // мы знаем, что оно означает “You are the best QA ever”.

// let string="Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
// let stringNew=""
// for (i=0; i<=string.length-1; i++) { 
//    if (string[i]==="b" && string[i+1]==="r" || string[i]==="r") continue;    
//    stringNew+=string[i]
//   }
//     console.log (stringNew)
    

   


  //  const arr=[2,45,6,7,8,2,2,8,7]
  //  let countM=0
  //  let countW=0
  //  for (i=0; i<=arr.length-1; i++) {
  //   if (arr[i]===8) 
  //  countM++
  //   if (arr[i]===2) {
  //    countW++
  //    }   
  //   }   
  //     console.log(countM, countW ) 
   
//   array without numbers divideble by 5
// const arr=[]
// for (i=0; i<=20; i++) {
//   if (i % 5==0) continue;
//    arr.push(i)
//   }    
//   console.log(arr) 

//   let str = [ '(', ')', '(', ')', ')'];
//   let sum1 = 0;
  
//   for (i = 0; i < str.length; i++){
//     if ( str[i] == '(' && str[++i] == ')' ) {
//       sum1 = sum1 + 1;
//       console.log(  sum1 + " скобки закрыты")}
//     else {console.log( (sum1+1) + " скобки не закрыты")}
//     }
  
  // const arr = [];
  // let x = 0;
  // for (i = 0; i <= 20; i++){
  //     if (i % 5 != 0){
  //       arr[x] = i;  
  //       x++; 
  //     } 
  // }
  // console.log (arr)
   
   
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] 
 
// const str=[ "(", ")", "(", ")", ")", ")"]
// let sum1=0
// let sum2=0 
// for (i = 0; i < str.length; i++) {
//     if ( str[i] === "(") sum1++
//     else if (str[i] === ")") {
//         sum2++  
//      }        
// } 
// console.log ((sum1==sum2)? "скобки закрыты" : "скобки не закрыты"); 
// ***********************************************************************************************************   
//  reverse string hello to olleh

// let str="hello"
// let str1=[]
// for (let i=str.length-1; i>=0; i--) {
// str1+=str[i]
// }  
// console.log (str1)
// *********************************************************************************************************
// const array=['hello,world', 'this', 'is',  'great']
// console.log (array.join(""))
// console.log (array.join(' '))

// *********************************************************************************************************
// Vernut squre gitits chisla

// function squareDigits(num){
//   let str=num.toString()
//   let strSQ=""  
//   for ( let i=0; i<=str.length-1; i++) {
//    strSQ+=str[i]**2  
//    console.log (strSQ) 
//   }
//   return strSQ*1
// }
// console.log(squareDigits(2312))
// *********************************************************************************************************
//  only odd numbers 
//  const arr = [1,2,3,4,5,6,7,8,9,10]
//  for (i=0; i<10; i+=2) {
//   console.log (arr[i])
// } 


// *********************************************************************************************************

//  

///****************replace char in string ***************************************************************************

// let str="ttttTTTTfdu"

// console.log (str.replaceAll("t","u"))
// console.log (str.replace(/["T"]/g, "U"))
// console.log (str.replace(/["T"]/g, ")"))


// let str="t"
// {
//   if (str.length%2==0) {
//     console.log (str[str.length/2-1]+str[str.length/2])
//   } else if (str.length%2!==0) {
//     console.log (str[(str.length-1)/2])
//   } else console.logs (str[str.length-1])
// }

// const array=[6, 2, 1, 8, null, 10]
// let isemp=array.includes(null)
// console.log (isemp)
// // console.log () 
// // let min=0
// const arr=[null, null,   , ] 
// console.log (arr.length) //3 


//*******************************************************************************************************************)
//  sum without min max 
// const array=[3,10,5]
// let min=Math.min(...array)
// let max=Math.max(...array)
// let x=array.indexOf(min)
// let y=array.indexOf(max)

// console.log (min, x)
// console.log (max, y)
// let sum=0;
// let min=array[0]
// let max=array[0]
// for (let i=0; i<=array.length-1; i++) {
//    if  (array[i]<min)   {
//     min=array[i]
//    } if (array[i]>max) {
//      max=array[i] 
//    }   
//    sum+=array[i]; 
//   //  console.log (sum)
//   console.log (sum-min-max);
// }
 
// return (! array || array.length==1|| )? 0: sum // condition if array is null or lenth=0 or lenth=1


  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// ****************************************************************************************************************


// *********************************************************************************************************

    
 
//*********************************************************************************************************************)
//   array= [3,45,6,1,2,2,1]

//  console.log(array.splice(2,1)) // 2 =index el 6; 1-ckolko eleentov budem udalyat  delete 6
//  let array2=[]
//  array2.push (array) 
//  console.log (...array2)
//  let result=Math.min(...array)
//  console.log (result)
//   console.log (array.indexOf(result))// t.e pevui 
//   //console.log(array.splice(min,1))
// console.log (array.indexOf(1))
// console.log (******************************************************************************************************************)
// sum of two arrays 
// const arr=[1,2,4, 6,8,9,-7]
// const arr1=[2,5,-5,7,8,8,6]
// sum=0 
// for (let i=0; i<=arr.length-1; i++) {

//   sum+=arr[i] +arr1[2]
// }
// console.log (sum)
// console.log (******************************************************************************************************************)

//  slozhit chisla dvuh arrays 

// const arr=[1,2,4, 6,8,9,-7,98]
// const arr1=[2,5,-5,7,8,8,6]
// let sum=0 
// for (let i=0; i<=arr.length+arr1.length; i++) {
// if ( i<arr.length) {
//   sum+=arr[i]
// } else {
//   sum+=arr1[i - arr.length]
// }
// }
// console.log (sum)

// let arr = [1, 2, 10, -5, 7, 25, 100, 98, 15];
// let arr2 = [25, 56, 1, 25, 7, 78, 98];
// let sum = 0;
// for (let i = 0; i < arr.length + arr2.length; i++) {
//     if (i < arr.length) {
//         sum += arr[i];
//     } else {
//         sum += arr2[i - arr.length];
//     }
// }
// console.log(sum);

// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//     sum1 += arr2[i];
// }
//  console.log(sum1)
// console.log (******************************************************************************************************************)




//  ************* check if char is unique (isogram) ingore the case sentive  I i *****************************************************

// let word="mosSe"
// word=word.toLowerCase()
// let result=true
// for (let i=0; i<=word.length-1; i++) {
// if (word.indexOf(word[i])!==word.lastIndexOf(word[i])) {
//   result=false
// }

// }console.log (result)
// **********************************************************************************************************************

//  let number="12 34 6 8 9"
// let number1=number.split(" ")
// console.log (number1)
//************************************************************************************************************************
// return first element which is not concecutive 

// const arr=[1,2,3,4,6]
// let cocs=arr[0]
//   for (let i=0; i < arr.length; i++) {
//     if (arr[i]!==arr[i+1]-1) {  
//      cocs=arr[i+1];
//      break;
    
//    }     
// }  console.log (cocs)

 
// const str="tdint"
// console.log (str.replaceAll("t","u"))
// console.log (str.replace(/["T"]/g, "U"))
// console.log (str.replace(/["T"]/g, ")"))



// let strNew=""
//  for (let i=0; i<=str.length-1; i++) {
//  for (var j = i+1; j < i; j++) {
//   if (str[i] === str[j]) {  
//   strNew+=str.replaceAll("str[i]", "(")
// //  } if (str[i] !== str[j]) {
// //   strNew+=str.replaceAll("str[i]", ")")
// //  }

// console.log (strNew)



// let string="HePPo"

// let str2=string.replaceAll(/P/g, "P".toLowerCase ())
// console.log(str2)

// let Upper=""
// let Lower=""
// for (let i=0; i<string.length; i++){
//   if (string[i]==string[i].toLowerCase()){
//     Lower+=string[i].toUpperCase();
//   } else if (string[i]==string[i].toUpperCase()){
//     Upper+=string[i].toLowerCase()
//   }
//   return string.replace("")
// }



    // let n=5
    // let str=""
    //  for (let i=1; i<=n; i++) {
    //   str+=" ".repeat(n-i);
    //   for ( let j=1; j<=i; j--) { // responsible for elements in horizontal line , 12, 123, 1234
    //      str+=j;
    //   }
    //   str=str+"\n";
    //  }
    // console.log (str)
    
    
    // let number=10
    // let total = 1;
    // for (let i = 1; i <= 4; i++) { 
    //   total = total * number;
    // }
    // console.log(total) 
    // let power=4
    // let number=10
    // let result = 1;  
    // while(power>0) {
    // result*=number;
    // power--;
    // }
    // console.log(result);
    
    // let str= "helly oooo";
    // let i=0
    //  while (str[i]!=="0"){
          
    //  }
    
    // let result=str.slice(-1,5)

    // console.log (result)

    // for (let i=0; i< str.length; i++){
    //   if (str[i]=="o") {
    //     str=str.slice(-1,0)
    //   }
    //   console.log (str)
    // }
    
    
    // str2=str.slice(-1, 0);
  
   
    // console.log (str2)


    // function arr (N) {
    //   let b
    //   let arr=[]
    //   for (let i=N; i>=0; i--) {
    //     // arr[i]=i
    //    arr.push(i)
    //  }
    //    return  arr
    //  }
    // console.log (arr(10))







  
//   function Jadenway (str) {
//   let strJaden=str.split(" ")
//    for (let i=0; i<strJaden.length; i++) { 
//   strJaden[i]=strJaden[i][0].toUpperCase()+strJaden[i].slice(1)
//  } 
//  console.log(strJaden.join(' '))
// }
// Jadenway ("How can mirrors be real if our eyes aren't real")
// // console.log(strJaden[i].slice(1))
// //  console.log (nameme ("How can mirrors be real if our eyes aren't real"))