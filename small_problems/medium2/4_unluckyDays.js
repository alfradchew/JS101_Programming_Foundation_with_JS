/*
Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function
that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is
greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same
calendar will remain in use for the foreseeable future.
*/

let fridayThe13ths = num => {
  let count = 0;
  for (let i = 0; i < 12; i += 1) {
    new Date(num, i, 13).getDay() === 5 ? count += 1 : count;
  }
  console.log(count);
};

// Examples:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

/*
Further Exploration

Do you think using the Array.prototype.reduce method was a good choice? Why or why not?
*/