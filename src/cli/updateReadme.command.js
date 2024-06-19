import { readFileSync, writeFileSync } from "fs";
import { createNewText } from "../template.js";
import { Time } from "../utils/time.js";
import { appConfig } from "../config.js";

export class UpdateReadmeCommand {
  async execute() {
    console.log("Start updating README.md file...");

    const rootPath = process.cwd();
    const readmePath = rootPath + "/README.md";
    let text = "";
    try {
      text = readFileSync(readmePath, "utf8");
    } catch (error) {
      console.log("Reading README.md failed", error);
    }

    const pastWeek = Time.weeksBetween(new Date(appConfig.BIRTHDAY), new Date())
    const newText = createNewText(text, { pastWeek });

    try {
      writeFileSync(readmePath, newText);
    } catch (error) {
      console.log("Writing README.md failed", error);
    }

    console.log("README.md file updated successfully!");
  }
}
