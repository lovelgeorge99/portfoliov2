import {
  Code,
  GitBranch,
  Layout,
  Server,
  BlocksIcon,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export function SkillCard({
  title,
  description,
  icon,
  skills,
}: SkillCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "layout":
        return Layout;
      case "server":
        return Server;
      case "blocksicon":
        return BlocksIcon;
      case "git-branch":
        return GitBranch;
      default:
        return Code;
    }
  };

  const Icon = getIcon();

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md hover:shadow-blue-100 border-slate-200">
      <CardHeader className="pb-2">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-teal-100">
          <Icon className="h-6 w-6 text-slate-700" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gradient-to-r from-slate-100 to-blue-50 px-2.5 py-0.5 text-xs font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
