import Card from "./Card";

export type Project = {
  id: string;
  title: string;
  description: string;
  subtext: string;
  link?: string;
  linkHref?: string;
  linkGray: boolean;
  GitHub?: string;
  screenshots?: string[];
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="space-y-0">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </section>
  );
}
