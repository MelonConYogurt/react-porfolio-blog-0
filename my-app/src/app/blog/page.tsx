import GetPost from "@/utils/GetPosts";
import Transition from "@/components/Transition";
import Posts from "@/components/Posts";

async function getData() {
  try {
    const data = await GetPost(1000);
    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function Blog() {
  const data = await getData();
  return (
    <Transition>
      <div className="bg-gradient-to-b from-gray-50 to-white flex flex-col mb-20 justify-center items-center">
        <div className="container mt-20 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
            Últimos Blogs
          </h2>
          <Posts data={data}></Posts>
        </div>
      </div>
    </Transition>
  );
}

export default Blog;
