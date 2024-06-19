export interface BrowserRepo {
  nevigateTo(url: string): Promise<void>;
  closePage(): Promise<void>;
  disconnect(): Promise<void>;
}
