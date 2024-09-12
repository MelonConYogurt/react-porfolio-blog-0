/* eslint-disable @next/next/no-img-element */
import {format} from "date-fns";
import {es} from "date-fns/locale";
import GetSinglePost from "@/utils/GetSinglePost";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import {Heart} from "lucide-react";
import {SiInstagram, SiGithub, SiYoutube} from "@icons-pack/react-simple-icons";

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
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {element.attributes.description}
                  </ReactMarkdown>
                </div>
              )}
              {element.attributes.content && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contenido</h2>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {element.attributes.content}
                  </ReactMarkdown>
                </div>
              )}
            </section>
          </main>
          <footer className="bg-gray-100 p-6 mt-8 rounded-lg shadow-inner">
            <div className="text-center mb-4">
              <p className="text-xl font-medium text-gray-700">
                ¿Te ha gustado este artículo? ¡Deja un like y sígueme en mis
                redes sociales!
              </p>
            </div>
            <div className="flex justify-center items-center mb-6">
              <div className="bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2">
                <Heart className="text-red-500" size={24} />
                <span className="text-lg font-semibold">
                  {element.attributes.likes}
                </span>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
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
          </footer>
        </article>
      ))}
    </div>
  );
}
