/* eslint-disable @next/next/no-img-element */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Heart} from "lucide-react";
import Link from "next/link";

interface Element {
  id: number;
  attributes: {
    title: string;
    description: string;
    introduction?: string;
    content?: string;
    date?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale?: string;
    name?: string;
    slug?: string;
    likes?: number;
    category?: string;
    imageCover?: {
      data?: {
        attributes?: {
          url?: string;
          formats?: {
            small?: {
              url: string;
            };
            large?: {
              url: string;
            };
          };
        };
      };
    };
    imageHeader?: {
      data?: {
        attributes?: {
          url?: string;
          formats?: {
            small?: {
              url: string;
            };
            large?: {
              url: string;
            };
          };
        };
      };
    };
    imagesPreviews?: {
      data?: Array<{
        attributes?: {
          url?: string;
          formats?: {
            small?: {
              url: string;
            };
            large?: {
              url: string;
            };
          };
        };
      }>;
    };
  };
}

interface Data {
  data: [Element];
}

function Posts({data}: Data) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data &&
        data.map((element: Element, index: number) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="h-4 overflow-hidden">
                {element.attributes.title}
              </CardTitle>
              <ScrollArea className="h-20 w-full">
                <CardDescription>
                  {element.attributes.description}
                </CardDescription>
              </ScrollArea>
            </CardHeader>
            <CardContent>
              {element.attributes.imageCover?.data?.attributes?.formats?.small
                ?.url && (
                <img
                  src={
                    element.attributes.imageCover.data.attributes.formats.small
                      .url
                  }
                  alt={element.attributes.title || "Post image"}
                  className="w-full h-52 object-cover rounded-md"
                />
              )}
            </CardContent>
            <CardFooter className="flex flex-row  justify-between mx-auto">
              <Link
                legacyBehavior
                href={`/blog/${element.attributes.slug}`}
                passHref
              >
                <a className="underline text-black hover:text-black">
                  Continua leyendo
                </a>
              </Link>
              <div className="flex flex-row gap-1 justify-center items-center overflow-hidden">
                <Heart />
                <p className="font-medium">{element.attributes.likes}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}

export default Posts;
