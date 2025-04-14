import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-slate-50">
      <section id="about" className="container py-24 md:py-32 ">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Hi, I'm <span className="text-primary">Lovel George</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Professional Software Engineer with 2+ years of experience in
                building Web and enterprise applications using Next.js, NestJS,
                TypeScript, PostgreSQL, and Docker. Skilled in both front-end
                and back-end development, with a strong focus on decentralized
                systems, scalable backend architecture, and AI-powered
                solutions.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link target="_blank" href="lovelgeorge_resume.pdf">
                  View Resume
                  {/* <ArrowDown className="ml-2 h-4 w-4" /> */}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://github.com/lovelgeorge99"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/lovel-george/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:lovelgeorge22@example.com">
                <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-96  w-96 overflow-hidden rounded-full border-4  bg-muted ">
              <img
                src="/my-pic.png"
                alt="Your profile"
                className="h-full w-full object-cover scale-100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
