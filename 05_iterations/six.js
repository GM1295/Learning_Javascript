// map() method

            const numbers=[1,2,3,4,5,6,7,8,9,10]

            let result=numbers.map((num)=>num+10)
            result=numbers.map((num)=>{return num*4})
            //console.log(result);
            //console.log(numbers);

            /* let array=[]
            numbers.forEach((num)=>{
                array.push(num+10)
            })
            console.log(array); */



            //chaining--more than one map or filter method use krna

            result=numbers.map((num)=>num*10)
                          .map((num)=>{return  num+1})
                          .filter((num)=>num>40)

                          console.log(result);