// console.log("welcome to chapter Arrays");


// WAYS OF CREATING AN OBJECT OF ARRAY

   /*  const arraySame=[1,2,3,4,5];// all element of same data type
    console.log(typeof arraySame);
    console.log(arraySame);

    const anotherArray=new Array(100,"hello saurabh",true,4.78,[2,4,5]);
    console.log(typeof anotherArray);
    console.log(anotherArray);

    const arrayDiff=[1,'hi',5.7,true,"VS CODE",[2,4,"hello"]];//element of diff data type and an array can be en element
    console.log(typeof arrayDiff);//object
    console.log(arrayDiff); */

//METHODS AND PROPERTIES

    const sampleArray=[120,"hello world",false,3.14,[1,'hi',true,1.74],{name:"saurabh",age:27}]
    //console.log(sampleArray);

    //console.log(sampleArray.length); //gives length

    sampleArray.push('newElement')//insert element at end if written inside log  
                                  //then return the index at which inserted
    

    sampleArray.pop()//removes eleemt from last index and if written inside log 
                     //then return the elemnt which is popped

    sampleArray.unshift('start')//insert element at begining and if written inside log 
                                //then retrun the updated length of array
    
    
    sampleArray.shift();//remmove element from begining and if written inside log 
                       //then return the element which is removed
    
// unshift() and shift() are expensive operation because insertion or removal
//happens at begining therefore elements are shifted which will be very time taking
//if array has too many elements
    
    
    // includes() gives boolean result
    // console.log(sampleArray.includes(120));//array contains element 120 hence true
    // console.log(sampleArray.includes(119));//array doesn't contain element 120 hence false

   //indexOf(): gives index if element present and gives -1 if not present
//    console.log(sampleArray.indexOf("hello world"));// 1
//    console.log(sampleArray.indexOf("hello array"));// -1

   const inheritedArray=sampleArray.join();//typeof inheritedArray is string
   //console.log(typeof inheritedArray);
   //console.log(inheritedArray);//elements string ke form me honge


   //slice(startIndex, endIndex) and splice(startIndex, endIndex)

   //in both slice() and splice() endIndex optional hota hai 
   //if not mention then last index will be the default endIndex

   
   const array=[1,2,3,4,5,6,7,8];
   console.log("original array :",array);
   const slicedArray=array.slice(1,5);//ignores endIndex and slice() doesn't alter original array
   console.log("slicedArray(1,5) : ",slicedArray);// outputs [2, 3, 4, 5]
   console.log("original array after slice(1,5) operation : ",array); //outputs [1, 2, 3, 4, 5, 6, 7, 8]

   //in splice() endIndex is considered and splice() alters the original array

   const splicedArray=array.splice(1,5);
   console.log("splicedArray(1,5) : ",splicedArray); //outputs [3,4,5,6,7]
   console.log("original array after splice(1,5) operation : ",array); //outputs [1,2,8] original array alter ho gyi