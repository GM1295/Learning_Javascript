// console.log("FUNCTIONS IN JavaScript");

function sum(a,b)
{
     //const result=a+b;
    //return result
    
    return a+b;
}
// console.log(sum(4,5));//9
// console.log(sum(4,"5"));//45 --no error ,operation evaulated as per the data
// console.log(sum(4,'a'));//4a

const result=sum(7,8);
//console.log(result);

//only function name gives function body
//functiona name with parenthesis means it'll execute



function logInUser(UserName)
{
    return `${UserName} has just logged in`
}
logInUser("saurabh")//this line won't print any thing
//console.log(logInUser("Jordan"));

const returnMessage=logInUser("michale")
//console.log(returnMessage);

//console.log(logInUser());//undefined has just logged in

function loggingFunction(name)
{
   // if(name===undefined)// checking whether parameter has receieved expected value and act accordingly 
                        // so that output can be prevented from being null or undefined
       //OR

    if(!name) // boolean equivalent of undefined is false so ,if name=undefined , then !undefined mean true 
    {
        console.log(`please enter the username`)
        return
    }

    
   return `${name} just logged in`
}
// console.log(loggingFunction("kane williamson"))


//if undefined waali situation avoid krni ho then

function loggingTrialFunction(userName='abc')
{
    return `${userName} has just logged in`
}

// console.log(loggingTrialFunction());// abc has just logged in
// console.log(loggingTrialFunction("sumit"));// sumit will overwrite abc and output will be -- sumit has just logged in



//****************************lec 20 -FUNCTIONS WITH OBJECTS AND ARRAY IN JAVASCRIPT *************/

//USING REST OPERATOR

        function calculateCartPrice(...price) // here ... known as rest operator not spread operator
        {
            return price

        }

        //console.log(calculateCartPrice(100,200,300,400)); // [100,200,300,400]

        function calculateCartValue(val1,val2,...price)
        {
            return `${100} goes to val1 ${200} goes to val2 ${price} goes to rest operator` 
        }
        //console.log(calculateCartValue(100,200,300,400));




//PASSING OBJECT TO A FUNCTION

        const myObject={
            name:"saurabh",
            price:500
        }
        function displayMyObject(myObj)
        {
            // here object properties name should be correct otheerwise undefined wala issue
            return `name is ${myObj.name} and price is ${myObj.price}`
        }

        //console.log(myObject);

        //console.log({name:"jordan",price:5000});

//PASSING ARRAY AS ARGUMENTTO A FUNCTION        

        const myArray=[100,200,300,400]

        function printSecondValue(getArray)
        {
            return getArray[1]
        }
        //console.log(printSecondValue(myArray));

        console.log(printSecondValue([857,968,365,741]));