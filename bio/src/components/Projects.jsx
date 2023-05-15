import ProjectItem from "./ProjectItem";
import contactImg from "../assets/images/contact.png";
import RestaurantImg from "../assets/images/E-Restaurant.png";
import gemHomeImg from "../assets/images/gem-home.png";
import formImg from "../assets/images/gem-form.png";
import selectionImg from "../assets/images/selection.png";
import priceImg from "../assets/images/price.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        This is some of the projects I have undertaken in the course of my one
        year journey into Web development.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={gemHomeImg} title="Gemma Home" />
        <ProjectItem img={RestaurantImg} title="E-Res App" />
        <ProjectItem img={formImg} title="Gemma Form " />
        <ProjectItem img={priceImg} title="Gemma pricing " />
        <ProjectItem img={contactImg} title="Gemma contact" />
        <ProjectItem img={selectionImg} title="Gemma billing" />
      </div>
    </div>
  );
};

export default Projects;
