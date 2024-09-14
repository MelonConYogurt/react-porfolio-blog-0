/* eslint-disable @next/next/no-img-element */
"use client";

import {format} from "date-fns";
import {es} from "date-fns/locale";
import GetSinglePost from "@/utils/GetSinglePost";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import {Heart, SquareArrowOutUpRight} from "lucide-react";
import {SiInstagram, SiGithub, SiYoutube} from "@icons-pack/react-simple-icons";
import {useEffect, useState} from "react";
import UpdateLikes from "@/utils/UpdateLikes";
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
import Link from "next/link";
import GetPost from "@/utils/GetPostsClient";

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

interface Params {
  slug: string;
}

interface PostProps {
  params: Params;
}

async function getData(slug: string) {
  try {
    const data = await GetSinglePost(slug);
    return data || [];
  } catch (error) {
    console.log("Ha ocurrido un error obtenmiendo los datos", error);
    return [];
  }
}

async function getBlogs() {
  try {
    const data = await GetPost(3);
    return data || [];
  } catch (error) {
    console.log("Ha ocurrido un error obtenmiendo los datos", error);
    return [];
  }
}

export default function Post({params}: PostProps) {
  const [data, setData] = useState<Element[]>([]);
  const [blogs, setBlogs] = useState<Element[]>([]);
  const [likesValue, setLikesValue] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const post = await getData(params.slug);
      const bls = await getBlogs();
      setBlogs(bls);
      setData(post);
      setLikesValue(parseInt(post[0].attributes.likes));
    }
    fetchData();
  }, [params.slug]);

  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  function handleLike() {
    setLikesValue((prev) => prev + 1);
    setIsLike(true);
    const update = async () => {
      UpdateLikes(likesValue + 1, data[0].id);
    };
    update();
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data[0].attributes.title,
          text: data[0].attributes.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      alert(
        "Lo siento, tu navegador no soporta la función de compartir. Puedes copiar el enlace manualmente."
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sta">
      {data.map((element: Element, index: number) => (
        <article key={index} className="bg-white shadow-lg rounded-lg mb-20">
          <header className="relative">
            <div className="aspect-video w-full">
              <img
                src={
                  element.attributes.imageHeader?.data?.attributes?.url ||
                  "/placeholder.svg"
                }
                alt={element.attributes.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-white text-4xl font-bold mb-2">
                {element.attributes.title}
              </h1>
              {element.attributes.publishedAt && (
                <p className="text-gray-300 text-sm">
                  Publicado el{" "}
                  {format(
                    new Date(element.attributes.publishedAt),
                    "d 'de' MMMM 'de' yyyy",
                    {locale: es}
                  )}
                </p>
              )}
            </div>
          </header>
          <main className="p-6">
            <section className="prose prose-lg max-w-none">
              {element.attributes.introduction && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Introducción</h2>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {element.attributes.introduction}
                  </ReactMarkdown>
                </div>
              )}
              {element.attributes.description && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {element.attributes.description}
                  </ReactMarkdown>
                </div>
              )}
              {element.attributes.content && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contenido</h2>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {element.attributes.content}
                  </ReactMarkdown>
                </div>
              )}
            </section>
            <div className="w-full  p-3 rounded-lg  custom:w-fit  custom:p-3 custom:rounded-lg ">
              <div className="flex flex-row justify-center items-center gap-2 custom:flex-col custom:fixed custom:top-20 custom:left-2 custom:justify-center custom:items-center custom:gap-2 custom:bg-slate-50 custom:p-3 custom:rounded-lg ">
                <Button
                  variant={"ghost"}
                  disabled={isLike}
                  onClick={handleLike}
                  className="bg-white py-2 rounded-full shadow-md flex items-center"
                >
                  <Heart color="red" size={24} className="mr-1" />
                  <span className="text-lg font-semibold text-[#ff0000]">
                    {likesValue}
                  </span>
                </Button>
                <Button
                  variant={"ghost"}
                  className="bg-white  py-2 rounded-full shadow-md flex items-center "
                  onClick={handleShare}
                >
                  <SquareArrowOutUpRight color="black" />
                </Button>
                <a
                  href="https://github.com/MelonConYogurt"
                  className="text-gray-700 hover:text-black transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={32} />
                </a>
                <a
                  href="https://www.instagram.com/mono_leandro_/"
                  className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram size={32} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCZw0RkautflfsCQ3jLDCztQ"
                  className="text-red-600 hover:text-red-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiYoutube size={32} />
                </a>
              </div>
            </div>
          </main>
        </article>
      ))}
      <section className="w-full py-12  md:py-24 lg:py-32 bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
            Continua leyendo, visita nuestras publicaciones mas recientes
          </h2>
          <div className="flex flex-col gap-5">
            {blogs &&
              blogs.map((element: Element, index: number) => (
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
                      ?.large?.url && (
                      <img
                        src={
                          element.attributes.imageCover.data.attributes.formats
                            .large.url
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
                      <p className="font-medium">{element.attributes.likes}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            <Link legacyBehavior href="/blog">
              <a className="flex flex-row gap-2 border my-5 p-3 rounded-lg justify-center items-center text-black w-full bg-white">
                Ver todas las publicaciones
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
