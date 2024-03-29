import * as dotEnv from "dotenv";

dotEnv.config();

export default {
  APP_ENV: process.env.APP_ENV,
  PORT: parseInt(process.env.PORT),
};
