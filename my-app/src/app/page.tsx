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
import GetTg from "@/utils/GetTg";

async function getData() {
  try {
    const data = await GetPost();
    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function GetTgs() {
  try {
    const tgs = await GetTg();
    return tgs || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

interface Element {
  attributes: {
    title: string;
    description: string;
    name?: string;
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
  const data = await getData();
  const tgs = await GetTgs();

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <main className="flex flex-col w-full ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
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
              <div className="space-x-4 ">
                <Button>Latest Posts</Button>
                <Link legacyBehavior href="/About">
                  <Button variant="outline" className="text-black">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
              Featured Posts
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
                      {element.attributes.imageCover?.data?.attributes?.formats
                        ?.small?.url && (
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
                    <CardFooter>
                      <Button variant="link">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              <Button className="text-black bg-white w-fit" variant={"outline"}>
                View All Post
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center text-black">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-1 w-1/3">
            {tgs.map((element: Element, index: number) => (
              <div
                key={index}
                className="h-auto w-auto rounded-md border border-black m-2 p-2"
              >
                <p>{element.attributes.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
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
  );
}
