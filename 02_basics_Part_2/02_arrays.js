const marvelHeroes=['Ironman','thor','spiderman'];
const dcHeroes=[' batman','superman','wonderwoman '];

//marvelHeroes.push(dcHeroes);//here marvelHeroes will take dcHeroes as an element
                            // elements of dcHeroes won't be seprate elements in marvelHeroes
                            //marvelHeroes.length will be 4 not 6
                            //marvelHeroes[3] will be ['batman','superman','wonderwoman']
//console.log(marvelHeroes);
                            //output is ['Ironman','thor','spiderman',['batman','superman','wonderwoman']]

//console.log(marvelHeroes[3][0]);//outputs batman

const allHeroes=marvelHeroes.concat(dcHeroes);//this doesn;t change original array infact return concatenated array
// console.log(allHeroes);//gives desire result

 const indianHeroes=['hanuman','shaktiman','karma','junior-G'];
 const globalHeroes=marvelHeroes.concat(dcHeroes,indianHeroes);
//  console.log(globalHeroes);

//another way of getting the same ouput as above using spread operator
const heroesGroup=[...marvelHeroes,...dcHeroes,...indianHeroes,]
//console.log(heroesGroup);

const anotherArray=[1,2,3,[4,5],[8,9],[10,11,[13,14,[16,17]]],19,20];

const anotherSimpleArray_1=anotherArray.flat(1);//parameter in flat() tells to which depth array is to be made flat/spread out 
//console.log(anotherSimpleArray_1);//outputs [ 1, 2, 3, 4, 5, 8, 9, 10, 11, [ 13, 14, [ 16, 17 ] ], 19, 20 ]

const anotherSimpleArray_2=anotherArray.flat(2);
//console.log(anotherSimpleArray_2);//outputs [ 1, 2, 3, 4, 5, 8, 9, 10, 11, 13, 14, [ 16, 17 ], 19, 20 ] 

const anotherSimpleArray_3=anotherArray.flat(3);
//console.log(anotherSimpleArray_3);//outputs [1,  2,  3,  4,  5, 8,9, 10, 11, 13, 14, 16,17, 19, 20]


const anotherSimpleArray=anotherArray.flat(Infinity);//Infinity means whatever depth is there resolve all
//console.log(anotherSimpleArray);


//*************************** */




//console.log(Array.isArray("saurabh"));//isArray() gives boolean result whether pased object is array or not
// console.log(Array.isArray([1,2,3,3]));
//console.log(Array.from("saurabh"));//from() converts passed object into array
console.log(Array.from({name:"saurabh",age:28,contact:8770954042}));//return empty array coz array can be of keys or values
//so explicitly this one need to be mentioned //just above case is interesting 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//of()--Returns a new array from a set of elements.
//outputs [100,200,300]

















// console.log(anotherSimpleArray);

