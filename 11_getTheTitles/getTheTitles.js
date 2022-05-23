const getTheTitles = function ([...arr]) {
  let items = [...arr];
  let result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i].title);
  }
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
