/* eslint-disable @next/next/no-img-element */
import GetProjects from "@/utils/GetProjects";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {SiGithub, SiYoutube} from "@icons-pack/react-simple-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import Transition from "@/components/Transition";

interface Element {
  attributes: {
    title?: string;
    description?: string;
    introduction?: string;
    name?: string;
    company?: string;
    state?: string;
    link?: string;
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

async function fetchData() {
  try {
    const [data] = await Promise.all([GetProjects()]);
    return {data: data || []};
  } catch (error) {
    console.error(error);
    return {data: []};
  }
}

async function Project() {
  const {data} = await fetchData();
  return (
    <Transition>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  Mis proyectos estan documentados
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Visita mi pagina de Github o Youtube, para mas informacion
                </p>
              </div>
              <div className="space-x-4 flex flex-row gap-3 text-black">
                <a className="flex flex-row gap-2 border p-3 rounded-lg">
                  <SiGithub className="" size={24} />
                  <Link
                    href="https://github.com/MelonConYogurt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Link>
                </a>
                <a className="flex flex-row gap-2 border p-3 rounded-lg">
                  <SiYoutube className="" size={24} color="red" />
                  <Link
                    href="https://www.youtube.com/@AlejandroVg-io3zb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  flex flex-col items-center justify-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mb-10">
            Proyectos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-10">
            {data &&
              data.map((element: Element, index: number) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{element.attributes.title}</CardTitle>
                    <ScrollArea className="h-20 w-full">
                      <CardDescription>
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeHighlight]}
                        >
                          {element.attributes.introduction}
                        </ReactMarkdown>
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
                    <Link legacyBehavior href="#" passHref>
                      <Button variant="link">Ver completo</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </Transition>
  );
}

export default Project;
