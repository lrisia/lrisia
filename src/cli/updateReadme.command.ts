import { readFileSync, writeFileSync } from "fs";
import { createNewText } from "../template";

export class UpdateReadmeCommand {
  async execute(): Promise<void> {
    console.log("Updating README.md...");

    let text = "";
    try {
      text = readFileSync("/README.md", "utf-8");
    } catch (error) {
      console.error("Error reading README.md", error);
    }

    const newText = createNewText(text, { pastWeek: 40 });

    try {
      writeFileSync("/README.md", newText);
    } catch (error) {
      console.error("Error writing README.md", error);
    }

    console.log("README.md updated");
  }
}
