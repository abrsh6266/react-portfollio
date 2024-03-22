import { useFetchProjects } from "../fetchProjects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const { projects, loading } = useFetchProjects();
  if (loading)
    return (
      <section className="py-20 align-element " id="projects">
        <h2>Loading...</h2>
      </section>
    );
  return <section className="py-20 align-element " id="projects">
    <SectionTitle text={"Web Creation"}/>
    <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {
            projects.map(project=>{
                return <ProjectCard key={project.id} {...project}/>
            })
        }
    </div>
  </section>;
};

export default Projects;
