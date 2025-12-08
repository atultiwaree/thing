#!/usr/bin/env node
import clipboard from "clipboardy";
const args = process.argv.slice(2);
import chalk from "chalk";
import { writeText } from "./services.js";

const main = async (args) => {
  if (!args[0]) {
    return chalk.yellow("[→] No parameter given");
  }

  if (!args[1]) {
    return chalk.yellow("[→] URL identifier not found");
  }

  if (args[0] === "-c") {
    const text = await clipboard.read();
    console.log("x");

    if (!text) {
      return chalk.yellow("[→] No clipboard content found!");
    }

    let axiosResponse = await writeText(text, args[1]);

    return axiosResponse;
  }
};

const data = await main(args);

console.log(data);
