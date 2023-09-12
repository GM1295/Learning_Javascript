//FOR LOOP


  /*   const myArray=["flash","spiderMan","superman"]

    for (let index = 0; index < myArray.length; index++) 
    {
        console.log(myArray[index]);   
    } */



// WHILE AND DO-WHILE LOOP -- do while loop atleast 1 baar jarur chalega irrespective of condition
                          // coz body pehle execute hoti hai and  condition sabse last me check hoti hai

      /*   
          let  num=1
            while(num<=10)
            {
                console.log(num);
                num=num+2;
            }
          
            const myArray2=["ram","shyam","mohan","sohan"]
            let loopVar=0;
            while(loopVar<myArray2.length)
            {
              console.log(`value of index is ${myArray2[looVar]}`);
              loopVar++;
            } 

        */


  //ITERATIONS WITH BREAK AND CONTINUE KEYWORD    


            /*    const array=[1,2,3,4,5,6]
              for (let index = 0; index < array.length; index++) 
              {
                
                if(array[index]==3)
                break;
                console.log(array[index]);
                    
              } */
                  // outputs -- 1 
                            // 2



              /*  const Array=[1,2,3,4,5,6]
              for (let index = 0; index < array.length; index++) {
                
                if(array[index]==3)
                continue;
                console.log(array[index]);
                    
              }
          */
              //outputs : 1
                        // 2
                        // 4
                        // 5
                        // 6

          /*    const Array=[1,2,3,4,5,6]
              console.log(`loop with break keyword`);
                  for (let outerIndex = 0; outerIndex < Array.length; outerIndex++) 
                  {
                    
                    for (let innerIndex = 1; innerIndex <=10; innerIndex++) 
                    {
                      if(Array[outerIndex]==3)
                      break;
                          console.log(`${Array[outerIndex]} * ${innerIndex} =${Array[outerIndex]*innerIndex}`);
                      
                    }
                    
                  }     
                  */
              
            /*  console.log(`loop with continue keyword`);
              
                    for (let outerIndex = 0; outerIndex < Array.length; outerIndex++) 
                    {
                      if(Array[outerIndex]==3)
                          continue;
                      for (let innerIndex = 0; innerIndex <= 10; innerIndex++) 
                      {
                      
                        console.log(`${Array[outerIndex]} * ${innerIndex} =${Array[outerIndex]*innerIndex}`);
                            
                        
                      }
                      
                    } 
          */


















   // PRACTICE REGARDING LOOPS

     // Q1-> printing left star

            
           /* 

              for (let outerLoop = 1; outerLoop<=5; outerLoop++) 
              {
                  let string="";
                  for (let innerLoop = 1; innerLoop <=outerLoop; innerLoop++) 
                  {
                      string=string+"*";
                  }
                  console.log(string);
                
               }

           */



     // Q2-> multiplication table

           //using for loop
     
     /*  

              for (let outerLoop = 1; outerLoop <= 5; outerLoop++) 
                {
                    console.log(`table of ${outerLoop}`);
                    for (let innerLoop = 1; innerLoop <= 10; innerLoop++) {
                      console.log(`${outerLoop} * ${innerLoop} = ${outerLoop*innerLoop}`);        
                    }
                    
                } 
            */

                //using while loop

             /*    let outerLoopVar=1;
                while(outerLoopVar<=5)
                {
                   let innerLoopVar=1;
                   while(innerLoopVar<=10)
                   {
                    console.log(`${outerLoopVar} * ${innerLoopVar} = ${outerLoopVar*innerLoopVar}`);  
                    innerLoopVar++;
                   }
                   console.log(`Table of ${outerLoopVar}`);
                   outerLoopVar++;
                }

                */
 
                //using do-while loop

                
               /*  let outerLoop=1
                do{
                  let innerLoop=1
                  console.log(`\ntable of ${outerLoop}\n`);
                  
                  do{
                    console.log(`${outerLoop} * ${innerLoop} = ${outerLoop*innerLoop}`); 
                    innerLoop++;
                  }while (innerLoop<=10) 

                  outerLoop++;
                }while(outerLoop<=5) */


             