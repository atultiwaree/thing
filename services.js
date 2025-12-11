import axios from "axios";
import chalk from "chalk";

export async function writeText(data, param) {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://thing-backend.vercel.app/write/${param}`,
      headers: {
        "Content-Type": "text/plain",
      },
      data: data,
    };

    let response = await axios(config);

    if (response?.data?.status === 201) {
      let responseToUser =
        chalk.green("[✓] Stored in Ring") +
        chalk.gray(" - Use ") +
        chalk.yellow(`ring get ${param}`) +
        chalk.gray(" to retrieve");

      return responseToUser;
    }

    if (response?.data?.status === 409) {
      const keyName = response?.data?.data?.param;

      let responseToUser =
        chalk.red("[✗]") +
        ` Key "${chalk.yellow(
          keyName
        )}" already exists. Choose a different key.`;

      return responseToUser;
    }

    return response?.data;
  } catch (e) {
    console.log(e);
    if (!e.response) {
      return chalk.red("[✗] No internet connection or server unreachable");
    }
  }
}

export async function getClip(param) {
  try {
    const response = await axios.get(
      `https://thing-backend.vercel.app/get/${param}`,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      return chalk.yellow(`[→] ${error.response.data.message}`);
    }

    return chalk.red("[✗] Network or server error");
  }
}
