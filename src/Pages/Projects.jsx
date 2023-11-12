import ShowCase from "../Components/ShowCase/ShowCase";
import res from "../assets/residencia.webp";
import mer from "../assets/meriton.webp";

const Projects = () => {
  return (
    <>
    <section className="my-20">
      <ShowCase img1={res} img2={mer} />
    </section>
    </>
  );
}
export default Projects;