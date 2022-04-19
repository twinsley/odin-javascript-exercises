const removeFromArray = function (arr, ...input) {
  let newArray = [];

  const toRemove = [...input];

  for (let i = 0; i < toRemove.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] === toRemove[i]) {
        continue;
      } else if (!newArray.includes(arr[x]) && !input.includes(arr[x])) {
        newArray.push(arr[x]);
      }
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
