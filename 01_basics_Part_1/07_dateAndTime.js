// console.log("date and time in js");

const myDate=new Date();
// console.log(myDate);
// console.log(typeof myDate);//object
// console.log(myDate.toString());//gives date and tiem of current instance and tiem zone and other detail
// console.log(myDate.toLocaleString());//gives date and time of current instance
// console.log(myDate.toLocaleDateString());//gives date in MM/DD/YYYY format of currnet instance
// console.log(myDate.toLocaleTimeString());//gives time onlyof current instance

const myCreatedDate=new Date(2023,2,28);//way of creating object of Date
//console.log(myCreatedDate.toDateString());//Tue Mar 28 2023
//console.log(myCreatedDate.toTimeString());

//if want date in specific format --MM/DD/YYYY
const newDate=new Date("05-14-2023")
/* console.log(newDate.toLocaleString());
console.log(newDate.toTimeString());
console.log(newDate.toDateString());
 */
//*********** Time */

const myTimeStamp=Date.now()
 console.log(myTimeStamp);//gives difference in milliseconds from 12:00 am of 01 jan 1970 to current instance
console.log(newDate.getTime());//give difference between 12:00 am of 01 jan 1970 to newDate

let latestDate=new Date();
console.log(latestDate.getMonth()+1);
console.log(latestDate.getDay());//1 means moday, 2 means tuesday

const sampleDate=new Date();
//customize bhi kr sakte hain ki kis format me date chahhiye
const strDate=sampleDate.toLocaleString('default',{
    weekday:"long",minute:"2-digit"
})
console.log(strDate);