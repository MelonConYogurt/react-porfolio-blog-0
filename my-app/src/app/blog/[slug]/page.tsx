interface Params {
  slug?: string;
}

interface PostProps {
  params: Params;
}

function Post({params}: PostProps) {
  console.log(params.slug);
  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-20">
      <h1 className="text-black text-4xl font-bold">
        Estamos en el post creado dinámicamente
      </h1>
    </div>
  );
}

export default Post;
