/* Assignment 2
forEach
Map
Filter
Some (Any)
Every
Reduce
Includes
indexOf
Push
lastIndexOf
Object.keys()
Object.values()
*/


/* _______________________________________________________________________
forEach()

Without using the native “Array.prototype.forEach” method of JavaScript, 
compose a function titled “myEach” that will take in an array of elements 
and executes any callback function (provided by you) on each of those elements.
*/


/*           *** Class Notes for this problem  ***

const array1 = ['a','b','c'];

array1.forEach(element => console.log(elemeent));

Array.prototype.forEach

Array.prototype.forEachMyVersion = function(callback,thisArg) {

  //make sure array is not null
  if (this == null) {throw new TypeError('need not null array');}

  var T, k;

  var O = Object(this);

  var len = O.length >>> 0;  

 ***  >>>  => known as the unsigned right shift operator: shifts the first operand the specified number of bits to the right
 
  if (typeof callback !== "function") {throw new TypeError(callback + "is not a function"); }

  if (arguments.length > 1) {T = thisArg;}

  k = 0;

  while (k < len) {
    var kValue;

    if (k in O) {
      kValue = O[k];
      callback.call(T,kValue,k, O);
    }

    k++;
  }
};

const array1 = ['a','b','c'];

array1.forEach(element => console.log(element));

array1.forEachMyVersion(element => console.log(element));
*/

//my version 
//The forEach() method executes a provided function once for each array element.

Array.prototype.myEach = function(callback, thisArg) {
  for (let i = 0; i < arr1.length; i++) {
    callback(arr1[i]);
  }
  return undefined;
}
console.log("_____________________________________________________________");
console.log("1. Implmenting the myEach function \n Array: ['a','b',c'] \n Elements of the array:");
let arr1 = ['a', 'b', 'c'];
arr1.myEach(element => console.log(element));
console.log("_____________________________________________________________");

/* _______________________________________________________________________
map()

Without using the native “Array.prototype.map” method of JavaScript, compose a 
function titled “myMap” that will take in an array of elements and executes a 
callback function (provided by you) on each of those elements.
*/

Array.prototype.myMap = function(callbackFunction,thisArg) {
  let mappedArr = [];
  for (let i = 0; i < arr2.length; i++) {
    mappedArr.push(callbackFunction(arr2[i]));
  }
  return(mappedArr);
}

console.log("2. Implmenting the myMap function \n Array: [1,2,3,4]  ");
let arr2 = [1,2,3,4];
console.log("New Array with squared values:",arr2.myMap(n => (n * n)));
console.log("_____________________________________________________________");

/* _______________________________________________________________________ 
filter() 

Without using the native “Array.prototype.filter” method of JavaScript, 
compose a function titled “myFilter” that will take in an array of elements 
and executes a callback function (provided by you) on each of those elements.
*/

//The filter() method creates a new array with all elements that pass the test implemented by the provided function. 

Array.prototype.myFilter = function(callbackFunction,thisArg) {
  let filteredArray = [];
  for (let i = 0; i < arr3.length; i++) {
    if (callbackFunction(arr3[i])) filteredArray.push(arr3[i]);
  }
  return filteredArray;
}

console.log("3. Implmenting the myFilter function \n Filtering for words with length greater than 6");
console.log("Array: ['apple','pineapple','banana','orange','grapefruit']");
const arr3 = ['apple','pineapple','banana','orange','grapefruit'];
console.log("Filtered: ",arr3.myFilter(word => (word.length > 6)));
console.log("_____________________________________________________________");

/* _______________________________________________________________________
some() (aka any())

Without using the native “Array.prototype.some” method of JavaScript, 
compose a function titled “mySome” that will take in an array of elements 
and executes a callback function (provided by you) on each of those elements.
*/

/* 
The some() method tests whether at least one element in the array passes the test 
implemented by the provided function. It returns true if, in the array, it finds an 
element for which the provided function returns true; otherwise it returns false. 
It doesn't modify the array.
*/
Array.prototype.mySome = function(callbackFunction,thisArg) {
  for (let i = 0; i < arr4.length; i++) {
    if (callbackFunction(arr4[i])) {
      return true;
    }
  }
  return false;
}

console.log("4. Implmenting the mySome function \n Array: [1,2,3,4,5,6]");
const arr4 = [1,2,3,4,5,6];

console.log("Check to see if there's at least one even element: ",arr4.mySome(element => element % 2 === 0));

console.log("Check to see if there's numbers greater than 6: ",arr4.mySome(element => element > 6));


console.log("_____________________________________________________________");

/* _______________________________________________________________________
every()

Without using the native “Array.prototype.every” method of JavaScript, 
compose a function titled “myEvery” that will take in an array of elements and 
executes a callback function (provided by you) on each of those elements.
*/

//The every() method tests whether all elements in the array pass the test implemented by the provided function. 
//It returns a Boolean value.

Array.prototype.myEvery = function(callbackFunction,thisArg) {
  for (let i = 0; i < arr5.length; i++) {
    if (!callbackFunction(arr5[i])) {
      return false;
    }
  }
  return true;
}

console.log("5. Implmenting the myEvery function \n Array: [1,2,3,4,5,6]");
const arr5 = [1,2,3,4,5,6];

console.log("Check to see if all the elements are even: ",arr5.myEvery(element => element % 2 === 0));

console.log("Check to see if all the elements are less than 10: ",arr5.myEvery(element => element <10));
console.log("_____________________________________________________________");

/* _______________________________________________________________________
reduce()

Without using the native “Array.prototype.reduce” method of JavaScript, 
compose a function titled “myReduce” that will take in an array of elements 
and executes a callback function (provided by you) on each of those elements.
*/

Array.prototype.myReduce = function(callbackFunction,thisArg) {
  let val = arr6[0];
  for (let i = 1; i < arr6.length; i++) {
    val = callbackFunction(val,arr6[i]);
  }
  return val;
}
console.log("6. Implmenting the myReduce function \n Array: [1,2,3,4,5]");
const arr6 = [1,2,3,4,5];
console.log("Reducing array to its sum:",arr6.myReduce((previousValue, currentValue) => previousValue + currentValue));
console.log("Reducing array to its product:",arr6.myReduce((previousValue, currentValue) => previousValue * currentValue));
console.log("_____________________________________________________________");

/* _______________________________________________________________________
includes()

Without using the native “Array.prototype.includes” method of JavaScript, 
compose a function titled “myIncludes” that will take in an array of elements 
and indicates whether or not a target element is contained within the input array. 
This returns a boolean.
*/
Array.prototype.myIncludes = function(callbackFunction,thisArg) {
  for (let i = 0; i < arr7.length; i++) {
    if (callbackFunction(arr7[i])) return true;
  }
  return false;
}
console.log("7. Implmenting the myIncludes function \n Array: [1,3,5,7,9]");
const arr7 = [1,3,5,7,9];
for (let target = 0; target < arr7.length; target++) {
  console.log(target,"is in the array?",arr7.myIncludes(element => element == target));
}
console.log("_____________________________________________________________");


/* _______________________________________________________________________
indexOf()

Without using the native “Array.prototype.indexOf” method of JavaScript, compose a 
function titled “myIndexOf” that will take in an array of elements and returns the 
index of the first encounter of a target element (if it is found) or -1 if that element 
does not exist within the input array.
*/
Array.prototype.myIndexOf = function(callbackFunction,thisArg) {
  for (let i = 0; i < arr8.length; i++) {
    if (callbackFunction(arr8[i])) return i;
  }
  return -1;
}
console.log("8. Implmenting the myIndexOf function \n Array: [10,20,45,23,10,40]");
const arr8 = [10,20,45,23,10,40];
let target = 20;
console.log(target,"is in index: ",arr8.myIndexOf(element => element == target));
target = 40;
console.log(target,"is in index: ",arr8.myIndexOf(element => element == target));

console.log("_____________________________________________________________");


/* _______________________________________________________________________
push()

Without using the native “Array.prototype.push” method of JavaScript, compose a 
function titled “myPush” that will take in an array of elements as well as an elementToAdd 
and append that element to the end of the array.
*/
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

Array.prototype.myPush = function(callbackFunction,thisArg) {
  arr9[arr9.length] = callbackFunction(arr9);
  console.log("The new array is: ",arr9)
  return arr9.length;
  
}

console.log("9. Implmenting the myPush function \n Array: ['pigs', 'goats', 'sheep'] ");
const arr9 = ['pigs', 'goats', 'sheep'];
console.log("It now has the length of:",arr9.myPush(elementToAdd => 'cows'));
console.log("_____________________________________________________________");
/* _______________________________________________________________________
lastIndexOf()

Without using the native “Array.prototype.lastIndexOf” method of JavaScript, 
compose a function titled “myUnshift” (typo) that will take in an array of elements 
and returns the index of the last encounter of a target element (if it is found) or -1 
if that element does not exist within the input array.
*/
Array.prototype.myUnshift = function(callbackFunction,thisArg) {
  let place = -1; 
  for (let i = 0; i < arr10.length; i++) {
    if (callbackFunction(arr10[i])) place = i;
  }
  return place;
}
console.log("10. Implmenting the myUnshift function \n Array: [10,20,40,23,10,40,20,23]");
const arr10 = [10,20,40,23,10,40,20,23];
let goal = 23;
console.log(goal,"is last encountered in index: ",arr10.myUnshift(element => element == goal));
goal = 40;
console.log(goal,"is last encountered in index: ",arr10.myUnshift(element => element == goal));

console.log("_____________________________________________________________");

/* _______________________________________________________________________
Object.keys()

Without using the native “Object.keys()” method of JavaScript, compose a function 
titled “grabKeys” that will take in an object and return all of the keys of the key:value 
pairs of that object. Modify the Object class, appending a static method to the Object class., 
appending a static method to the Object class. Leverage the “for...in” loop.
*/

//The Object.keys() method returns an array of a given object's own enumerable property names, 
//iterated in the same order that a normal loop would.

function grabKeys(Object) {
  let arr11 = [];
  for (let key in object1) {
    arr11.push(key);
  }
  return arr11;
}
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log("11. Implementing the grabKeys method: \n Object: { a: 'somestring', b : 42, c : false }")
console.log("The keys to this object are:",grabKeys(object1));
console.log("_____________________________________________________________");


/* _______________________________________________________________________
Object.values()

Without using the native “Object.values()” method of JavaScript, compose a function 
titled “grabValues” that will take in an object and return all of the values of the key:value 
pairs of that object. Modify the Object class, appending a static method to the Object class. 
Leverage the “for...in” loop.
*/

//The Object.values() method returns an array of a given object's own enumerable property values, 
//in the same order as that provided by a for...in loop. (The only difference is that a for...in loop 
//enumerates properties in the prototype chain as well.)

function grabValues(Object) {
  let arr12 = [];
  for (let value in object2) {
    arr12.push(object2[value]);
  }
  return arr12;
}
const object2 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log("12. Implementing the grabValues method: \n Object: { a: 'somestring', b : 42, c : false }")
console.log("The values in this object are:",grabValues(object1));
console.log("_____________________________________________________________");


console.log("\t\t\t\tMISCELLANEOUS PROBLEMS");
console.log("_____________________________________________________________");

console.log("Miscellaneous Problems (4)");
/*
Miscellaneous Problems (4)

From Chapter 4 of Eloquent JavaScript

Sum of a Range
Reversing an Array
A List
Deep Comparison

*/
console.log("_____________________________________________________________");
console.log("SUM OF A RANGE \n 1. range function \n 2. sum function \n");

/*
1. range function
Write a range function that takes two arguments, start and end, and returns an array containing 
all the numbers from start up to (and including) end.
*/

function range(start,end) {
  let rangeArray = [];
  while (start != end+1) {
    rangeArray.push(start);
    start++;
  }
  return rangeArray;
}

console.log(" (range function) The numbers from 1 to 10 are:\n",range(1,10));

/*
2. sum function 
Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
*/

function sum(arr) {
  let total = 0;
  for (let j = 0; j < arr.length; j++) {
    total += arr[j];
  }
  return total;
}

console.log(" (sum function) The sum of the numbers from 1 to 10 is:",sum(range(1,10)));


/* BONUS ASSIGNMENT: modify your range function to take an optional third argument that indicates 
the “step” value used when building the array
*/
console.log("\nModifiying the range function to have a step:")
function rangeWithStep(start,stop,step) {
  if (step === undefined) {step = 1;}
  let rangeArray2 = [];
  while (start != stop) {
    rangeArray2.push(start);
    start+=step;
  }
  rangeArray2.push(stop)
  return rangeArray2;
}

console.log(rangeWithStep(1,5,2)); //Output: [1,3,5]
console.log(rangeWithStep(5,2,-1)); //Output: [ 5, 4, 3, 2 ]

console.log("_____________________________________________________________");

console.log("REVERSING AN ARRAY \n 1.reverseArray \n 2.reverseArrayInPlace \n")

/*For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the 
same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method 
does: it modifies the array given as argument by reversing its elements.
*/

function reverseArray(array) {
  let newArray = [];
  for (let z = array.length - 1; z >= 0; z--) {
    newArray.push((array[z]));
  }
  return newArray;
}
let arrayValue = [1, 2, 3, 4, 5];
console.log("Original array: [1, 2, 3, 4, 5] \n using the reverseArray function: \n",reverseArray(arrayValue));

function reverseArrayInPlace(array) {
  for (let k = 0; k < array.length/2; k++) {
    let temp = array[k];
    array[k] = array[array.length-k-1];
    array[array.length-k-1] = temp;
  }
  return array;
}

console.log("\nOriginal array: [5,4,3,2,1] \n using the reverseArrayInPlace function: \n",reverseArrayInPlace([5,4,3,2,1]));

console.log("_____________________________________________________________");

console.log("A LIST\n 1.arrayToList \n 2.listToArray\n 3.prepend \n 4.nth")

/*
Write a function arrayToList that builds up a list structure like the one shown 
when given [1, 2, 3] as argument. Also write a listToArray function that produces an 
array from a list. Then add a helper function prepend, which takes an element and a list 
and creates a new list that adds the element to the front of the input list, and nth, 
which takes a list and a number and returns the element at the given position in the 
list (with zero referring to the first element) or undefined when there is no such element.

*/

function arrayToList(array) {
  let list = null;
  for (let x = array.length - 1; x >= 0; x--) {
    list = {value: array[x], rest: list};
  }
  return list;
}

console.log("Printing the array [1,2,3] to a list:",arrayToList([1,2,3]));

function listToArray(list, listToArr = []) {
  listToArr.push(list.value);
  return (list.rest != null) ? listToArray(list.rest,listToArr) : listToArr;
}

console.log("Converting the previous list back to an array:",listToArray(arrayToList([1,2,3])));


function prepend(element, list) {
  let prependList = { value: element, rest:list }
  return prependList;
}

console.log("Prepending 20, then 10 to the list gives you:",prepend(10,prepend(20,null)));

function nth(list,number) {
  return (number===0)? (list.value) : (nth(list.rest,number-1));
}

console.log("The element at position 1 using the nth function:",nth(arrayToList([10, 20, 30]), 1));
console.log("_____________________________________________________________");

console.log("DEEP COMPARISON")

/*
Write a function deepEqual that takes two values and returns true only if they are the 
same value or are objects with the same properties, where the values of the properties are 
equal when compared with a recursive call to deepEqual.
*/
function deepEqual(thing1,thing2) {
  if (thing1 === thing2) return true;
  else if ((typeof thing1 == 'object' && thing1 != null) && (typeof thing2 == 'object' && thing2 != null)) {
    if (Object.keys(thing1).length != Object.keys(thing2).length) return false;

    for (let prop in thing1) {
      if (thing2.hasOwnProperty(prop)) {
        if (!deepEqual(thing1[prop],thing2[prop])) return false;
      }
      else return false;
    }
    return true;
  }
  else return false;
}

console.log("Implementing the deepEqual method: ")
var obj = {here: {is: "an"}, object: 2};
console.log("deepEqual(obj,obj):",deepEqual(obj,obj));

console.log("deepEqual(obj, {here: 1, object: 2}): ",deepEqual(obj, {here: 1, object: 2}));
console.log("_____________________________________________________________");
//Miscellaneous Problems (1)
console.log("Miscellaneous Problems (1)");
/*
1: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative 
order of the non-zero elements.

function moveZeros (nums) {
  ...
}
Example:
 
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
 
Note: You must do this in-place without making a copy of the array.
*/

function moveZeros (nums) {
  for (let num = 0; num < nums.length; num++) { //iterating through the array
    if (nums[num] == 0) { //if the element = 0 
      let index = num;
      while (index != nums.length) {
        nums[index] = nums[index+1]; //shift the elements on the right of the 0 to the left
        index++;
      }
      nums[nums.length-1] = 0;
    }
  }
  return nums;
}

let nums = [0,1,0,3,12];
console.log("Original Array: [0,1,0,3,12] \n After moving the zeros to the end:", moveZeros(nums));
console.log("_____________________________________________________________");
// _______________________________________________________________________

