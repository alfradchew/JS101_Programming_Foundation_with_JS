/*
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive,
the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm).
Your method should work with any integer input.

You may not use javascript's Date class methods.
*/

let timeOfDay = num => {
  
  // For negative number
  while (num < 0) {
    num += 1440; // Plus one day of minutes (60 * 24)
  }

  // For number more than 1440
  while (num > 1440) {
    num -= 1440;
  }

  let hour = parseInt(num / 60);
  let minute = Math.round(num % 60);
  hour = hour < 10 ? '0' + String(hour) : String(hour);
  minute = minute < 10 ? '0' + String(minute) : String(minute);

  return `${hour}:${minute}`;
}

// Examples:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other complications.

/*
Further Exploration

How would you approach this problem if you were allowed to use JavaScript's Date class? Suppose you also needed to
consider the day of week? (Assume that deltaMinutes is the number of minutes before or after midnight between Saturday
and Sunday; in such a method, a deltaMinutes value of -4231 would need to produce a return value of Thursday 01:29.)
*/

let timeOfDayEdited = num => {
  
  let weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let weekIndex = 0;

  // For negative number
  while (num < 0) {
    num += 1440; // Plus one day of minutes (60 * 24)
    weekIndex -= 1;
    weekIndex = weekIndex < 0 ? weekArray.length - 1 : weekIndex; // To ensure that weekIndex stays between [0, 6]
  }

  // For number more than 1440
  while (num > 1440) {
    num -= 1440; // Minute one day of minutes
    weekIndex += 1;
    weekIndex = weekIndex > 6 ? weekIndex % weekIndex.length : weekIndex; // To ensure that weekIndex stays between [0, 6]
  }

  let hour = parseInt(num / 60);
  let minute = Math.round(num % 60);
  hour = hour < 10 ? '0' + String(hour) : String(hour);
  minute = minute < 10 ? '0' + String(minute) : String(minute);

  return `${weekArray[weekIndex]} ${hour}:${minute}`;
}

console.log(timeOfDayEdited(-4231));  // Thursday 01:29
console.log(timeOfDayEdited(0));      // Sunday 00:00
console.log(timeOfDayEdited(-3));     // Saturday 23:57
console.log(timeOfDayEdited(35));     // Sunday 00:35
console.log(timeOfDayEdited(-1437));  // Saturday 00:03
console.log(timeOfDayEdited(3000));   // Tuesday 02:00
console.log(timeOfDayEdited(800));    // Sunday 13:20
console.log(timeOfDayEdited(-4231));  // Thursday 01:29