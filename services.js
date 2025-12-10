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
    console.log("successMessages.API_MSG");
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
