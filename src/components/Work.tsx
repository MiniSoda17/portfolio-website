import WorkSection from "./WorkSection";

const Work = () => {
  
  return (
    <div className="bg-black w-full">
      <div
        id="work"
        className=" w-[40%] md:w-[15%] flex justify-center shadow-md font-bold  text-white text-xl  shadow-gray-500 rounded-full p-4 z-30"
      >
        Work Experience
      </div>

      <div className=" text-white md:mt-[3.2rem] mb-[5rem] mt-[5rem] pl-10 flex justify-center flex-col z-30">
        <WorkSection
          title="Undergraduate Software Engineer"
          time="February 2025 - Present"
          company="Suncorp Group"
          description={["blah blah blah"]}
        />
        <WorkSection
          title="Software Engineer Intern"
          time="November 2024 - February 2025"
          company="Suncorp Group"
          description={["blah blah blah"]}
        />
        <WorkSection
          title="Causal Academic Tutor"
          time="July 2023 - Present"
          company="University of Queensland"
          description={["blah blah blah"]}
        />
        <WorkSection
          title="Web Developer Intern"
          time="November 2023 - January 2024"
          company="Snipeyes"
          description={["blah blah blah"]}
        />
      </div>
    </div>
  );
};

export default Work;
