import { Command } from "commander";
import { UpdateReadmeCommand } from "./updateReadme.command.js";
import { UpdateWeekchartCommand } from "./updateWeekchart.command.js";

export function openConsole() {
  const program = new Command();

  program
    .command("readme:update")
    .description("Update the README.md file")
    .action(async () => {
      const updateReadmeCommand = new UpdateReadmeCommand();
      await updateReadmeCommand.execute();
    });

  program
    .command("weekchart:update")
    .description("Update the weekchart image")
    .action(async () => {
      const updateWeekchartCommand = new UpdateWeekchartCommand();
      await updateWeekchartCommand.execute();
    });

  program.parse(process.argv);
}
