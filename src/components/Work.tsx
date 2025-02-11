import WorkSection from "./WorkSection";

import img1 from "../images/suncorp.jpg";
import img2 from "../images/uq.jpg";
import img3 from "../images/snipeyes.jpg";

const Work = () => {
  return (
    <>
      <div id="work" className="flex justify-center pt-20 bg-zinc-50">
        <div className="flex flex-col w-[60%]">
          <div>
            <h1 className="text-3xl font-semibold text-slate-700">Work</h1>
          </div>
          <div className=" text-black md:mt-[3.2rem] mb-[5rem] mt-[5rem] pl-10 flex justify-center flex-col z-30">
            <WorkSection
              title="Undergraduate Software Engineer"
              time="February 2025 - Present"
              company="Suncorp Group"
              logo={img1}
              description={[
                "Designed and engineered ETL workflows using Pentaho Data Integration for secure file encryption",
                "Used SQL, Bash & JavaScript to optimize automation in ETL pipelines, reducing data processing time by 50%",
                "Developed and test Control-M jobs to monitor workflows and ensure data integrity through logging measures",
              ]}
            />
            <WorkSection
              title="Software Engineer Intern"
              time="November 2024 - February 2025"
              company="Suncorp Group"
              logo={img1}
              description={[
                "Developed reusable OAuth 2.0 Components in MuleSoft using the Mule SDK (Java), decreasing API development time from over 6 hours to under 30 minutes across 10 different teams in Suncorp",
                "Implemented a CI/CD pipeline using Jenkins to allow automatic and secure releases onto OpenShift’s Rosa Clusters",
                "Conducted Junit 5 and Munit testing, ensuring functionality in 95% of various business cases and workflows",
                "Worked closely with the Axway API Gateway team to increase security, scalability and request handling efficiency",
              ]}
            />
            <WorkSection
              title="Causal Academic Tutor"
              time="July 2023 - Present"
              company="University of Queensland"
              logo={img2}
              description={[
                "Taught and marked over 1000+ students, teaching Java fundamentals and industry level techniques such as mock testing, logging, object-oriented analysis and sequence diagrams",
                "Received approval by Course Coordinator to develop a comprehensive Ed Discussion post to assist students in starting their Java assignment, garnering over 1500 views and over 100 positive reactions",
                "Received an average of 5/5 stars from SETutor reviews by 20 students, resulting in promotion as Head Tutor by course coordinator to manage the mid-semester exam",
                "Utilised software tools such as GitHub, Git, Sonar Cloud, and Agile development to promote software collaboration"
              ]}
            />
            <WorkSection
              title="Web Developer Intern"
              time="November 2023 - January 2024"
              company="Snipeyes"
              logo={img3}
              description={[
                "In charge of building a full-stack application using HTML, CSS, JavaScript, Jekyll, Ruby to showcase advertisements from small businesses across Jakarta, Indonesia",
                "Levered user end-to-end testing and code reviews to ensure over 90% working functionality",
                "Developed low and high-fidelity designs using Figma and received 100% approval to begin website development"
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
