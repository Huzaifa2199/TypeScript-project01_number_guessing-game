#!/usr/bin/env node
import inquirer from "inquirer";

type anstype = {
    userGuess: number
}

const systemGenNum = Math.floor(Math.random()+9);

const answers : anstype = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "type your guess between 1 to 10: "
    }
])

const {userGuess} = answers;

if(userGuess === systemGenNum) {
    console.log("Yeah you win!")
} else{
    console.log("Please try again")
}

console.log("Correct number:", systemGenNum)