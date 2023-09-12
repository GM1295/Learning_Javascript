//reduce() method

const myNums=[1,2,3,4,5]

let result=myNums.reduce(function(acc,curr){
    console.log(`acc : ${acc} and curr : ${curr}`);

},0)
// console.log(result);
 result=myNums.reduce((acc,curr)=>acc+curr,0)
 console.log(result);

 const shoppingCart=[
    {
        course:'javascript',
        price:2999
    },
    {
        course:'python',
        price:5999
    },
    {
        course:'Data Scientist',
        price:6999
    },
    {
        course:'Machine learning',
        price:12999
    },
 ]

 const finalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0)
 console.log('final cart price is ',finalPrice);