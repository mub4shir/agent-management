import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || "",
  openaiApiKey: process.env.OPENAI_API_KEY || "",
};
if (!config.mongoUri) {
  throw new Error("MONGO_URI is not set in environment variables");
}
