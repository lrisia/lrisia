import dotenv from "dotenv";

class Config {
  constructor() {
    dotenv.config();
  }

  load() {
    const date = process.env.BIRTHDAY.split("-");
    const birthday = new Date(date[0], date[1] - 1, date[2]);
    return {
      birthday: birthday,
    };
  }
}

export default new Config().load();
