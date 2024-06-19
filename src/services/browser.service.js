import puppeteer from "puppeteer";

export class BrowserService {
  browser;
  currentPage;

  async openHtml(htmlCode) {
    if (this.browser === undefined) {
      this.browser = await puppeteer.launch();
    }

    if (this.currentPage === undefined) {
      this.currentPage = await this.browser.newPage();
    }

    await this.currentPage.setContent(htmlCode, { waitUntil: "networkidle0" });
  }

  async captureCurrentPage(filename) {
    const dimensions = await this.currentPage.evaluate(() => {
      const body = document.querySelector("body");
      return {
        width: body.scrollWidth,
        height: body.scrollHeight,
      };
    });
    await this.currentPage.setViewport(dimensions);
    await this.currentPage.screenshot({
      path: `${process.cwd()}/assets/${filename}.png`,
      fullPage: false,
    });
  }

  async closePage() {
    if (this.browser !== undefined) {
      await this.browser.close();
    }
  }
}
