
   // Javascript program to check if all array
   // elements are distinct
   function checkUniqueness(myArray) {
    return myArray.length === new Set(myArray).size;
  }
  
  let arrOne = [1, 4, 6, 2, 1]
  console.log(`${arrOne} is unique : ${checkUniqueness(arrOne)}`);
  
  let arrTwo = [1, 4, 6, 2, 3]
  console.log(`${arrTwo} is unique : ${checkUniqueness(arrTwo)}`);
    