import { Argument, Command } from "commander";
import { BlogPlatform } from "../models/blog";
import { FetchBlogCommand } from "./blog/fetch.command";

export function openConsole(): void {
  const program = new Command();

  program
    .command("blog:fetch")
    .description("Fetch blog posts")
    .addArgument(
      new Argument("<platform>", "Platform to fetch blog posts from").choices(
        Object.values(BlogPlatform)
      )
    )
    .action(async (platform) => {
      await new FetchBlogCommand().execute(platform);
    });

  program.parse();
}
