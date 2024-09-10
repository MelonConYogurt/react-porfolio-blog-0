/* eslint-disable @next/next/no-img-element */

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import GetPost from "@/utils/GetPosts";

async function getData() {
  try {
    const data = await GetPost(1000);
    return data || [];
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

async function Blog() {
  const data = await getData();
  return (
    <div className="flex flex-col mt-20 mb-20 justify-center items-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
          Últimos Blogs
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
                        element.attributes.imageCover.data.attributes.formats
                          .small.url
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
        </div>
      </div>
    </div>
  );
}

export default Blog;
