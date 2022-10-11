// let a="Hello"
// let b="Olga"
// console.log(a,b)
// let tem=a
// a=b
// b=tem
// console.log(a,b,"\n")
// b=[a,a=b] [0]
// console.log (a,b)
// console.log (2**5)


// let apples = "2";
// let oranges = "3";

// alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки
// // Поэтому используем унарный плюс, чтобы преобразовать к числу:

// let apples = "2";
// let oranges = "3";

// // оба операнда предварительно преобразованы в числа
// alert( +apples + +oranges ); // 5

// // более длинный вариант
// // alert( Number(apples) + Number(oranges) ); // 5

// function isPangram("The quick brown fox jumps over the lazy dog"):
// let string="The quick brown fox jumps over the lazy dog"
// if {assert.strictEqual (isPangram(string), true)
//   return(true)

// }
// if {assert.strictEqual(isPangram (string), false},
//   return(false)
// }

// if ("0") {
//   alert( 'Привет' );
// }

// Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

//   let question=prompt("what is an official name of JavaScript?")
//   if (question=="ECMAScript") { 
//      alert ("right!")
// }
// else  
// alert("Не знаете? ECMAScript!") 

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.
//   let number=prompt("enter number")
// if (number>0) {
//   alert (1)
// }
//  else if (number<0) {
//   alert (-1)
// }
 
// else if  (number==0) {
//    alert (0)
// let s=+prompt("enter number")
// let g=+prompt("enter number")
// let result=s+g
// alert (result<4) ? "little" : "mnogo"
// if (result<4) {
//   alert("too little")
// }
//   else {
//     alert ("too much")
//   }


// let s=+prompt("enter number")
// let g=+prompt("enter number")
//   let result=s+g

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// решение
// alert (result = (s +g < 4) ? 'Мало' : 'Много');

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age=prompt("enter age")
// if (age>=14&&age<=90)
// {
//   alert (age)



// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let user=prompt ("who are you?");
// if (user=="admin") {
//   let pass=prompt ("enter password")
//     if (pass==="i am boss") {
//    alert ("have a good day") 
//   } else if  (pass==null||pass == "") {
//   alert ("cancelled") 
// } else  {
//    alert ("wrong password") 
//     }

// } else if (user==null || user=="") {
//   alert ("cancelled")
// } else  {
//   alert ("i dont know you")
// }
// const myCity= {
//   city:"Houston",
//   n:"good evening"
// }
// console.log (myCity)
// const copyOfmyCity=myCity
// copyOfmyCity.h="it is hot in here"
// console.log (copyOfmyCity)
// console.log (myCity.city)
// myCity.population="100000"
// delete myCity.h
// console.log (myCity.city)

//- ---------------------------------------ARRAYS-------------------------------
// //  arrays will be  mutated
// // const arr=[1, 2, 3, 4];
// // const arr1=arr;
// // console.log (arr1)
// //         arr1.push ("hello")// first array will be mutated too  [1, 2,3, 4. "hello"];
// // console.log (arr1)


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

// const arr=[1,2,3,"hi", 7, 8, null, 10]
//  for (let i=0; i< arr.length; i++) {
//  if (typeOf arr[i]==='number') {   
//  console.log (arr[i]*2)
//  }
//}


// const arr=[1,2,3,"hi", 7, 8, null, 10];
// const arr1=[];
//  for (let i=0; i< arr.length; i++) {
//     if (typeOf arr[i]==="number"){  
//  arr1.push (arr[i]*2);
//  }
//  console.log (arr1)  ;
// }

 
// const arr =[1,2,3,"hi", 7, 8, null, 10]
// const arr1=[]
//  for (let i=arr.length-1; i>=0; i--) {
//  if (typeOf arr[i]==="number") {  
//  arr1.push (arr[i]*2)
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





// ----------STRING METODS
// // trim ()  trimStart ()or trimLeft()   trimEnd ()
 let str= "      hello  would i am fine     "
console.log (str.trim ())
console.log (str.trimStart())
console.log (str.trimEnd ())

// ------CONCAT 
// let str3="hello"
// let str4="olga!"
// let str5="++++"
// let str6=" "
// console.log (str6.concat (str3),(str4)) // 
// console.log (str6.concat(str3," ",str5, " ", str4)) 
// console.log ("hello".concat ("wourld")) //
// console.log ("hello4 ".concat ("wourld")) 

// let num1 = Number(prompt ("Number1:"));
// let num2 = Number(prompt ("Number2:"));
// let oper = prompt ("1. Sum\n2. Substract\n3. Multiply\n4. Divide\n");
// switch (oper) {
//   case "1":
//     document.writeln (`${num1} + ${num2} = ` + (num1 + num2));
//     break;
//   case "2":
//     document.writeln (`${num1} - ${num2} = ` + (num1 - num2));
//     break;
//   case "3":
//     document.writeln (`${num1} * ${num2} = ` + (num1 * num2));
//     break;
//   case "4":
//     document.writeln (`${num1} / ${num2} = ` + (num1 / num2));
//     break;
//   default:
//     document.writeln ("Operation is not supported. Please try again.");


// ++++++++++++++++++++++++++++++++++++++++=+=LOgical preobrazovanie
// console.log ()
// Значение	Преобразуется в
// undefined	NaN
// null	0
// true / false	1 / 0
// string	Пробельные символы (пробелы, знаки табуляции \t, знаки новой строки \n и т. п.) по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
// console.log (Number(null))
//   Логическое преобразование самое простое.
// Происходит в логических операциях, но также может быть выполнено явно с помощью функции Boolean(value).
// Правило преобразования:
// •	Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
// •	Все остальные значения становятся true.
//console.log (Boolean (undefined))


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