import GetPost from "@/utils/GetPosts";
import GetLastPost from "@/utils/GetLatsPost";
import GetFeacturePost from "@/utils/GetFeaturePost";
import Transition from "@/components/Transition";
import Posts from "@/components/Posts";
import Link from "next/link";

async function getData() {
  try {
    const [data, lt, ft] = await Promise.all([
      GetPost(3),
      GetLastPost(1),
      GetFeacturePost(3),
    ]);
    return {data: data || [], lt: lt || [], ft: ft || []};
  } catch (error) {
    console.log(error);
    return {data: [], lt: [], ft: []};
  }
}

export default async function Component() {
  const {data, lt, ft} = await getData();

  return (
    <Transition>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <main className="flex flex-col w-full ">
          <section className="bg-gradient-to-b from-gray-100 to-white shadow-lg bg-opacity-70 w-full py-12  md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                    Full Stack Developer Blog
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Exploring the world of web development, one stack at a time.
                  </p>
                </div>
                <div className="space-x-4 flex flex-row gap-3">
                  {lt && lt.length > 0 && (
                    <Link
                      legacyBehavior
                      href={`/blog/${lt[0].attributes.slug}`}
                      passHref
                    >
                      <a className="flex flex-row gap-2 border p-3 rounded-lg text-white w-fit bg-black">
                        Ultima publicacion
                      </a>
                    </Link>
                  )}

                  <Link legacyBehavior href="/about">
                    <a className="flex flex-row gap-2 border p-3 rounded-lg text-black w-fit bg-white">
                      Sobre mi
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 bg-white bg-opacity-70 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
                Publicaciones recientes
              </h2>
              <Posts data={data}></Posts>
              <Link legacyBehavior href="/blog">
                <a className="flex flex-row gap-2 border mt-5 p-3 rounded-lg text-black w-fit bg-white sm:w-fit h-fit">
                  Ver todas las publicaciones
                </a>
              </Link>
            </div>
          </section>
          <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white bg-opacity-70 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
                Publicaciones populares
              </h2>
              <Posts data={ft}></Posts>
              <Link legacyBehavior href="/blog">
                <a className="flex flex-row gap-2 border mt-5 p-3 rounded-lg text-black w-fit bg-white sm:w-fit h-fit">
                  Ver todas las publicaciones
                </a>
              </Link>
            </div>
          </section>
          <section className="w-full py-12 bg-slate-50 bg-opacity-70 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
                Stay Updated
              </h2>
              <div className="mx-auto max-w-sm space-y-4"></div>
            </div>
          </section>
        </main>
      </div>
    </Transition>
  );
}
