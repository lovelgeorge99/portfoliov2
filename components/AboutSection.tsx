import React from "react";

const AboutSection = () => {
  return (
    <section id="about-me" className="container py-16 border-t ">
      <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg">
            I am a full-stack developer currently based in Canada, with a
            passion for creating scalable, high-performance web applications.
            With a strong foundation in front-end and back-end technologies, I
            bridge the gap between design and functionality to provide seamless
            digital experiences.
          </p>
          <p>
            I specialize in building responsive, user-friendly applications
            using the latest technologies and best practices. My approach
            combines technical expertise with a keen eye for design, ensuring
            that the solutions I create are not only functional but also
            visually appealing.
          </p>
          <p>My main areas of expertise include:</p>
          <ul className=" list-disc px-4">
            <li>React and NextJS</li>
            <li>TypeScript</li>
            <li>NestJS and Express</li>
            <li>GraphQL and REST APIs</li>
            <li>NoSQL adn SQL databses</li>
            <li>Blockchain technologies</li>
          </ul>
          <p>
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or building some
            other projects using the new tech stacks.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">
                  Masters in Applied Computer Science
                </p>
                <p className="text-sm text-muted-foreground flex  flex-col justify-between">
                  <span>Concordia University</span>
                  <span className=" italic">Montreal,Canada </span>
                  <span>Jan 2022 - Dec 2023</span>
                </p>
              </div>
              <div>
                <p className="font-medium">Bachelors in Computer Science</p>
                <p className="text-sm text-muted-foreground flex  flex-col justify-between">
                  <span>Karunya Insitute of Technology & Sciences</span>
                  <span className=" italic">Coimbatore,India </span>
                  <span>Aug 2017 - Aug 2021</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="text-lg font-semibold mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Camping
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Calisthenics
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Hiking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
