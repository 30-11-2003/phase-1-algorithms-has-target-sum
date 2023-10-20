function hasTargetSum(array, target) {
for (let i= 0; i< array.length; i++) {
  const complement =target- array[i];
  for (let j =i + 1; j < array.length; j++) {
    if (array[j]===complement )return true ;
  }
}
return false;
  
}

  

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2);
  Space:O(n)
*/

/* 
  Add your pseudocode here
  iterate through each no. in array
  for the current no, identify a complement that adds to the target
  (complement=target - current no)
  iterate through the rest of the array 
  check if any num is our complement
  if so,return true
  if i reach end of array return false
*/

/*
  Add written explanation of your solution here
  using the quadratic time method of using pairs of items in a nested loop,
  we use the method to identify the number and its complement to sum up to its target.
  if the pair is within the array, we return true
  if only one is found in the array, we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
