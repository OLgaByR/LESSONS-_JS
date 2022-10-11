// let start= "Coffee preparation"
// let step1= "1. Take two spoons of coffee."
// let step2= "2. Boil water and pour in coffee." 
// let step3= "3. Add milk and sugar if desired."
// document.write(start, "<br>", step1,"<br>", step2,"<br>",step3, "<br>")
// console.log(start,"\n", step1,"\n", step2,"\n",step3,"\n")


// let firstName="John"
// let lastName="Adams"
// document.write(firstName,"&nbsp", lastName,"<br>" )

// firstName="Anna"
// lastName="Karenina"
// document.write(firstName,"&nbsp", lastName, "<br>")

// let message=firstName
// firstName="ANNA"
// let message2="KARENINA"
// document.write(message, "&nbsp", message2,"<br>")


// let user= "Ivan"
// document.write (`Hello, ${user}!`, "<br>")
// console.log(`Hello, ${user}!`, "\n")
// let user2="Olya"
// document.write (`Hello ${1}`, "<br>")
// console.log(`Hello ${1}`, "\n")
// document.write (`Hello, ${user2}`, "<br>")
// console.log(`Hello, ${user2}`, "\n")
// document.write(`Hi, ${user} and ${user2}`,"<br>")
// console.log(`Hi, ${user} and ${user2}`,"\n")

// let visitor=prompt ('what is your name?') 
// document.write (`hello, ${visitor}`, "<br>")
// let admin=confirm(`welcome, ${visitor}`, "<br>")
// console.log(`hello, ${visitor}`, "\n")
// console.log(confirm (`welcome, ${visitor}`), "\n")

// preobrazovanie//
//  let num=123
// alert (typeof (num ))
// num=String(num)
// alert (typeof (String))
// console.log (typeof num)
// let text="my"+" "+"dog"
// console.log(text)
// let n=2
// n+=5
// n*=2// first n beacame 7 (5+2), then 7*2=14 
// console.log(n)
// let counter=1
// counter=2*counter
// console.log (counter++)// decrement turned 2-1

// let a = 1, b = 1;

// let c = ++a; //2
// let d = b++; //1
// console.log (c, "\n", d)
// let a = 2;
// let c=2
// let x = 1 + (c *= 2)//5
// console.log(x)

// "" + 1 + 0?//1                                                      
// "" - 1 + 0//-1
// true + false//1
// 6 / "3"//2
// "2" * "3"//6
// 4 + 5 + "px"//"9px"
// "$" + 4 + 5//"$45"//operator + always put stuff toghther
// "4" - 2?//2
// "4px" - 2//Nan
// "  -9  " + 5//"-9 5" 
// "  -9  " - 5//"4"
// null + 1//false
// undefined + 1//false
// " \t \n" - 2//" \t \n" - 2


// "  -9  " + 5 = "  -9  5" // 
// "  -9  " - 5 = -14 // 
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)

// Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.
// Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.
// Сложение со строкой превращает число 5 в строку и добавляет к строке.
// Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
// null становится 0 после численного преобразования.
// undefined становится NaN после численного преобразования.
// Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.
// let name="poul"
// let name2="ksle"
// console.log(name, "\t",name2)


// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// // alert(+a+ +b); // 12
// alert(Number(a)+Number(b))
// function orderOperations () {
//   return  (2+2)*(2+2)*2
// }
// let a=5
// let b=8
// let perimetr=(a+b)*2
// console.log(perimetr)

// let square=a*b
// console.log(square)

// let name="Olga"
// let city="Houston"
// name="anton"
//   city="london"
// let mess=(`Hello, my name is ${name},  i live in ${city} `)
// // // console.log (mess)
// let user=prompt ("who are you?")
// if (user=="admin") {
//   let pass=prompt ("enter password")
// } if (pass==="i am boss") {
//   alert ("have a good day")
// } if  (pass===null||pass===" ") {
//   alert ("wrong password") 
// }
// else {
//     alert ("cancelled")
//   } 
// else  (user===" "||user===null) {
//  alert ("cancelled")
//  }
// max number 

// 1. Найти максимальное число из трех

// let num1="num1"
// let num2="num2"
// let num3="num3"
// num1=5
// num2=78
// num3=4879

// if (num1>num2>num3) {
//   console.log (num1)
// } else if (num2>num1>num3) {
//   console.log (num2)
// } else  (num3>num2>num1) 
//   console.log (num3)



// odd number 
// let number1=45
// let number2=88

// if (number1 % 2==0 && number2 %2!==0 ) {
//  console.log (number2);
// } else (number1 % 2!==0 && number2 % 2==0) { 
//  console.log (number1);
// } 

// // if divided possible and show result== %
// let C=17
// let D=3
// if (C/D!==NaN) {
//   console.log (C%D)
// // }
//----------------------------------------------- 5. Определить високосный год или нет
// Високосные года делятся нацело на 4. Однако из этого правила есть исключение: 
// столетия, которые не делятся нацело на 400, високосными не являются. 
// let year;
// year=1601
// // console.log (year)
// if (year%4==0 && year%400==0) {
// console.log("year is leap:" ,  year) 
// } else   (year%4!==0 && year%400!==0 ) { 
// console.log ("year is non leap:" , year)
// } else console.log ("year is  leap:" , year)
// }

// //                    Определить существование треугольника и его тип
// Даны длины трех отрезков (AB, BC, AC). Нужно определить возможность существования треугольника, составленного из этих отрезков. Если такой треугольник существует, то нужно определить тип треугольника (определить, разносторонний, равнобедренный или равносторонний)
// let aB=a
// let bC=b
// let aC=c
// a=5
// b=6
// c=3
//  if (a+b>c && b+c>a && c+a>b) {
//  document.write ("triange is possible", " ") 
//    if (a==b) {
//      document.write ("равнобедренный") 
//    } else if (a==b==c) {
//      document.write ("равносторонний")
//    } else if  (a!=b!=c) {
//      document.write ("разносторонний")
//    }
//    }  else
// document.write ('triange is not possible')

// let counter=23
  // console.log (counter--)// 23

// let user=prompt ("who are you?")
// let pass=prompt ("enter password")
// if (user=="admin"&& pass=="i am boss") {
//   alert ("have a good day")
// }
// else if  (pass===null||pass===" "||pass!=="i am boss") {
//   alert ("wrong password") 
// }
// else if (user==" "||user==null||user!=="admin"){
//   alert ("i dont know you")
// }
// else  {
//   alert ("canceleld")
// }

// for (i=2; i<10;i++) {
//     if (i%2==0) {// 
//       alert (i)
//     }
  
  // }
// let counter=23
// // ++counter
// console.log(++counter)


//   ----------------------calculator with swich  ----

// let a
// let b
// let operator="operator";
// a=5
// b=5
// operator="*"
// if (a===Number(a) && b===Number(b)) {

// switch (operator) {
//   case "+": 
//      document.write ( a + b)
//     break;
//   case "-":
//     document.write (a - b)
//     break;
//   case "/":
//     if (b==0) {
//        document.write ("can not be performed")
//     } else 
//       document.write (a / b) 
//     break;
//   case "*":
//     document.write (a * b)
//     break;
//   default: 
//   document.write( "enter operators only" )   
//    break;
// } 
// } else document.write( "enter numbers only" )



// let season
// season=5

// switch (season) {
//   case 1: 
//    case 2:
//   case 12:
//     document.write ( "winter") 
//     break;

//   case 3:
//   case 4:  
//   case 5:
//   document.write ("spring")
//     break;
    
//   case 6:
//   case 7: 
//   case 8:
//     document.write ("summer") 
//     break;

//   case 9:
//    case 10:
//    case 11:
//     document.write ("fall")
//   break;
    
//   default: 
//   document.write( "enter seasons between 1-12" )   
//    break;
// } 


// function sameCase(a, b){
//     let lower = 'abcdefghijklmnopqrstuvwxyz'
//     let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     if (!lower.includes(a) && !upper.includes(a) || !lower.includes(b) && !upper.includes(b)) {
//         return -1
//     }
//     else if (lower.includes(a) && lower.includes(b) || upper.includes(a) && upper.includes(b)) {
//         return 1
//     } else {
//         return 0
//     }
// }


// function sameCase(a, b){
//  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//     return -1
//   }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//       return 1
//   }else{
//     return 0
//   }
// }
// let arr=[catAge]
// let arr1=[dogAge]
//  if (catAge==15 && dogAge==15) {
//       return ((catAge,catAge ), [catAge/15,dogAge/15])
//     } else if  (catAge==24 && dogAge==24){
//     return (catAge,dogAge),+ " "+ [(catAge/24)+1),(dogAge/24)+1)])
// } else (catAge>24 && dogAge>24) {
//     return (catAge,dogAge), +" "+[parseInt(`(${catAge}-24)/4)+2)`),parseInt (`(${dogAge}-24)/5)+2)`)])
// }
//   }
// let age1=15
// let age2=6
// // console.log ("age1 + " ", age2"), [`${age1}`,`${age2}`])
// // document.write  ("age1+" ", age2"), [`${age1}`,`${age2}`])
// console.log ( [`${age1}`,`${age2}`])
// document.write  ( [`${age1}`,`${age2}`])



// if ( mm<40) {
// //    console.log (`You need to give your plant ${40-mm}mm of water`)
// // -----------math shoul be done in ${ here } 

// }console.log "You need to give your plant " + (40 - mm) + "mm of water"
//  } else {console.log ("Your plant has had more than enough water for today!")
// }
// let a=4
// let b=-7
// console.log (a+-b)
// let count=num 
//   let string ="sheep..."
//  let string1=`${count}`+ "sheep..."
//   console.log (string1)
//  if ( num>0) {
//  } return (string1.repeat(count))
// } else return ('')
// }


// function getDrinkByProfession(param){
//   switch (param.toLowerCase()) {
//       case "jabroni":
//         return "Patron Tequila";
//       case "school counselor":
//         return "Anything with Alcohol";
//       case "programmer":
//         return "Hipster Craft Beer";
//       case "bike gang member":
//         return "Moonshine";
//       case "politician":
//         return "Your tax dollars";
//       case "rapper":
//         return "Cristal";
//       default:
//         return "Beer";
//   }
// let n=-456.87
// console.log(Math.round(-n))

// function elevator(left, right, call){
//   let callRight;
//   let callLeft;
//     if (call > right) {
//       callRight = call - right
//     } else {
//       callRight = right - call
//     }
//      if (call > left) {
//       callLeft = call - left
//     } else {
//       callLeft = left - call
//     }
//     if (callRight == callLeft) {
//     return "right";
    
//   } else if (callRight < callLeft) {
//     return "right";
//   }
//   else 
//     return "left";  

// }
