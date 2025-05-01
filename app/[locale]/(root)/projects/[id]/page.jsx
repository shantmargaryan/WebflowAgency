"use client";
import SingleProjectHero from "@/components/SingleProjectHero";
import ProjectInfo from "@/components/ProjectInfo";
import AboutProject from "@/components/AboutProject";
import { useEffect, useState } from "react";
import { use } from "react";

export default function SinglePage({ params }) {
  const [projects, setProjects] = useState([]);
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

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
  }, [])

  const project = projects.find((post) => +post.id === +id);

  return (
    <>
      <SingleProjectHero />
      <ProjectInfo
        id={id}
        img={project?.path}
        alt="project"
        language={project?.language}
        development={project?.development}
        price={project?.price}
      />
      <AboutProject
        {...project}
      />
    </>
  );
}