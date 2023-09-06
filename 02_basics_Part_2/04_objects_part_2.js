// console.log("WELCOME TO PART TWO OF OBJECT");

//1. below are two ways of declaring object

        const tinderUser2=new Object(); //singelton object, declared using constructor
        const tinderUser={}//non-singleton object, declared as literal
         
        tinderUser.id="GM1295";
        tinderUser.name="saurabh"
        tinderUser.isLoggedIn=false;
       // console.log(tinderUser); 


//2- below nesting of objects means object within object within object

        const regularUser={
            email:"someone@google.com",

        
            fullName:{       
                userFullName:{
                    firstName:"saurabh",
                    lastName:"doharey"
                }
            }
        }
        // console.log(regularUser.fullName.userFullName.firstName);

   //3 .  to get the merged array using obj1 and obj2 --{1:'a', 2:'b',3:'c', 4:'d'}    

            const obj1={1:'a', 2:'b'}
            const obj2={3:'c', 4:'d'}

            //using Object.assign()

            const obj3=Object.assign({},obj1,obj2)
            //console.log(obj3);

            //using spread operator
            const obj4={...obj1,...obj2};
            //console.log(obj4);


// 4- some methods of Object

        const phonepeUser={
            name:"saurabh",
            isLoggedIn:false,
            email:'saurabh.d.0102@gmail.com',
            upi:"786@ybl",

        }

        console.log(Object.keys(phonepeUser));
        //outputs array of all the keys of object phonepeUser
        // ['name', 'isLoggedIn', 'email', 'upi']

        console.log(Object.values(phonepeUser));
        //outputs array of all the values of object phonepeUser
        //['saurabh', false, 'saurabh.d.0102@gmail.com', '786@ybl']
        
        console.log(Object.entries(phonepeUser));
        //it gives array that contain each key:value pair as an array
        //[ [ 'name', 'saurabh' ], [ 'isLoggedIn', false ], [ 'email', 'saurabh.d.0102@gmail.com' ], [ 'upi', '786@ybl' ]]

        console.log(phonepeUser.hasOwnProperty('contact'));
        // tells you whether this property exists or not