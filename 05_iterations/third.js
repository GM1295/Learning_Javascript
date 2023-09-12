
//****************************for-in loop******************************/

  // IN OBJECTS

        const myObject={ name:"saurabh",
                        email:"saurabh.d.0102@gmail.com",
                        contact:8770954042,
                        address:"akbarpur",
                        creditCard:false

                        }
               
              /*   for (const key in myObject) 
                {
                    console.log(key);//print all the keys
                    console.log(myObject[key]);//print value of each key
                                               //don't use myObject.key that will give undefined
                } */

                //conclusion -objects are iterable using for-in loop



    //IN ARRAYS


           /*  const array=['javascript','c++','python','ruby']
            for (const key in array) 
            {
                //console.log(key); //print index
               console.log(array[key]);// print elements
            
            
            } */

        //in maps--> maps objects are not iterable using for-in loop

        const mapObject=new Map()
        mapObject.set('name','saurabh')
        mapObject.set('email','abc@gmail.com')
        mapObject.set('age','27')

          for (const key in mapObject) 
            {
              console.log(key);
            }
            

   