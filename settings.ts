import { config } from "dotenv";

config({ export: true });

export const settings = {
  BASE_URL: "https://api.openai.com/v1/",
  OPENAI_API_KEY: Deno.env.get("OPENAI_API_KEY"),
  OPENAI_ORG_ID: Deno.env.get("OPENAI_ORG_ID"),
};
