import browserServiceFactory from "../services/browser.service.js";

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
}