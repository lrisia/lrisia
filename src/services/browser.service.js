import puppeteer from "puppeteer";

class BrowserService {
  browser;
  page;

  async init() {
    this.browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-infobars",
        "--window-position=0,0",
        "--ignore-certifcate-errors",
        "--ignore-certifcate-errors-spki-list",
        "--incognito",
        "--proxy-server=http=194.67.37.90:3128",
      ],
    });
  }

  async newPage() {
    this.page = await this.browser.newPage();
  }

  async goto(url) {
    if (!this.browser) {
      await this.init();
    }
    if (!this.page) {
      await this.newPage();
    }

    await this.page.setExtraHTTPHeaders({
      "Accept-Language": "en-US",
    });

    await this.page.goto(url, {
      waitUntil: `networkidle0`,
    });
  }

  async close() {
    await this.page.close();
    await this.browser.close();
  }
}

const browserServiceFactory = new BrowserService();
export default browserServiceFactory;
