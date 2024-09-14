/* eslint-disable @next/next/no-img-element */
import GetCt from "@/utils/GetCt";
import GetTg from "@/utils/GetTg";
import GetDt from "@/utils/GetDt";
import GetProjects from "@/utils/GetProjects";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Transition from "@/components/Transition";
import AvatarAnimation from "@/components/AvatarAnimation";
import ScrollAnimation from "@/components/ScrolAnimation";
import Posts from "@/components/Posts";

interface Element {
  attributes: {
    title?: string;
    description?: string;
    introduction?: string;
    name?: string;
    company?: string;
    state?: string;
    link: string;
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
    const [ct, dt, tg, data] = await Promise.all([
      GetCt(),
      GetDt(),
      GetTg(),
      GetProjects(),
    ]);
    return {ct: ct || [], dt: dt || [], tg: tg || [], data: data || []};
  } catch (error) {
    console.error(error);
    return {ct: [], dt: [], tg: [], data: []};
  }
}

export default async function About() {
  const {ct, dt, tg, data} = await fetchData();

  return (
    <Transition>
      <div className="flex flex-col justify-center items-center">
        <header className="bg-gradient-to-b from-gray-100 to-white w-full p-5">
          <div className="flex flex-col gap-6 justify-center items-center text-black max-w-4xl mx-auto">
            <AvatarAnimation
              src="https://res.cloudinary.com/divr5jb7h/image/upload/v1725936867/141779507_cbexnd.jpg"
              alt="Profile picture"
              width={200}
              height={200}
            />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center">
              Alejandro Vélez Gómez
            </h1>
            <h2 className="text-xl text-center">
              Full Stack Developer | Open Source Enthusiast | Tech Blogger
            </h2>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 ">
          <section className="mb-20 mt-20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 ">
                <h2 className="text-3xl font-bold mb-6 text-black">Sobre mí</h2>
                <p className="mb-4 text-slate-800">
                  Soy Alejandro Vélez Gómez, desarrollador Full Stack de 21
                  años. Estudio de manera autodidacta y universitaria, creando
                  proyectos como método de aprendizaje.
                </p>
                <p className="text-slate-800">
                  Disfruto ejercitarme, haciendo gimnasio, calistenia y
                  baloncesto. Me apasiona mejorar continuamente y explorar
                  nuevas ideas en tecnología y desarrollo.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img
                  className="w-full rounded-lg"
                  src="https://res.cloudinary.com/divr5jb7h/image/upload/v1725936909/289466486_982853518990715_6944819474608860712_n_ykb9ry.jpg"
                  alt="Alejandro trabajando"
                />
                <img
                  className="w-full rounded-lg"
                  src="https://res.cloudinary.com/divr5jb7h/image/upload/v1725937096/286337534_173014068501099_856836812325574454_n_jyxknk.jpg"
                  alt="Alejandro en su tiempo libre"
                />
              </div>
            </div>
          </section>

          <ScrollAnimation>
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-black">
                Habilidades técnicas
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
          </ScrollAnimation>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Educación y certificaciones
            </h2>
            <div className="grid md:grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Educación</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    {dt.map((element: Element, index: number) => (
                      <li key={index}>
                        {element.attributes.name}, {element.attributes.company},
                        ({element.attributes.state})
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Certificaciones</CardTitle>
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

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-black">Proyectos</h2>
            <div className="flex flex-col gap-5">
              <Posts data={data} />
            </div>
          </section>

          <section className="mb-20 text-black">
            <h2 className="text-3xl font-bold mb-6">Intereses y pasatiempos</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Tecnología</h3>
                <p>
                  Me apasiona estar al día con las últimas tendencias en
                  desarrollo web y móvil. Disfruto experimentando con nuevas
                  tecnologías y frameworks.
                </p>
              </div>
              <div className="border rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Deportes</h3>
                <p>
                  Practico gimnasio, calistenia y baloncesto regularmente. Creo
                  firmemente en mantener un equilibrio entre la mente y el
                  cuerpo.
                </p>
              </div>
              <div className="border rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Lectura</h3>
                <p>
                  Me encanta leer libros sobre tecnología, desarrollo personal y
                  ciencia ficción. Siempre estoy buscando expandir mis
                  conocimientos.
                </p>
              </div>
              <div className="border rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Viajes</h3>
                <p>
                  Disfruto conocer nuevos lugares, culturas y personas. Viajar
                  me inspira y me ayuda a tener una perspectiva más amplia del
                  mundo.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Transition>
  );
}
