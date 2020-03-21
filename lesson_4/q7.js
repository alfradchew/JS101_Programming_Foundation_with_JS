// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// [undefined, 'bear'] because for strings with length <= 3, there is not else statement and hence 
// the return value is undefined