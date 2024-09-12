import {API_URL, API_TOKEN} from "../config";

async function GetFeacturePost(quantity: number) {
  try {
    const response = await fetch(
      `${API_URL}/api/blogs?pagination[limit]=${quantity}&populate=*&sort[0]=likes:desc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    } else {
      const {data, meta} = await response.json();
      console.log(meta);
      return data;
    }
  } catch (error) {
    console.log("Error", error);
  }
}

export default GetFeacturePost;
