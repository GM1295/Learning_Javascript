//for each loop

const myArray=[1,2,3,4,5]


//for each take a call back function

// one way of writing call back function

       /*  myArray.forEach(function(key)
        {
            console.log(key);
        }) */

  //another way of writing call back function using arrow function
  
        /* myArray.forEach((key)=>
        {
            console.log(key);
        }) */

        // reference of a function can be passed to for-each
/* 
                function printMe(item)
                {console.log(item);}

                myArray.forEach(printMe) */
        
        //there are other parameters in call back function
        
        /*         const newArray=["javascript","ruby","python","C#","java","C++"]
                newArray.forEach((a,b,c)=>{//a receives element, b recewives current index , c receives current array
                        newArray[b]="hello"                
                    console.log(a,b,c);
                })
                console.log(newArray); */


                // use of for each loop in array of objects --> very useful in databases

                const capitals=[
                    {
                           state:"uttar pradesh",
                           capital:'lucknow'
                    },
                    {
                            state:"chhattisgarh",
                            capital:'raipur'
                    },
                    {
                            state:"madhya pradesh",
                            capital:'Bhopal'
                    },
                        
                ]

                capitals.forEach((item)=>{console.log(item.state,':-',item.capital);})//eliminated the complication of accessing th property of object in array
                capitals.forEach((item)=>{console.log(item.capital);})
                
               