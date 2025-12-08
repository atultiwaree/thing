import axios from "axios";

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

    if (response?.data?.status === 200) {
      return "[x] Clipped";
    }

    if (response?.data?.status === 409) {
      return response?.data?.message;
    }

    return response?.data;
  } catch (e) {
    console.log("There was some error calling api");
  }
}
