/*
Given the following data structure, use the map method to return a new array identical in structure to the original but,
with each the number incremented by 1. Do not modify the original data structure.
*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let finalObj = {};
  Object.keys(obj).forEach(key => {
    finalObj[key] = obj[key] + 1;
  });
  return finalObj;
});

console.log(arr);
console.log(newArr);