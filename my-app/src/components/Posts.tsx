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
import {Heart, Calendar, ArrowRight} from "lucide-react";
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
    <>
      {data &&
        data.map((element: Element, index: number) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative">
              {element.attributes.imageCover?.data?.attributes?.formats?.small
                ?.url && (
                <img
                  src={
                    element.attributes.imageCover.data.attributes.formats.small
                      .url
                  }
                  alt={element.attributes.title || "Post image"}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold line-clamp-2">
                {element.attributes.title}
              </CardTitle>
              <div className="flex items-center text-sm text-muted-foreground gap-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(
                    element.attributes.publishedAt || ""
                  ).toLocaleDateString()}
                </div>
                <div className="text-black font-medium">
                  {element.attributes.category}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-24">
                <CardDescription className="text-sm">
                  {element.attributes.description}
                </CardDescription>
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Link href={`/blog/${element.attributes.slug}`} passHref>
                <div className="flex items-center text-primary hover:underline cursor-pointer">
                  Continuar leyendo
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
              {element.attributes.likes && (
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-1" />
                  <span className="font-medium">
                    {element.attributes.likes}
                  </span>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
    </>
  );
}

export default Posts;
