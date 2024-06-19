import { BrowserRepo } from "@/repositories/browser.repo";
import puppeteer, { Browser, Page } from "puppeteer-core";

export class PuppeteerBrowser implements BrowserRepo {
  browser: Browser | undefined;
  currentPage: Page | undefined;

  async nevigateTo(url: string): Promise<void> {
    if (this.browser === undefined) {
      this.browser = await puppeteer.launch();
    }

    if (this.currentPage === undefined) {
      this.currentPage = await this.browser.newPage();
    }

    await this.currentPage.goto(url, { waitUntil: "networkidle0" });
  }

  async closePage(): Promise<void> {
    if (this.currentPage !== undefined) {
      await this.currentPage.close();
    }

    if (this.browser !== undefined) {
      await this.browser.close();
    }
  }

  async disconnect(): Promise<void> {
    if (this.browser !== undefined) {
      await this.browser.disconnect();
    }
  }
}
