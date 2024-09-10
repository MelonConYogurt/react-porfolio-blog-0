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
    <div>
      <header>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/141779507?v=4" />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>

        <div>
          <h1>Alejandro Vélez Gómez</h1>
          <h3>Full Stack Developer | Open Source Enthusiast | Tech Blogger</h3>
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
