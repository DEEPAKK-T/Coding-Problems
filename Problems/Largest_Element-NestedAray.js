
/*
let nestedArray = [10, 20, [40, 50,70], 30]

function findLargestElement(nestedArray) { 

  let largest = nestedArray[0][0]; 

  for (let arr of nestedArray) { 

    for (let num of arr) { 

      if (num > largest) { 

        largest = num; 

      } 

    } 

  } 

  return largest; 

} 

*/
function findLargestElement(nestedArray) {
  let largest = Number.NEGATIVE_INFINITY; // Initialize with a very small value

  for (let arr of nestedArray) {
    if (Array.isArray(arr)) { // Check if it's a nested array
      largest = Math.max(largest, findLargestElement(arr)); // Recursively find largest in nested array
    } else {
      largest = Math.max(largest, arr); // Compare with current largest
    }
  }

  return largest;
}

let nestedArray = [10, 20, [40, 50,70], 30]

console.log(findLargestElement(nestedArray));

