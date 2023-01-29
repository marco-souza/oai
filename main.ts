import { Command } from "cliffy";
import Spinner from "spinner";

import { openai } from "./lib/openai.ts";

const spinner = Spinner.getInstance();

async function main() {
  const { args: promptText } = await new Command()
    .name("oai")
    .version("0.1.0")
    .description("Command line for prompting OpenAI")
    .arguments("<prompt...:string>")
    .parse(Deno.args);

  await prompt(promptText.join(" "));
}

async function prompt(searchText: string) {
  try {
    await spinner.start("🤖 Asking AI...");

    const result = await openai.search(searchText);
    const output = result ?? "";

    await spinner.succeed(`🤖 Said`);
    console.log(output);
  } catch (error) {
    await spinner.fail(error.message);
  }
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await main();
}
