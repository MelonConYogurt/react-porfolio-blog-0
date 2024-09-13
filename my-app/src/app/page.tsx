/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import GetPost from "@/utils/GetPosts";
import GetLastPost from "@/utils/GetLatsPost";
import GetFeacturePost from "@/utils/GetFeaturePost";
import {Heart} from "lucide-react";
import Transition from "@/components/Transition";

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

interface Element {
  attributes: {
    title: string;
    description: string;
    name?: string;
    slug?: string;
    likes?: number;
    imageCover?: {
      data?: {
        attributes?: {
          formats?: {
            small?: {
              url: string;
            };
          };
        };
      };
    };
  };
}

export default async function Component() {
  const {data, lt, ft} = await getData();

  return (
    <Transition>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <main className="flex flex-col w-full ">
          <section className="bg-gradient-to-b from-gray-50 to-white bg-opacity-70 w-full py-12  md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
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
                  <Link
                    legacyBehavior
                    href={`/blog/${lt[0].attributes.slug}`}
                    passHref
                  >
                    <a className="flex flex-row gap-2 border p-3 rounded-lg text-white w-fit bg-black">
                      Ultima publicacion
                    </a>
                  </Link>
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
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data &&
                  data.map((element: Element, index: number) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{element.attributes.title}</CardTitle>
                        <ScrollArea className="h-20 w-full">
                          <CardDescription>
                            {element.attributes.description}
                          </CardDescription>
                        </ScrollArea>
                      </CardHeader>
                      <CardContent>
                        {element.attributes.imageCover?.data?.attributes
                          ?.formats?.small?.url && (
                          <img
                            src={
                              element.attributes.imageCover.data.attributes
                                .formats.small.url
                            }
                            alt={element.attributes.title || "Post image"}
                            className="w-full h-auto object-cover rounded-md"
                          />
                        )}
                      </CardContent>
                      <CardFooter className="flex flex-row  justify-between mx-auto">
                        <Link
                          legacyBehavior
                          href={`/blog/${element.attributes.slug}`}
                          passHref
                        >
                          <Button variant="link">Read More</Button>
                        </Link>
                        <div className="flex flex-row gap-1 justify-center items-center overflow-hidden">
                          <Heart />
                          <p className="font-medium">
                            {element.attributes.likes}
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                <Link legacyBehavior href="/blog">
                  <a className="flex flex-row gap-2 border p-3 rounded-lg text-black w-fit bg-white">
                    Ver todas las publicaciones
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white bg-opacity-70 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
                Publicaciones populares
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ft &&
                  ft.map((element: Element, index: number) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{element.attributes.title}</CardTitle>
                        <ScrollArea className="h-20 w-full">
                          <CardDescription>
                            {element.attributes.description}
                          </CardDescription>
                        </ScrollArea>
                      </CardHeader>
                      <CardContent>
                        {element.attributes.imageCover?.data?.attributes
                          ?.formats?.small?.url && (
                          <img
                            src={
                              element.attributes.imageCover.data.attributes
                                .formats.small.url
                            }
                            alt={element.attributes.title || "Post image"}
                            className="w-full h-auto object-cover rounded-md"
                          />
                        )}
                      </CardContent>
                      <CardFooter className="flex flex-row  justify-between mx-auto">
                        <Link
                          legacyBehavior
                          href={`/blog/${element.attributes.slug}`}
                          passHref
                        >
                          <Button variant="link">Read More</Button>
                        </Link>
                        <div className="flex flex-row gap-1 justify-center items-center overflow-hidden">
                          <Heart />
                          <p className="font-medium">
                            {element.attributes.likes}
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                <Link legacyBehavior href="/blog">
                  <a className="flex flex-row gap-2 border p-3 rounded-lg text-black w-fit bg-white">
                    Ver todas las publicaciones
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 bg-slate-50 bg-opacity-70 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
                Stay Updated
              </h2>
              <div className="mx-auto max-w-sm space-y-4">
                <Input placeholder="Enter your email" type="email" />
                <Button className="w-full">Subscribe to Newsletter</Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Transition>
  );
}
