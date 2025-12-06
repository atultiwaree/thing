#!/usr/bin/env node
import clipboard from "clipboardy";
const args = process.argv.slice(2);

const main = async (args) => {
  if (args[0] === "-c") {
    const text = await clipboard.read();

    return text;
  }
};

const data = await main(args);

console.log(data);
