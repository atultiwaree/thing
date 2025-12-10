import axios from "axios";
import chalk from "chalk";
export async function writeText(data, param) {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/write/${param}`,
      headers: {
        "Content-Type": "text/plain",
      },
      data: data,
    };

    let response = await axios(config);

    if (response?.data?.status === 201) {
      let responseToUser =
        chalk.green("[✓] Clipped") +
        chalk.gray(" - Use ") +
        chalk.yellow("thing get <clip-id>") +
        chalk.gray(" to retrieve");

      return responseToUser;
    }

    if (response?.data?.status === 409) {
      const keyName = response?.data?.data?.param;

      let responseToUser =
        chalk.red("[✗]") +
        ` Key "${chalk.yellow(
          keyName
        )}" is already in use. Try a different name.`;

      return responseToUser;
    }

    return response?.data;
  } catch (e) {
    console.log(e);
    if (!e.response) {
      return "[✗] No internet connection or server unreachable";
    }
  }
}

export async function getClip(param) {
  try {
    const response = await axios.get(`http://localhost:3000/get/${param}`, {
      headers: {
        "Content-Type": "text/plain",
      },
    });

    // ✅ use HTTP status
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    // ✅ axios sends non-2xx status here
    if (error.response) {
      return error.response.data.message;
    }

    return "Network or server error";
  }
}
