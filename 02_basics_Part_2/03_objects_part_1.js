console.log("INVESTIGATIVE STUDY ABOUT OBJECTS");

//there is a concept of singleton  objects 
//whenever object as literal bnta hai to singleton ni bnta hai

// objects are also declared using constructor Object.create
 
//Object as literal


const student={
    name:"saurabh",
    email:'abc@gmail.com',
    contact:8770954042,
    gender:'M',
    "father name":"Manik chandra doharey",
    subjectMarks:{hindi:85,english:63,maths:95}, //object
    olympiads:['maths','computer science','physics'], //array
    attendance:'85%',
    introduction:function(){console.log(`hi my name is ${this.name} and contact is ${this.contact}`);} //function

}
// console.log(student.subjectMarks.english);
// console.log(student.attendance);
// console.log(student["father name"]);//can't be accessed like console.log(student.father name) this syntax will throw error
// student.introduction()


student.email="abc@microsoft.com";
//console.log(student["email"]);

//Object.freeze(student);//freezes the values of key and any change won;t be effective

student.gender='F';
//console.log(student.gender);//earlier gender was "M" and as we freezed the value therefore no change of above line

student.greet=function(){ console.log(`hi my name is ${this.name}`);// this refers to the current object
    
}
student.greet()// if above Object.freeze() is mention then adding function as keys will throw erro

