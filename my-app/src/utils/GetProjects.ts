import {API_URL} from "../config";

async function GetProjects() {
  try {
    const response = await fetch(
      `${API_URL}/api/projects?populate=*&sort=id:desc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
