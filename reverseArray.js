/*
2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.
```js
console.log(reverseArray(["A", "B", "C"]));
["C", "B", "A"]
```
*/

const reverseArray = ["A", "B", "C"];
reverseArray.reverse();

console.log(reverseArray);

/*method 2 */
function reverseArray1( array ) {
    var reversedArray = [];
  
    while( i = array.pop() )
        reversedArray.push( i );
    
    return reversedArray;
  }

  console.log(reverseArray1(["A", "B", "C"]));