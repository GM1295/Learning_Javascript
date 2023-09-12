//loops specific to arrays

 // ["","",""]  strings in array
 // [{},{},{}]  objects in array

 //********************for-of loop*******************************/
   
        // in arrays

            /*   const arr=[1,2,3,4,5]
                for (const loopvar of arr) 
                {console.log(loopvar);} // print elements
                
         

              const greeting="hello world!";
                for (const greet of greeting) 
                {
                    if(greet==" ")
                    break;
                    console.log(`each word is ${greet}`);
                } */
   
           
           
        //in Maps
               

            const mapObject=new Map()
            mapObject.set('name','saurabh')
            mapObject.set('email','abc@gmail.com')
            mapObject.set('age','27')

        /*  
          for (const [x,y] of mapObject) //
              {
                console.log(x);//print all the keys 
                console.log(y);//will give values of each key
                console.log(x,':-',y);//print key and values together

              } */


      // in objects--> objects are not iterable using for-of loop 

        const myObject={name:"saurabh",age:37}
        for (const key of myObject) //throw error that myObject is not iterable
        {
            console.log(myObject[key]);
            
        }



          


  