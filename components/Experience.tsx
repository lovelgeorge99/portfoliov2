import { Circle } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-50 py-16">
      <div className="container">
        <h2 className="mb-16 text-center text-3xl font-bold">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Experience Item 1 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 mb-12">
            <div className="text-right">
              <h3 className="text-xl font-bold">Full-Stack Developer</h3>
              <p className="text-primary font-medium">General Magic</p>
              <p className="text-sm text-muted-foreground">
                May 2024 - Present
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-px h-full bg-slate-200"></div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-200 bg-white">
                <Circle className="w-4 h-4 text-primary" />
              </div>
              <div className="w-px h-full bg-slate-200"></div>
            </div>

            <div>
              <ul className="list-disc text-muted-foreground">
                <li>
                  Built and deployed multiple Web3 dApps using Next.js,
                  Solidity, and NestJS across projects like Giveth, Qacc,
                  Pairwise, and Quadratic Voting, integrating with various
                  blockchain networks.
                </li>
                <li>
                  Architected secure backend systems with Nest.js and
                  PostgreSQL, using raw SQL and materialized views to optimize
                  performance and scalability.
                </li>
                <li>
                  Developed an AI agent for project evaluation using NLP
                  techniques, enhancing decision-making through automated
                  assessments
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 mb-12">
            <div className="text-right">
              <h3 className="text-xl font-bold">Freelancing</h3>
              {/* <p className="text-primary font-medium">V12 Software</p> */}
              <p className="text-sm text-muted-foreground">
                Jan 2022 - Apr 2024
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-px h-full bg-slate-200"></div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-200 bg-white">
                <Circle className="w-4 h-4 text-primary" />
              </div>
              <div className="w-px h-full bg-slate-200"></div>
            </div>

            <div>
              <ul className="list-disc text-muted-foreground">
                <li>
                  Deployed full-stack web apps on AWS using Docker and CI/CD for
                  automated deployments.
                </li>
                <li>
                  Scaled microservices on Proxmox for performance and security.
                </li>
                <li>
                  Set up Nextcloud as a secure, scalable home storage solution,
                  enabling efficient file management and collaboration for the
                  client.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 mb-12">
            <div className="text-right">
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-primary font-medium">Orange Dice Solutions</p>
              <p className="text-sm text-muted-foreground">
                Aug 2020 - Oct 2021
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-px h-full bg-slate-200"></div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-200 bg-white">
                <Circle className="w-4 h-4 text-primary" />
              </div>
              <div className="w-px h-full bg-slate-200"></div>
            </div>

            <div>
              <ul className="list-disc text-muted-foreground">
                <li>
                  Built a performant API with Express.js and MySQL, reducing
                  frontend load time by 25%.
                </li>
                <li>
                  Integrated Redis caching and automated testing with Chai.js,
                  improving responsiveness and bug detection.
                </li>
                <li>
                  Collaborated on peer reviews and Agile processes, enhancing
                  code quality and ensuring timely project delivery.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
