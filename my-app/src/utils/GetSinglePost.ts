async function GetSinglePost(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
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

export default GetSinglePost;
