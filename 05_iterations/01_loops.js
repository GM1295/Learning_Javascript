//for loop

//left star



 /*for (let outerLoop = 1; outerLoop<=5; outerLoop++) 
{
    let string="";
    for (let innerLoop = 1; innerLoop <=outerLoop; innerLoop++) 
    {
        string=string+"*";
    }
    console.log(string);
  
}
//multiplication table

for (let outerLoop = 1; outerLoop <= 5; outerLoop++) {
    console.log(`table of ${outerLoop}`);
    for (let innerLoop = 1; innerLoop <= 10; innerLoop++) {
      console.log(`${outerLoop} * ${innerLoop} = ${outerLoop*innerLoop}         `);        
    }
    
} */

const myArray=["flash","spiderMan","superman"]

for (let index = 0; index < myArray.length; index++) 
{
    console.log(myArray[index]);   
}

//********* while and do-while loop ******/
 let  num=1
 while(num<=10)
 {
    console.log(num);
    num=num+2;
 }
  const myArray2=["ram","shyam","mohan","sohan"]
  let looVar=0;
  while(looVar<myArray2.length)
  {
    console.log(`value of index is ${myArray2[looVar]}`);
    looVar++;
  }