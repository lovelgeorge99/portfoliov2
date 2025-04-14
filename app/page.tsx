import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import { SkillCard } from "@/components/skill-card";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

const navItems = [
  { href: "#about", label: "Home" },
  { href: "#about-me", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            LovelGeorge
          </Link>
          <nav className="hidden space-x-6 md:flex ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" font-medium hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="#contact">Get in touch</Link>
            </Button> */}
            <MobileNav navItems={navItems} />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />
        {/* About Me Section */}
        <AboutSection />
        <Experience />
        {/* Skills Section */}
        <section id="skills" className="bg-white py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">My Skills</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SkillCard
                title="Frontend Development"
                description="Building responsive and accessible web interfaces with modern frameworks."
                icon="layout"
                skills={[
                  "React",
                  "NextJS",
                  "TypeScript",
                  "HTML/CSS",
                  "Tailwind CSS",
                ]}
              />
              <SkillCard
                title="Backend Development"
                description="Creating robust server-side applications and APIs."
                icon="server"
                skills={[
                  "NodeJS",
                  "Express",
                  "NestJS",
                  "GraphQL",
                  "TypeORM",
                  "PrismaORM",
                  "MongoDB",
                  "PostgreSQL",
                ]}
              />
              <SkillCard
                title="Blockchain Development"
                description="Designing intuitive user interfaces and experiences."
                icon="blocksicon"
                skills={["Wagmi", "Solidity", "Dune Dashboard"]}
              />
              <SkillCard
                title="DevOps"
                description="Implementing CI/CD pipelines and managing deployments."
                icon="git-branch"
                skills={["Docker", "GitHub Actions", "AWS"]}
              />
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <ContactMe />
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lovel George. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
