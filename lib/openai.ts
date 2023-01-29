import { Configuration, OpenAIApi } from "npm:openai";
import { settings } from "../settings.ts";

const { OPENAI_ORG_ID, OPENAI_API_KEY } = settings;

export class OpenAI {
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      organization: OPENAI_ORG_ID,
      apiKey: OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async search(prompt: string, model = "text-davinci-003") {
    const res = await this.openai.createCompletion({
      model,
      prompt,
      max_tokens: 200,
    });
    return res.data.choices.map((i) => i.text).join(" ");
  }
}

export const openai = new OpenAI();
