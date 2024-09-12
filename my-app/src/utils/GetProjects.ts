import {API_URL, API_TOKEN} from "../config";

async function GetProjects() {
  try {
    const response = await fetch(
      `${API_URL}/api/projects?populate=*&sort=id:desc`,
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

export default GetProjects;
