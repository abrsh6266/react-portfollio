import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text={"About me"} />
          <p className="text-lg text-gray-700 mb-8">
            I am a passionate developer with a strong background in front-end
            development. I enjoy crafting elegant and user-friendly interfaces
            using technologies like React and Vue.js. With expertise in HTML,
            CSS, and JavaScript, I strive to create engaging web experiences
            that delight users. Additionally, I have experience with server-side
            development using Node.js and Express.js, as well as database
            management with MongoDB and MySQL. I am constantly learning and
            exploring new technologies to enhance my skills and stay up-to-date
            with industry trends.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
