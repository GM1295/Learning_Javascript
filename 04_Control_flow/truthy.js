/*   const userEmail="hitesh@gmail.com";
if(userEmail)
console.log("got user email");
else 
console.log("dont have user email"); */

//falsy values

/* 
false ,0,-0,BigInt 0n,null, undefined, Nan

*/

// truthy values

 // "0",'false', " ", 
 //     [] - called empty array
 //{} - called empty object
 //function(){} - called empty function
  
 // above values are evaluated as true in boolean

 /*  const arr=[];
 if(arr.length===0) // this is how array whether empty or not is checked
 console.log("array is empty");

 const userObj={};
 //Object.keys(userObj) wil give array of all the keys of object userObj
 if(Object.keys(userObj).length===0) // Object.keys(userObj).length===0 checks array ki length
 console.log("object is empty");  */


 /*
const userDetail={
    name:"saurabh",
    age:27,
    location:"akbarpur",
    isLoggedIn:true,
    hasDebitCard:true,
    lastLoggedInDays:["Monday","saturday"]
}
 console.log(Object.keys(userDetail)); // will give array of keys
 console.log(Object.values(userDetail));// will give array of values


*/


//NUllish Coalescing Operator ??

const schoolUsers={
        name:"saurabh",

        lastName:"",
        marks:0,
        hasMedals:false,
        

        mathsOlympiadQualified:null,
        //hasAvailedReservation:false 

        //falsy values-- "",0,false, null , undefined
        //nullish values --null,undefined
 }

 /*
 console.log("\nlogical OR operator");
 console.log(schoolUsers.lastName);
 console.log(schoolUsers.lastName||"no last name");

console.log(schoolUsers.marks);
console.log(schoolUsers.marks>50||"failed");

console.log(schoolUsers.hasMedals||"don't have any medals");

console.log(schoolUsers.mathsOlympiadQualified||"hasn't given any olympiad ")
console.log(schoolUsers.hasAvailedReservation||"didn't opt for reservation") */

// console.log("\nNullish coalescing operator");


//  console.log(schoolUsers.lastName??"no last name"); // ?? ke RHS me function bhi ho sakta hai

//  console.log(schoolUsers.marks??"didn;t appear for exam");

//  console.log(schoolUsers.hasMedals??"don't have any medals");

// console.log(schoolUsers.mathsOlympiadQualified??"hasn't given any olympiad ")
// console.log(schoolUsers.hasAvailedReservation??"didn't opt for reservation")

//ternary operator

//  condition ? true :false

const num1=12;
const num2=10;
//   ((num1+num2)/2)>0?console.log("avg is positive"):console.log("avg is negative");
  const avg=num1>num2?num1:num2;
  console.log(avg);