/* eslint-disable @next/next/no-img-element */
import {format} from "date-fns";
import {es} from "date-fns/locale";
import GetSinglePost from "@/utils/GetSinglePost";
import ReactMarkdown from "react-markdown";

interface Element {
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
  slug?: string;
}

interface PostProps {
  params: Params;
}

async function getData(slug: string) {
  try {
    const data = await GetSinglePost(slug);
    return data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Post({params}: PostProps) {
  const post = await getData(params.slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-black">
      {post.map((element: Element, index: number) => (
        <article
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <header className="relative">
            <div className="aspect-video w-full">
              <img
                src={
                  element.attributes.imageHeader?.data?.attributes?.url ||
                  "/placeholder.svg"
                }
                alt={element.attributes.title}
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
                  <ReactMarkdown>
                    {element.attributes.introduction}
                  </ReactMarkdown>
                </div>
              )}
              {element.attributes.description && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
                  <ReactMarkdown>
                    {element.attributes.description}
                  </ReactMarkdown>
                </div>
              )}
              {element.attributes.content && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contenido</h2>
                  <ReactMarkdown>{element.attributes.content}</ReactMarkdown>
                </div>
              )}
            </section>
          </main>
        </article>
      ))}
    </div>
  );
}
