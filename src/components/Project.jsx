import React, { useEffect, useState } from "react";
import sanityClient from "../client";

import Loading from "./Loading";

export default function Project({ darkMode }) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!projectData) return <Loading darkMode={darkMode} />;

  return (
    <main className={`${darkMode ? "filter invert" : ""} min-h-screen p-12`}>
      <section className="container mx-auto">
        <h1 className="text-4xl flex justify-center">My Projects</h1>
        <h2 className="text-base text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid md:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-2xl bg-white p-10 bg-image-custom2">
                <h3 className="text-black text-3xl font-bold mb-2 hover:text-indigo-600">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`${
                      darkMode ? "filter invert" : ""
                    } text-indigo-600 text-xl relative font-bold hover:underline hover:text-indigo-500`}
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      ????
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

// export default Project;
