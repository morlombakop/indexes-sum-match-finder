const findSumMatchRecursive = (
  numbers: number[],
  sum: number,
  firstIndex: number = 0
) => {
  // Simple input validation
  if ((numbers && numbers.length < 2) || isNaN(sum)) {
    return "Invalid Input";
  }

  // Stop the iteration once all array indexes have been covered
  if (firstIndex === numbers.length) {
    return "No match found";
  }

  // Here, we interate over the array without mutating the initail array.
  // We create a copy of initial array with  numbers.slice(0)
  const solution = numbers.slice(0).reduce((acc, number, secondIndex, arr) => {
    acc.firstIndex = firstIndex;
    if (
      arr[acc.firstIndex] !== number &&
      arr[acc.firstIndex] + number === sum
    ) {
      acc.secondIndex = secondIndex;
      arr.splice(secondIndex);
    }
    return acc;
  }, {});

  if (solution.secondIndex) {
    return `Matching indexes are: ${solution.firstIndex}  and ${
      solution.secondIndex
    }`;
  } else {
    // We recall our function.
    return findSumMatchRecursive(numbers, sum, firstIndex + 1);
  }
};

const solution = findSumMatchRecursive([11, 2, 7, 15], 9);

document.getElementById("app").innerHTML = `
  <h1>${solution}</h1>
  <h4>Open the index.ts file in the src folder on 2nd left panel to play around with the code</h4>
`;
