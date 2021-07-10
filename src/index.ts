import inquirer from "inquirer";
import compute from "./compute";
import showIntro from "./showIntro";

showIntro()

enum Option {
  Compute = "Compute a number",
  Quit = "Quit"
}

const run = async () => {
  let running = true

  while (running) {
    const { option } = await inquirer.prompt([
      {
        name: "option",
        message: "What would you like to do?",
        type: "list",
        choices: [Option.Compute, Option.Quit]
      }
    ])

    if (option === Option.Quit) {
      running = false
      console.log("Goodbye! 👋")
      break
    }

    const { number } = await inquirer.prompt([
      {
        name: "number",
        type: "number",
        message: "Enter a number (0 ... n)",
      }
    ])

    console.log(`\n ${compute(number)} \n`)
  }
}

run()
