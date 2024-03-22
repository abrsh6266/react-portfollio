import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectCard = ({ id, img, url, title }) => {
  return <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
    <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64"/>
    <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
    </div>
    <div className="mt-4 flex gap-x-4">
        <a href={url}>
            <TbWorldWww  className="h-8 w-8 text-slate-500 hover:text-black duration-300 m-4"/>
        </a>
    </div>

  </article>;
};

export default ProjectCard;
