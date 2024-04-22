import inquirer from "inquirer";
// give input
// result
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your input to count a word"
    }]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
