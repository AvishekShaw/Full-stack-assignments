/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpentCategoryWise = [];
  for (let i = 0; i< transactions.length; i++) {
    category = transactions[i].category;
    price = transactions[i].price;

    if (totalSpentCategoryWise[category] === undefined) {
      totalSpentCategoryWise[category] = price;
    }

    else {
      totalSpentCategoryWise[category] += price;}
  }

  result = [];
  for (category in totalSpentCategoryWise) {
    result.push({category, totalSpent: totalSpentCategoryWise[category]});
  }
  return result;
}

transactions = [
  {category: "food", price: 10, timestamp: 1},
  {category: "housing", price: 20, timestamp: 2},
  {category: "services", price: 30, timestamp: 3},
  {category: "services", price: 30, timestamp: 3},
]

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
