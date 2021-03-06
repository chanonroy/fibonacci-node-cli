import chalk from "chalk";
import figlet from "figlet";

export default function showIntro() {
  // Loading message
  console.log(
    chalk.yellow(
      figlet.textSync('Fibonacci', {
        font: "Block",
        horizontalLayout: 'default',
        whitespaceBreak: true
      })
    )
  );
}
