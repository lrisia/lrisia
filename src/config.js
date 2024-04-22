import dotenv from "dotenv";

class Config {
  constructor() {
    dotenv.config();
  }

  load() {
    console.log('Birthday:', process.env.BIRTHDAY);
    const date = process.env.BIRTHDAY.split("-");
    console.log('Date:', date);
    const birthday = new Date(date[0], date[1] - 1, date[2]);
    return {
      birthday: birthday,
    };
  }
}

export default new Config().load();
