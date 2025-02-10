import ProjectBox from "./ProjectBox";
import img1 from "../images/posturePlantPal.jpg";
import img2 from "../images/HumansVsAliens.jpg";
import img3 from "../images/project3.png";
import img4 from "../images/project4.png";

function Projects() {
  return (
    <div id="projects" className="flex justify-center py-20 bg-zinc-50">
      <div className="flex flex-col w-[80%]">
        <div>
          <h1 className="text-3xl font-semibold text-slate-700">Projects</h1>
          <p className="text-1xl py-2 text-slate-500">
            Each project contains unique features and code libraries
          </p>
        </div>
        <div className="flex flex-col self-center justify-center items-center gap-12 py-12 md:w-[65%]">
          <ProjectBox
            title="Posture Plant Pal, React Web App"
            desc="An IOT posture monitoring system that relays realtime information on user’s posture through lighting, mechanical blooming of the plant and an interactive UX/UI dashboard."
            tags={["React.JS", "React Native", "Python", "C++", "Firebase"]}
            image={img1}
            live={true}
            link="https://posture-plant-pal.web.app/"
            gitlink="https://github.com/orgs/Power-Puff-Plants/repositories"
          />
          <ProjectBox
            title="Humans vs Aliens: Tower Defense Game"
            desc="A tower defense game made with Java and the LibGDX library. Features multiple levels, enemy types, and a unique game mechanic where the player can control the towers to shoot the enemies."
            tags={["Java", "LibGDX", "Maven"]}
            image={img2}
            live={false}
            link="https://angular-mobile-dev.vercel.app"
            gitlink="https://github.com/UQcsse3200/2023-studio-3"
          />
          <ProjectBox
            title="FullStack Survey App"
            desc="Simple survey website that communicates with a MySQL database using Python Flask library as the backend. Visualizes the surveys input data using charts and visuals"
            tags={[
              "React.JS",
              "Typescript",
              "Python",
              "Flask",
              "Tailwind",
              "MySQL",
              "AWS",
            ]}
            image={img3}
            live={false}
            gitlink="https://github.com/jjacob-dev/fullstack-survey-site"
          />
          <ProjectBox
            title="Jump Hero, P5.Play JS game"
            desc="JavaScript game with multiple stages and unique game physics, using public assets along with logos and custom assets made with Photoshop. Made possible using the p5play Library"
            tags={["Javascript", "P5.Play", "HTML", "CSS"]}
            image={img4}
            live={true}
            link="https://jump-hero.vercel.app/"
            gitlink="https://github.com/jjacob-dev/Jump-hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
