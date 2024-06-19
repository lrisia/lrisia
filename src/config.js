import weekchartConfig from "./weekchart/config.js";

export const appConfig = {
  BIRTHDAY: process.env.BIRTHDAY ?? "1970-01-01",
  ...weekchartConfig,
};
