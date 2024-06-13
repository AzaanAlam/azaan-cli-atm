#! /usr/bin/env node

// (#)"SHA" or "HASH" (!)"BANG" (#)(!)SHABANG or HASHBANG

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
let myPin = 1234;
let condition = true;

console.log(chalk.bold.magentaBright("=".repeat(60)));
console.log(
  chalk.bold.greenBright(
    chalk.italic("\t========== Welcome to Azaan ATM ==========")
  )
);
console.log(chalk.bold.magentaBright("=".repeat(60)));

while (condition) {
  let continuing = await inquirer.prompt([
    {
      message: "Press 'Y' to start using ATM or 'N' to stop using ATM.",
      name: "continuingATM",
      type: "confirm",
      default: "false",
    },
  ]);
  condition = continuing.continuingATM;
  if (condition == false) {
    break;
  }

  const pinAnswer = await inquirer.prompt([
    { message: "Enter your PIN number: ", type: "number", name: "pin" },
  ]);

  if (pinAnswer.pin === myPin) {
    console.log(chalk.bold.greenBright("Correct PIN Code!!!!"));
    const ch1 = await inquirer.prompt([
      {
        message: "Please select an option: ",
        type: "list",
        name: "operation",
        choices: ["Cash Withdrawl", "Check Balance", "Fast Cash"],
      },
    ]);
    if (ch1.operation === "Cash Withdrawl") {
      let amount = await inquirer.prompt([
        { message: "Enter ammount: ", type: "number", name: "amountWithDraw" },
      ]);
      if (amount.amountWithDraw <= myBalance) {
        console.log(chalk.bold.greenBright("Withdrawl successful."));
        myBalance -= amount.amountWithDraw;
        console.log(
          chalk.bold.white(
            `Your current balance is ${chalk.bold.yellowBright(myBalance)}`
          )
        );
      } else {
        console.log(
          chalk.bold.redBright(
            "You don't have sufficient balance in your bank account."
          )
        );
      }
    } else if (ch1.operation === "Check Balance") {
      console.log(
        chalk.bold.white(
          `Your current balance is ${chalk.bold.yellowBright(myBalance)}`
        )
      );
    } else if (ch1.operation === "Fast Cash") {
      let fastCsh = await inquirer.prompt([
        {
          message: "Please select an option",
          name: "operation",
          type: "list",
          choices: ["1000", "2000", "5000", "10000"],
        },
      ]);
      if (fastCsh.operation === "1000") {
        console.log(chalk.bold.greenBright("Withdrawl successful."));
        myBalance -= 1000;
        console.log(
          chalk.bold.white(
            `Your current balance is ${chalk.bold.yellowBright(myBalance)}`
          )
        );
      } else if (fastCsh.operation === "2000") {
        console.log(chalk.bold.greenBright("Withdrawl successful."));
        myBalance -= 2000;
        console.log(
          chalk.bold.white(
            `Your current balance is ${chalk.bold.yellowBright(myBalance)}`
          )
        );
      } else if (fastCsh.operation === "5000") {
        console.log(chalk.bold.greenBright("Withdrawl successful."));
        myBalance -= 5000;
        console.log(
          chalk.bold.white(
            `Your current balance is ${chalk.bold.yellowBright(myBalance)}`
          )
        );
      } else if (fastCsh.operation === "10000") {
        console.log(chalk.bold.greenBright("Withdrawl successful."));
        myBalance -= 10000;
        console.log(
          chalk.bold.white(
            `Your current balance is ${chalk.bold.yellowBright(myBalance)}`
          )
        );
      }
    }
  } else {
    console.log(chalk.redBright.bold("Wrong PIN"));
    console.log(chalk.redBright.bold("Please Enter correct PIN"));
  }
}
