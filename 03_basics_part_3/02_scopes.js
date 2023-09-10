// console.log("welcome to scopes ");

let a=10;
const b=20;
var c=30;

if(true)
{
    let a=100
    const b=200
    c=300
}
// console.log(a);//10
// console.log(b);//20
// console.log(c);//300 this is the issue with var



         //********** lec 22 -Scope level and mini hoisting in javascript *************** */

         function One()
         {
            const userName="saurabh"
            function Two()
            {
                const website="youtube";
               // console.log(userName);
            }
           // console.log(website); here this line will throw error  -- website is not defined
                                 // because website ka scope sirf Two() ke andar hai
           
            Two()
            
         }
         //console.log(userName);// userName ka scope sirf One() ki body me hai
         One()

         if(true)
         {
            const userName="jordan"
            if(userName==='jordan')
            {
                let website=' youtube'
               // console.log(userName+website);
            }
           // console.log(website);//scope of website if from line 42 to line 45
         }
        // console.log(userName);//scope of userName is from line 39 to line 47


//************************* FUNCTION HOISTING  *************************************************************/



    // FUNCTION DECLARATION 

            console.log(incrementByOne(8)); // accessing function before its declaration won't throw error

            function incrementByOne(num)  // function declaration
            {
                return num+1;
            }

            console.log(incrementByOne(5));

    
    // FUNCTION EXPRESSION

    console.log(addOne(89));//accessing function expression before it's initialisation will throw error

    const addOne=function(num){return num+1} // function expression
    console.log(addOne(78));