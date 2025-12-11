#!/usr/bin/env node
import clipboard from "clipboardy";
const args = process.argv.slice(2);
import chalk from "chalk";
import { getClip, writeText } from "./services.js";

const main = async (args) => {
  if (!args[0]) {
    return chalk.yellow("[→] Usage: ring <copy|get> <key>");
  }

  if (!args[1]) {
    return chalk.yellow("[→] Key identifier required");
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
        return chalk.yellow("[→] No content found for this key");
      }

      await clipboard.write(String(response.data));

      return (
        chalk.green("[✓] Copied to clipboard!") +
        chalk.gray(" Press Ctrl+V to paste.")
      );
    } catch (err) {
      return chalk.red(`[✗] Error: ${err.message}`);
    }
  }

  return chalk.yellow("[→] Unknown command. Use 'copy' or 'get'");
};

const data = await main(args);

console.log(data);
