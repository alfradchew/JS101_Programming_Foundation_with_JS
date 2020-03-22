// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.

console.log(Object.keys(munsters).reduce((accumulator, currentKey) => {
  let gender = munsters[currentKey]['gender'];
  let age = munsters[currentKey]['age'];
  accumulator = gender === 'male' ? accumulator + age : accumulator;
  return accumulator;
}, 0));