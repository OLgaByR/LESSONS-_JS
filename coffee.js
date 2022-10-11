//   // --------------------------------------nested /included if 

// let coffee= "latte"
// let spice="nutmug"
// spice= null
// coffee=null
// let step1= "1. Make sure coffeemaking  machine is turned on and has enough water."
// let step2= "2. Fill portafilter with ground coffee beans and then insert it into machine."
// let step3= `3. Choose and press  ${coffee} button on machine pannel.` 
// let step4= `4. Add ${spice} and sugar if desired.`
// let step5= `5. Enjoy your ${coffee} with ${spice}.`
// if (coffee!==null) {
// if (spice==null||spice==" ") {
// document.write(`${coffee} instructions preparation:`,"<br>",step1,"<br>",step2,"<br>",step3,"<br>", "4. Add sugar if desired.", "<br>",`5. Enjoy your ${coffee}.`, "<br>")  
// } else { document.write(`${spice} ${coffee} instructions preparation:`,"<br>",step1,"<br>",step2,"<br>",step3,"<br>",step4,
// "<br>",step5,"<br>","<br>")
// }
// let usercupchoice="usercupchoice"
// usercupchoice="small" 

// if (usercupchoice=="small") { 
//   document.write (`Your price for ${spice} ${coffee} for ${usercupchoice} cup is 2$`)
//   console.log (`Your price for ${spice} ${coffee} for ${usercupchoice} cup is 2$`)
// }
//   if (usercupchoice=="medium") {
//     document.write(`Your price for ${spice} ${coffee} for ${usercupchoice} cup is 2,5$`)
//   }
// if  (usercupchoice=="big") {
//   document.write(`Your price for  ${spice} ${coffee} for ${usercupchoice} cup is 3,5`)
// }
// } else document.write("such a choice is not possible") 
//   document.write ("<br>", "Have a good day!")

 


// console.log (`${coffee} with ${spice} instructions preparation`,"\n",step1,"\n",step2,"\n",step3,"\n",step4,"\n",step5,"\n")





 // -------------------------------------------- original code 
// let coffee= "latte"
// let spice="nutmug"
// spice= "cardomon"
// coffee=" capuchino"
// let step1= "1. Make sure coffeemaking  machine is turned on and has enough water."
// let step2= "2. Fill portafilter with ground coffee beans and then insert it into machine."
// let step3= `3. Choose and press  ${coffee} button on machine pannel.` 
// let step4= `4. Add ${spice} and sugar if desired.`
// let step5= `5. Enjoy your ${coffee} with ${spice}.`

// if (spice==null||spice==" ") {
// document.write(`${coffee} instructions preparation:`,"<br>",step1,"<br>",step2,"<br>",step3,"<br>", "4. Add sugar if desired.", "<br>",`5. Enjoy your ${coffee}.`, "<br>")
// } else {document.write(`${spice} ${coffee} instructions preparation:`,"<br>",step1,"<br>",step2,"<br>",step3,"<br>",step4,
// "<br>",step5,"<br>","<br>")
// }

// console.log (`${coffee} with ${spice} instructions preparation`,"\n",step1,"\n",step2,"\n",step3,"\n",step4,"\n",step5,"\n")
// let usercupchoice="big"
// usercupchoice="small"
// if (usercupchoice=="small") { 
//   document.write (`Your price for ${spice} ${coffee} for ${usercupchoice} cup is 2$`)
//   console.log (`Your price for ${spice} ${coffee} for ${usercupchoice} cup is 2$`)
// }
//   if (usercupchoice=="medium") {
//     document.write(`Your price for ${spice} ${coffee} for ${usercupchoice} cup is 2,5$`)
//   }
// if  (usercupchoice=="big") {
//   document.write(`Your price for  ${spice} ${coffee} for ${usercupchoice} cup is 3,5`)
// }
// document.write ("<br>", "Have a good day!")

//**************************************************************************************************************************************** */
//  Coffee with loops 


// let cappuchino= "cappuchino"
// let americano="americano"
// let latte="latte"

// let almondMilk="almondMilk"
// let soyMilk="soyMilk"
// let coconutMilk="coconutMilk"

// let smallCup="smallCup"
// let medCup="medCup"
// let bigCup="bigCup"

// // make choices 

// let coffeeChoice="cappuchino"
// let milkChoice="almondMilk"
// let cupChoice="bigCup"

// let clientChoice=[]

// clientChoice.push(coffeeChoice)
// clientChoice.push(milkChoice)
// clientChoice.push(cupChoice)

// // console.log(clientChoice)

//  let price=3;
//  let totalPrice;
// for ( let i=0; i<clientChoice.length; i++ ){
//       if (clientChoice[i]==="smallCup"){
//          totalPrice=price
//       } else if (clientChoice[i]==="medCup"){
//         totalPrice=price*2
//       } else {
//         totalPrice=price*3
//       }
//     }
// let step1 = "1. Make sure coffeemaking  machine is turned on and has enough water."
// let step2 = "2. Fill portafilter with ground coffee beans and then insert it into machine."
// let step3 = `3. Choose and press ${coffeeChoice} button on machine pannel.` 
// let step4 = `4. Choose and press ${milkChoice} button on machine pannel.`  
// let step5 = `5. Choose and press ${cupChoice} button on machine pannel.`
// let step6 = `6. Your price for ${cupChoice} of ${coffeeChoice} with ${milkChoice} is ${totalPrice}$.`
 
// console.log(step1,"\n",step2,"\n",step3,"\n",step4,"\n",step5,"\n", step6,"\n")

// function lastgreeting () {
// console.log("Have a good day!")
// }
// lastgreeting ()
// ************************************************************************************************************************************
// Coffee with functions implemented 

// let cappuchino= "cappuchino"
// let americano="americano"
// let latte="latte"

// let almondMilk="almondMilk"
// let soyMilk="soyMilk"
// let coconutMilk="coconutMilk"

// let smallCup="smallCup"
// let medCup="medCup"
// let bigCup="bigCup"

// make choices 

function clientChoice(...arguments) {
  return(arguments)
}
console.log(clientChoice("cappuchino", "almondMilk", "smallCup"))
// clientChoice (cappuchino, almondMilk, smallCup)

 let price=3;

function totalOrderPrice (array) {
 let totalPrice;
for ( let i=0; i<array.length; i++ ){
      if (array[i]=="smallCup"){
         totalPrice=price
      } else if (array[i]=="medCup"){
        totalPrice=price*2
      } else {
        totalPrice=price*3
      }
    }
    return totalPrice
    }
    console.log(totalOrderPrice("cappuchino", "almondMilk", "smallCup"))
    totalOrderPrice(clientChoice)

    let coffeeChoice="cappuchino"
     let milkChoice="almondMilk"
     let cupChoice="bigCup"

function orderSummery (){
let step1 = "1. Make sure coffeemaking  machine is turned on and has enough water."
let step2 = "2. Fill portafilter with ground coffee beans and then insert it into machine."
let step3 = `3. Choose and press ${coffeeChoice} button on machine pannel.` 
let step4 = `4. Choose and press ${milkChoice} button on machine pannel.`  
let step5 = `5. Choose and press ${cupChoice} button on machine pannel.`
let step6 = `6. Your price for ${cupChoice of ${coffeeChoice} with ${milkChoice} is ${totalPrice} $.`
console.log(step1,"\n",step2,"\n",step3,"\n",step4,"\n",step5,"\n", step6,"\n")
}
orderSummery ()



// function lastgreeting () {
// console.log("Have a good day!")
// }
// lastgreeting ()

// function greeting (name){
//   return `Hello, ${name}`
// }
// console.log(greeting("Buster"))

