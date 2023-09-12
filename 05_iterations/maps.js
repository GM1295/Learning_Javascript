/* 

The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.
//The map is a collection of elements where each element is stored as a Key, value pair. 
                //Map objects can hold both objects and primitive values as either key or value. 
                //When we iterate over the map object it returns the key, and value pair in the same order as inserted.


How to Create a Map
You can create a JavaScript Map by:

1- Passing an Array to new Map()


        const fruits = new Map([
                ["apples", 500],
                ["bananas", 300],
                ["oranges", 200]
                ]);


2- Create a Map and use Map.set()
        // Create a Map
        const fruits = new Map();

        // Set Map Values
        fruits.set("apples", 500);
        fruits.set("bananas", 300);
        fruits.set("oranges", 200);








METHOD	     DESCRIPTION
new Map()	  Creates a new Map object
set()	      Sets the value for a key in a Map
get()	      Gets the value for a key in a Map
clear()	      Removes all the elements from a Map
delete()	  Removes a Map element specified by a key
has()	      Returns true if a key exists in a Map
forEach()	  Invokes a callback for each key/value pair in a Map
entries()	  Returns an iterator object with the [key, value] pairs in a Map
keys()	      Returns an iterator object with the keys in a Map
values()	  Returns an iterator object of the values in a Map

PROPERTY	DESCRIPTION
size	Returns the number of Map elements

Differences between JavaScript Objects and Maps:

OBJECT	                                                MAP
Not directly iterable	                           Directly iterable
Do not have a size property	                      Have a size property
Keys must be Strings (or Symbols)	              Keys can be any datatype
Keys are not well ordered	                       Keys are ordered by insertion
Have default keys	                              Do not have default keys







*/


