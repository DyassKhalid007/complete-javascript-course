/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Understanding the problem
// How to show temps in a string in a certain order?

function printForecast(tempArray) {
  let result = "";

  for (let i = 0; i < tempArray.length; i++) {
    result = result + `... ${tempArray[i]}*C in ${i + 1} days ... `;
  }

  console.log(result);
  return result;
}

const array = [17, 21, 23];
printForecast(array);
