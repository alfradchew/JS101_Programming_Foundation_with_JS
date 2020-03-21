// Pick out the minimum age from our current Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesValue = Object.values(ages);
let sum = 0;
agesValue.reduce((accumulator, currentValue) => {
  return accumulator < currentValue ? accumulator : currentValue;
}, 9999);