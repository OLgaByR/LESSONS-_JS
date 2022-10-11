  //  let str="I" 
  //  let n=5
  //   for (i=2; i<=n; i++) {
  //   str+="\n" ;// add perenos na novuy stroky 
  //   str+=" ".repeat(i-1) +"I"
  //  } 
  //   console.log (str) 

//88888888888888888888888888888888888888888888888888888888888888888888888888888888888


// 1
// 12
// 123
// 1234
// 12345

// let n=5;
// let str="";
//  for (let i=0; i<=n; i++){ // responsible for number of steps vertically== kolichescvo strok(5)
//   for (let j=1; j<=i;j++){ // responsible for elements in horizontal line , 12, 123, 1234
//      str+=j;
//   }
//   str=str+"\n";               // dobavili perenos na novuy stroky
//  }
//   console.log (str);

// ************************************************************************************
// 54321
// 4321
// 321
// 21
// 1

//   let n=5
//   let str=""
//    for (let i=1; i<=n; i++) { // responsible for number of steps vertically== kolichescvo strok(5)
//     for ( let j=n-i+1; j>=1;j--){ // responsible for elements in horizontal line , 12, 123, 1234
//        str+=j
//     }
//     str=str+"\n"
//    }
//   console.log (str)

//************************************************************************* */

//  let row=5
//  let str=""
//  for (let i=1; i<=row; i++) {
//       str+=" ".repeat(n-i) // na pervom step i=1, then i=2
//   for (let j=1; j<=i; j++){ 
//      str+=j
//    }
//    str=str+"\n"
//    }
//   console.log (str)
 
//     1
//    12
//   123
//  1234
// 12345
//************************************************************
 
//    11
//   1221
//   123321
//  12344321
// 1234554321


// let n=5
//  let str=""
//  for (let i=1; i<=n; i++) {
//       str+=" ".repeat(n-i) // na pervom step i=1, then i=2
//   for (let j=1; j<=i; j++){ 
//      str+=j
//    }
//    for (let j=i; j>=1; j--){ 
//   str+=j
//    } 
//    str=str+"\n"
// }
//   console.log (str)
// **************************************************************************
//  let n=5
//  let str=""
//  for (let i=1; i<=n; i++) {
//       str+=" ".repeat(n-i) // na pervom step i=1, then i=2
//   for (let j=1; j<=i; j++){ 
//      str+=j
//    }
//    for (let j=i-1; j>=1; j--){ 
//   str+=j
//    } 
//    str=str+"\n"
// }
//   console.log (str)

//     1
//    121
//   12321
//  1234321
// 123454321
// ***********************************************************************************************

// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15 

// let n=5
// let num=1;
//  for (let i=1; i<=5; i++){
//   let str="";
//   for (let j=1; j<=i; j++){  
//     str+= num + " ";
//      num++
//   }
//   console.log(str);            
//  }


//**************************************************************************** */

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 


// let num=1;
//  for (let i=1; i<=5; i++){
//   let str="";
//   for (let j=1; j<=i; j++){ 
//      str+= num + " ";
//      num++;
//   }
//   console.log(str);            
//  }
 

// *******************************************************************************


//     *
//    ***
//   *****
//  ********
// **********
//*************




//  let height=5
//   for (let i=0; i<=height; i++) {
//   let str=""

//   for (let j=0; j<height-i; j++){ 
     
//      str+=" "
//    }
//    for ( let star=0; star < i; star++){
//         str+="*"
//    }
//      str+="*"
//      console.log(str)

//     for (rStar=0; rStar < i; rStar++)  {
//       str+="*"
//      }
//      console.log (str) 
// }

 
//****************************************************************************************************** */

// 1
// 22
// 333
// 4444
// 55555

// let n=5
// for (let i=1; i<=n; i++){
//   console.log((i+'').repeat(i))
// }
//************************************************************************************ */
// 5
// 44
// 333
// 2222
// 11111

// let n=5
// for (let i=5; i>=1; i--){
//   console.log((i+'').repeat(6-i))
// }

//***************************************************************************************** */

//   let n=5;
//   let str="";
//   for (let i=1; i<=n; i++){ // responsible for number of steps vertically== kolichescvo strok(5)
//   str += " ".repeat(n-i);
//   for (let j=1; j<=i;j++){ // responsible for elements in horizontal line , 12, 123, 1234
//      str+=j % 10;
//   }
//   for (let k=i-1; k>=1; k--){ //  delete 1 as 1 not 11 suppose to be in very top potomy cho digits idut po poradky
//     str+=k % 10; 
//   }

//   str=str+"\n";               // dobavili perenos na novuy stroky
//  }
                             //   drawing bottom part , above is top triangle 
//  for (let i=n-1; i>=1; i--){ // responsible for number of steps vertically== kolichescvo strok(5)
//   str += " ".repeat(n-i);
//   for (let j=1; j<=i;j++){ // responsible for elements in horizontal line , 12, 123, 1234
    //  str+=j % 10;  // dlya zchisel >10. choby izbavitsya ot 10 , dlya chisel <10 ne nado   
//   }
//   for (let k=i-1; k>=1; k--){ //  delete 1 as 1 not 11 suppose to be in very top potomy cho digits idut po poradky
//     str+=k % 10; 
//   }
  
//   str=str+"\n";               // dobavili perenos na novuy stroky
//  }

//   console.log (str);

//    1
//   121
//  12321
// 1234321
// 123454321
// 1234321
//  12321
//   121
//    1
//*****************************************************************************

// let height=3
// let str=""
//   for (let i=0; i< height; i++) {
//   for (let j=i; j< height-1; j++){ // responsib;e
//      str+=" "
//    }
//    for (let k=0; k<2*i+1; k++){ //  delete 1 as 1 not 11 suppose to be in very top potomy cho digits idut po poradky
//         str+="*"; 
//       }
//       str+="\n"
//     }
//     console.log (str)

//     *
//    ***
//   *****
//  *******
// ********* 

//**************************************************** */

// let height=3
// let str=""
//   for (let i=0; i< height; i++) {
//     str+="|"
//      console.log(33333333333333333333333333333, i)
//     console.log(str)
   
//   for (let j=i; j< height-1; j++){ // responsib;e
//      str+=" "
//       console.log(444444444444444444444 , j)
//      console.log(str)
    
//    }
//    for (let k=0; k<2*i+1; k++){ 
//         str+="*"; 
//          console.log(5555555555555555555555555, k)
//         console.log(str)
       
//       }
//    for (let j=i; j< height-1; j++){ 
//         str+=" "; 
//       }
//        console.log(666666666666666666666666666666666666666666, "!")
//        str+="|"
//       str+="\n"
//       console.log(str)
//     }
//     console.log (str)

    // |    *    |
    // |   ***   |
    // |  *****  |
    // | ******* |
    // |*********|
//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888

//   let n=5;
//   let str="";
//   for (let i=1; i <= n; i++){ 
//     let num=i
//   for (let j=1; j <= i; j++){ 
//      str+= num +" "
//      num=num+ (n-j)
//   }
//   str+="\n";
//   }
//  console.log(str)


//  1 
//  2 6 
//  3 7 10 
//  4 8 11 13 
//  5 9 12 14 15 
// *************************************************************************************