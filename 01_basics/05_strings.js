// STRING AS PRIMMITIVE TYPE-- DONT HAVE ANY PROPERTIES AND METHODS

   // here explicitly properties and methods mention krne padenge
   // ctrl+space press krne pe suggestion me properties and methods ni milenge 

/* const name="saurabh";
const score=100;
console.log(typeof name);
console.log(`hi my name is ${name} and my score is ${score}`);
console.log(name[2]);

const firstName="pushpendra";
const lastName="kumar";
const age =38;
console.log(`hi ny name is ${firstName} ${lastName} and my age is ${age}`); */

//STRING AS OBJECTS-- OBJECTS HAVE PROPERTIES AND METHODS

  // control+space button press krke methods and properties ke suggestion milte hain

const userName=new String('gautam michael')
const mobileNumber=8770954042;
// console.log(typeof userName);
// console.log(`my name is ${userName} and mobile number is ${mobileNumber}`);


//console.log(userName.length);
// console.log(userName.toUpperCase()); //return object in uppercase
// console.log(userName.substring(1,6));// string between given index excluding the end index
//console.log(userName.charAt(5)); // character at given index
//console.log(userName.indexOf('t')); //indexof given character

//const slicedString=userName.slice(2,7);// slice() can take negative index as parameter
//console.log(userName.slice(-7,-3));// string ko opposite side se count krta hai
//negative index 
// -1 means 'l'
// -2 means 'e'
// -3 means 'a'
// -4 means 'h'
// -5 means 'c'
// -6 means 'i'
// -7 means 'm'
// -8 means ' '
// -9 means 'm'
// -10 means 'a'
// -11 means 't'
// -12 means 'u'
// -13 means 'a'
// -14 means 'g'


// trim()-- begining and end ke spaces ko trim kr deta hai and line terminators i.e \n ko 
  

const newString=new String("     saurabh     ");
// console.log(newString);
// console.log(newString.trim());
// console.log(newString.length);// 17
// console.log(newString.trim().length); //7

//trimEnd() trim whitespaces from end
//  console.log(newString.trimEnd());

 //trimStart() trim whitespaces from start
//  console.log(newString.trimStart());

 //replace()-- replace sequence of characters into other
 const url="http//saurabh%doharey@gmail.com";
 console.log(url.replace('%','-'));

 //includes() gives boolean result
    //console.log(url.includes("michael"));//false
    // console.log(url.includes("saur"));//true

 //split()-- array of string deta on behalf of ki seprator kya hai
        // const address="gautam buddha nagar mati road akbarpur";
        // console.log(address.split(" "));
        // output -['gautam', 'buddha', 'nagar', 'mati', 'road', 'akbarpur']






















/* const userFirstName="suresh ";
let userLastName;
if(userLastName==undefined)
console.log(`hi my name is ${userFirstName+"kumar"}  `);
else
console.log(`hi my name is ${userFirstName} ${userLastName}`); */