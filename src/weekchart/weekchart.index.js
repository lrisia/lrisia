import config from "../config.js";
import browserServiceFactory from "../services/browser.service.js";

function weeksBetween(d1, d2) {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

export default async function generateWeekchartImage() {
  const browserService = browserServiceFactory;
  const url = `file:///Users/irisialightsky/General/Dev/lrisia/src/weekchart/index.html`;
  await browserService.goto(url);
  const page = browserService.page;
  const dimensions = await page.evaluate(() => {
    const body = document.querySelector("#week-chart-container");
    return {
      width: body.scrollWidth,
      height: body.scrollHeight,
    };
  });
  await page.setViewport(dimensions);
  await page.screenshot({
    path: "./src/weekchart/weekchart.png",
    fullPage: false,
  });
  await browserService.close();
  const today = new Date();
  return weeksBetween(config.birthday, today);
}
