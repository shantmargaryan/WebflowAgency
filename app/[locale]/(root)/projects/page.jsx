"use client";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsItems from "@/components/ProjectsItems";
import { useEffect, useState } from "react";


export default  function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  })
  
  return (
    <>  
      <ProjectsHero />
      <ProjectsItems posts={projects} />
    </>
  );
}