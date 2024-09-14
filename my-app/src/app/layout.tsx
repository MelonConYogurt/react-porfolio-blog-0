/* eslint-disable @next/next/no-img-element */
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {SiInstagram, SiGithub, SiYoutube} from "@icons-pack/react-simple-icons";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Creado por AVG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <header className="px-4 h-auto bg-white lg:px-6  flex items-center">
          <nav className="w-full flex flex-col sm:flex-row justify-between items-center text-black gap-4 py-2">
            <div className="flex flex-row gap-2 justify-center items-center">
              <img
                className="rounded-full w-10 h-10"
                src="https://res.cloudinary.com/divr5jb7h/image/upload/v1725936867/141779507_cbexnd.jpg"
                alt="Profile picture"
              />
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Link legacyBehavior href="/">
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  Home
                </a>
              </Link>
              <Link legacyBehavior href="/about">
                <a className="text-sm font-medium hover:underline underline-offset-4">
                  Sobre mi
                </a>
              </Link>
              <Link legacyBehavior href="/projects">
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  Proyectos
                </a>
              </Link>
              <Link legacyBehavior href="/blog">
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                >
                  Blogs
                </a>
              </Link>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MelonConYogurt"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="" size={24} color="black" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/mono_leandro_/"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram className="" size={24} color="purple" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCZw0RkautflfsCQ3jLDCztQ"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiYoutube className="" size={24} color="red" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </nav>
        </header>

        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </div>

        <footer className="flex flex-col bg-white bg-opacity-70 justify-between gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-black">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 Alejandro Velez Gomez. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/MelonConYogurt"
              className="text-gray-500 hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="" size={24} color="black" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/mono_leandro_/"
              className="text-gray-500 hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="" size={24} color="purple" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCZw0RkautflfsCQ3jLDCztQ"
              className="text-gray-500 hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube className="" size={24} color="red" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
