// Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/* 
first() returns the object {prop1: 'hi there'} whereas second() returns undefined.
This is because the second() is actually equivalent to

function second() {
  return;
  {
    prop1: "hi there"
  };
}

where the function will stop at the return statement. Javascript will insert semicolons for
you where it thinks you need them.
*/