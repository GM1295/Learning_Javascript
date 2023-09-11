console.log("Concept : switchCase\n");


// switch (Key)
// {
//     case value1:
//         break;
//         case value2:
//             break;
             
//             default:
//                 break;

// }
 const month=3// here value of month could be any type like string
              // accordingly case values bhi change hongi 
switch(month)
{
 case 1:
    console.log("january");
    break; // if break na likha ho to next case vale match bhi ni hogi and code execute hoga
    
 case 2:
    console.log("February");
    break;
    
 case 3:
    console.log("March");
   // break;
    
 case 4:
    console.log("April");
    break;

     default: //when no any case matches then default will execute
        console.log("case didn't match");
    
}