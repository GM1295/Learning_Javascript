console.log("ARROW FUNCTION");
const student={
    name:"saurabh",
    email:"saurabh.d.0102@gmail.com",
    welcomeMessage:function(){
        console.log(`hi ${this.name},welcome to the group`);
         console.log(this);//refereing to student
        }
    
}
// student.welcomeMessage();
// student.name="manish"
// student.welcomeMessage();
// console.log(this);//outputs {} -- which means refering to empty object,


function chai()
{
    let username="saurabh"
    console.log(this.username);//undefined because this works only in object 
    console.log(this);//here this refers to a different entity
}
//chai();

//console.log(this);//globally this refers to an empty object


const chaiAurCode=function() // function expression
{
    let userName="denzel washington"
    console.log(this.userName);
    console.log(this);
}
//chaiAurCode()


//ARROW FUNCTION

   // when there is a single line expression

        const sum=(a,b)=>{return a+b};// explicit return ..if curly braces are there then use return keyword

        const subtract=(x,y)=>y-x;// Implicit return -- no curly braces therefore no return keyword
        const power=(m,n)=>(m**n);//paraenthesis can enclose the expression in implicit return
        const square=(num)=>num*num;

        const objReturn=()=>{username:"saurabh"}// in this case objReturn() won't return object
         console.log(objReturn());
                          
// when function has multiline statements

            const isLarger=(num1,num2)=>{
                                            if(num1>=num2)
                                            return num1
                                             return num2
                
                                             }

           // console.log(isLarger(74,85));






// console.log(`sum is ${sum(7,8)}`);
// console.log(`subtraction is ${subtract(78,1234)}`);
// isLarger(78,89);
// console.log(square(78));


const arrowFunction=()=>{
                            let userName="jordan"
                            console.log(this.userName);
                            console.log(this);//refers to empty object
                           }
arrowFunction()