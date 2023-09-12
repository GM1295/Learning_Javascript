  const codingLanguage=["javascript","ruby","python","C#","java","C++"]


  /* const result=codingLanguage.forEach((item)=>{
    console.log(item);
  }) */
  //console.log(result);//for each loop doesn't return any thing


  const myNum=[4,6,12,14,16,18,20,21,23,8,10,]

 

  const result=myNum.filter((num)=>num%2==0) //filter return something so we need to store the returned value
  //console.log(result);

  const newResult=myNum.filter((num)=>{return num>5})
  //console.log(newResult);

  const primeNumbers=myNum.filter(isPrime)
  //console.log(primeNumbers);

          function isPrime(num)
          {
                
                if(num==1)
                return 

                if(num==2||num==3)
                return num;
              let flag=false;
            for (let index = 2; index <= num/2; index++) 
            {
                
                if(num%index==0)
                {
                    flag=true;
                    break;
                }
            }
            if(flag==false)
            return num;

            
  }

          const updatedResult=[]
          myNum.forEach((num)=>{
            if(num>4)
            updatedResult.push(num)
          })
          //console.log(updatedResult);


          const books=[

            {title:'book One', genre:'science', publish:1984, edition:1},
            {title:'book Two',genre:'non fiction',publish:2009,edition:5},
            {title:'book Three',genre:'fiction',publish:1975,edition:7},
            {title:'book Four',genre:'history',publish:2010,edition:4},
            {title:'book Five',genre:'science',publish:2023,edition:8},

            {title:'book Six',genre:'non fiction',publish:2005,edition:11},

            {title:'book Seven',genre:'history',publish:1996,edition:12},

            {title:'book Eight',genre:'fiction',publish:1999,edition:9},

            
          ]

          let bookList=books.filter((bk)=>bk.genre==='history')
          bookList=books.filter((bk)=>{return bk.genre==='history'&&bk.publish<=1999})
          //curly braces means you have opened the scope therefore explicitly return krna padta hai

          bookList=books.filter((bk)=>{return bk.genre==='fiction'&&bk.publish<=2023})



          console.log(bookList);


  
  
  
  
  
  
  
  
 