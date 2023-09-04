// console.log("hello number and maths file");

const score=400;
// console.log(typeof score);
// console.log(score);
// console.log(score.toLocaleString().length);

const balance=new Number(8770954042);
// console.log(typeof balance);

//  console.log(balance);
//  console.log(balance.toString());
//  console.log(balance.toString().length);

//PROGRAM TO  ADD THE DIGITS OF A NUMBER BY CONVERTING NUMBER TO STRING'

     /*  const num=new Number(8770954042);
    const numString=num.toString();
    let sum=0;
    for (let index = 0; index < numString.length; index++) 
    {
       
        sum=sum+parseInt(numString[index])
    }
    console.log(sum); */


const price=874.8564;
//console.log(price.toFixed(2));
const newPrice=10028.7978;
/* console.log(newPrice.toPrecision(8));//10028.798
console.log(newPrice.toPrecision(7));//10028.80
console.log(newPrice.toPrecision(6));//10028.8
console.log(newPrice.toPrecision(5));//10029
console.log(newPrice.toPrecision(4));//1.003e+4
 */





//toLocaleString()-- it makes a large number more readable
 /* const largeNumber=102345678900145;
 console.log(largeNumber);//102345678900145
 console.log(largeNumber.toLocaleString());//102,345,678,900,145
 console.log(largeNumber.toLocaleString("en-IN"));//102345,67,89,00,145
 */
 //*****************************MATHS LIBRARY********************* */

//  console.log(typeof Math);
 /* console.log(Math.abs(-4));//abs() negative values ko positive bnata hai
console.log(Math.round(7.4));
console.log(Math.round(7.6)); */

// ceil( )chooses top value while rounding off the number

// console.log(Math.ceil(11.2)); // 12
//console.log(Math.ceil(11.9));//12
 
//floor() chooses lower value while rounding off

//console.log(Math.floor(5.9));//5
//console.log(Math.floor(5.2));//5

//sqrt()
// console.log(Math.sqrt(625));

//SQRT1_2 is a property
// console.log(Math.SQRT1_2);// SQRT1_2 gives square root of 1/2

//SQRT2 gives square root of 2
// console.log(Math.SQRT2);


/* const arr=[1,2,3,4];
console.log(`minimum value in array is ${Math.min(1,2,-3,5,78,0,-90)}`);
console.log(`maximum value in array is ${Math.max(1,2,-3,5,78,0,-90)}`); */

//Math.random()

    // basically random() gives a random value between 0 to 1
    // each execution of random() will give different random number between 0 to 1
    // how to generate a different number between two numebrs using random function()
    
    //console.log(Math.random());// outputs a random decimal number between 0 and 1
    //console.log(Math.random()*10); // outputs a random decimal number between 0 and 10 excluding not 10
   // console.log(Math.floor((Math.random()*10) +1));// outputs a decimal number from 1 to 10
    // console.log((Math.random()*10) +a)// decimal number from a to 9+a
    // console.log(Math.random()*(b-a));//decimal number from 0 to a+1 excluding a+1
    // console.log(Math.random()*(b-a+1));//decimal number from 0 to a+1
    

   //to output a random integer  from a to b where a<b

   const min=1;
   const max=6;
//    console.log(Math.random()*(max-min+1)+min);// outputs a andom integer from min to max


    randomNumberGenerator();
    function randomNumberGenerator()
    {
        console.log(`random number from ${min} to ${max}`)
        for(let i=1;i<=20;i++)
         console.log(Math.floor((Math.random()*(max-min+1)))+min);


    }
    
    







 