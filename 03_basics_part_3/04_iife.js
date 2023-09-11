// Immediately Invoked Function Expression


//named iife -  immediately invoked function expression
    
  (function addTwoNumbers(a,b){
    console.log(a+b);
   }) (4,5);


//Unnamed IIFE- immediately invoked function expression
   ((name,question)=>{
            console.log(`hi ${name} , ${question} `);
        }) ('jordan','what is the purpose of life');
            