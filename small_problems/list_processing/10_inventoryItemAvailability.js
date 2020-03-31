/*
Building on the previous exercise, write a function that returns true or false based on whether or not an
inventory item is available. As before, the function takes two arguments: an inventory item and a list of
transactions. The function should return true only if the sum of the quantity values of the item's transactions
is greater than zero. Notice that there is a movement property in each transaction object. A movement value of
'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/

let transactionsFor = (id, arr) => {
  let finalArr = [];
  arr.forEach(obj => {
    if (obj.id === id) {
      finalArr.push(obj);
    }
  })
  return finalArr;
};

let isItemAvailable = (id, arr) => {
  let relevantTransactions = transactionsFor(id, arr);
  let quantity = 0;
  relevantTransactions.forEach(obj => {
    if (obj.movement === 'in') {
      quantity += obj.quantity;
    } else {
      quantity -= obj.quantity;
    }
  })
  console.log(quantity > 0);
};

// Examples:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true