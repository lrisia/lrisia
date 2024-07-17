import { readFileSync } from "fs";
import { appConfig } from "../config.js";
import { BrowserService } from "../services/browser.service.js";
import { Time } from "../utils/time.js";

export class UpdateWeekchartCommand {
  async execute() {
    console.log("Start updating weekchart...");

    const rootPath = process.cwd();
    const htmlPagePath = rootPath + "/src/modules/weekchart/index.html";
    const pastWeek = Time.weeksBetween(
      new Date(appConfig.BIRTHDAY),
      new Date()
    );
    const htmlCode = readFileSync(htmlPagePath, "utf8");

    const browserService = new BrowserService();
    await browserService.openHtml(
      htmlCode.replace("replaceFunctionHere()", `createWeekChart(${pastWeek})`)
    );

    await browserService.captureCurrentPage("weekchart");

    await browserService.closePage();

    console.log("Weekchart updated successfully!");
  }
}
