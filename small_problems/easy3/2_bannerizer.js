/* Write a function that will take a short line of text, and write it to the console log within a box.

Examples:
=> logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

=> logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.
*/

let logInBox = str => {
  console.log(`+${'-'.repeat(str.length + 2)}+`);
  console.log(`|${' '.repeat(str.length + 2)}|`);
  console.log(`| ${str} |`);
  console.log(`|${' '.repeat(str.length + 2)}|`);
  console.log(`+${'-'.repeat(str.length + 2)}+`);
};

logInBox('To boldly go where no one has gone before.');
logInBox('');

/*
Further Exploration

Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a
second argument (the width is the width of the box itself). You may assume no maximum if the second argument
is omitted.

For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear
on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with
basic JavaScript.
*/