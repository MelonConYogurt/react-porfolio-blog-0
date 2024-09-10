import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
// import {Carousel} from "@/components/ui/carousel";
// import {
//   Card,
//   CardTitle,
//   CardHeader,
//   CardContent,
//   CardDescription,
//   CardFooter,
// } from "@/components/ui/card";
// import {Button} from "@/components/ui/button";

function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="flex flex-col justify-center items-center">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/141779507?v=4"
            width={300}
            height={300}
          />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>

        <div className="flex flex-row gap-1 text-black">
          <h1>Alejandro Vélez Gómez</h1>
          <h3 className="sm: flex flex-wrap">
            Full Stack Developer | Open Source Enthusiast | Tech Blogger
          </h3>
        </div>
      </header>
      <main>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}

export default About;
