async function UpdateLikes(like: number, id: number) {
  try {
    console.log(like);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            likes: `${like}`,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Ha ocurrido un error: ${response.status}`);
    } else {
      const {data, meta} = await response.json();
      console.log("Meta datos obtenidos: ", meta);
      return data;
    }
  } catch (error) {
    console.log("Ha ocurrido un Error", error);
  }
}

export default UpdateLikes;
