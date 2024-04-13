#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //BASE
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "enter your ammount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let userAmount = user_answer.amount;
let baseAmount = userAmount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(userAmount);
console.log(convertedAmount);
