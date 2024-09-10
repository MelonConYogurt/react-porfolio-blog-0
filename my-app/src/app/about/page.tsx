/* eslint-disable @next/next/no-img-element */

import {Card, CardContent, CardTitle, CardHeader} from "@/components/ui/card";
import GetCt from "@/utils/GetCt";
import GetTg from "@/utils/GetTg";
import GetDt from "@/utils/GetDt copy";

interface Element {
  attributes: {
    title: string;
    description: string;
    name?: string;
    company?: string;
    state?: string;
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
    const [ct, dt, tg] = await Promise.all([GetCt(), GetDt(), GetTg()]);
    return {ct: ct || [], dt: dt || [], tg: tg || []};
  } catch (error) {
    console.error(error);
    return {ct: [], dt: [], tg: []};
  }
}

async function About() {
  const {ct, dt, tg} = await fetchData();

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="flex flex-col justify-center items-center w-full p-5">
        <div className="flex flex-col gap-10 justify-center items-center text-black">
          <div>
            <img
              className="rounded-full"
              src="https://res.cloudinary.com/divr5jb7h/image/upload/v1725936867/141779507_cbexnd.jpg"
              alt="Profile picture"
              width={300}
              height={300}
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Alejandro Vélez Gómez
          </h1>
          <h3 className="sm: flex flex-wrap mx-auto max-w-[700px] text-xl">
            Full Stack Developer | Open Source Enthusiast | Tech Blogger
          </h3>
        </div>
      </header>
      <main>
        <section className=" mt-20">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Algo sobre mí
              </h2>
              <p className="mb-4">
                Hola, soy Alejandro Vélez Gómez, tengo 21 años y soy
                desarrollador Full Stack. Me dedico gran parte del tiempo a
                estudiar de manera autodidacta, a pesar de ser estudiante
                universitario actualmente. Me gusta desarrollar y crear
                proyectos como método de aprendizaje.
              </p>
              <p>
                Además de programar, disfruto ejercitarme, hago gimnasio,
                calistenia y juego baloncesto. Me apasiona mejorar continuamente
                y explorar nuevas ideas en tecnología y desarrollo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://res.cloudinary.com/divr5jb7h/image/upload/v1725936909/289466486_982853518990715_6944819474608860712_n_ykb9ry.jpg"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://res.cloudinary.com/divr5jb7h/image/upload/v1725937096/286337534_173014068501099_856836812325574454_n_jyxknk.jpg"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center  w-full p-5">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-20 mb-20">
            Habilidades tecnicas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tg.map((element: Element, index: number) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-4 h-full flex items-center justify-center">
                  <h3 className="text-center font-medium">
                    {element.attributes.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="flex flex-col justify-center items-center  w-full p-5">
          <h2 className="mt-20 mb-20 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Educasion y certificasiones
          </h2>
          <div className="flex flex-row  justify-center items-start gap-10 md:flex flex-wrap">
            <Card>
              <CardHeader>
                <CardTitle>Educasion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {dt.map((element: Element, index: number) => (
                    <li key={index}>
                      {element.attributes.name}, {element.attributes.company}, (
                      {element.attributes.state})
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Certificasiones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {ct.map((element: Element, index: number) => (
                    <li key={index}>
                      {element.attributes.name}, {element.attributes.company}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
