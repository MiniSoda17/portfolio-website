import WorkSection from "./WorkSection";

const Work = () => {
  return (
    <>
      <div id="work" className="flex justify-center py-20 bg-zinc-50">
        <div className="flex flex-col w-[80%]">
          <div>
            <h1 className="text-3xl font-semibold text-slate-700">Work</h1>
          </div>
            <div className=" text-black md:mt-[3.2rem] mb-[5rem] mt-[5rem] pl-10 flex justify-center flex-col z-30">
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
        </div>
    </>
  );
};

export default Work;
