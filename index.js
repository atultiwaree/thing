#!/usr/bin/env node
import clipboard from "clipboardy";
const args = process.argv.slice(2);
import chalk from "chalk";
import { getClip, writeText } from "./services.js";

const main = async (args) => {
  if (!args[0]) {
    return chalk.yellow("[→] No parameter given");
  }

  if (!args[1]) {
    return chalk.yellow("[→] URL identifier not found");
  }

  if (args[0] === "copy") {
    const text = await clipboard.read();

    if (!text) {
      return chalk.yellow("[→] No clipboard content found!");
    }

    let axiosResponse = await writeText(text, args[1]);

    return axiosResponse;
  }

  if (args[0] === "get") {
    try {
      const response = await getClip(args[1]);

      if (!response?.data) {
        console.log("No content available");
        return;
      }

      await clipboard.write(String(response.data));

      return (
        chalk.green("[✓] Copied!") +
        chalk.gray(" Press Ctrl+V to paste anywhere.")
      );
    } catch (err) {
      console.error("Failed to copy data:", err.message);
    }
  }
};

const data = await main(args);

console.log(data);
