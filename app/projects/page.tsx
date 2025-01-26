"use client";
import ProjectCard from "@/components/ProjectCard/ProjectCart";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  sourceCodeUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Ecommerce Website",
    description:
      "A personal ecommerce website showcasing my skills and projects.",
    imageUrl: "/Ecommerce.png",
    websiteUrl: "https://ecommerce-frontend-teal-five.vercel.app/",
    sourceCodeUrl: "https://github.com/naveed-islam40/Ecommerce-frontend",
  },
  {
    id: "2",
    title: "Company Survey Management",
    description:
      "A full-stack Company Survey Management application with user authentication.",
    imageUrl: "/heugo.png",
    websiteUrl: "https://frontend-deploy-six.vercel.app/signup",
    sourceCodeUrl: "https://github.com/naveed-islam40/frontend-deploy",
  },
  {
    id: "3",
    title: "Video Calling Platform",
    description: "An online video calling app with complete functionality",
    imageUrl: "/video_calling.png",
    websiteUrl: "https://my-meet-seven.vercel.app/",
    sourceCodeUrl: "https://github.com/naveed-islam40/my-meet",
  },
  {
    id: "4",
    title: "Project Management",
    description:
      "A project management where, you can manage your projects & thier tasks digitally",
    imageUrl: "/task_project.png",
    websiteUrl: "https://project-management-amber-rho.vercel.app/",
    sourceCodeUrl: "#",
  },
];

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
