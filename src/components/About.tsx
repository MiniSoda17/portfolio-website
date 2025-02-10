import aImage from "../images/about.jpg";

function About() {
  return (
    <>
      <div id="about" className="flex justify-center py-36">
        <div className="flex flex-col-reverse md:flex-row gap-4 px-8 justify-center max-w-6xl">
          <div className="flex flex-col gap-4 flex-1">
            <div className="text-4xl font-bold text-slate-700">
              <h1>About me</h1>
            </div>
            <div className="flex flex-col text-center md:text-left gap-4 md:max-w-[80%] text-lg text-slate-600">
              <p>
                I'm currently an Undergraduate Software Engineer at Suncorp Group where I work on backend API and
                data-integration applications. I'm also a final-year student at the University of Queensland studying Computer Science & Psychology,
                graduating in November, 2025.
              </p>
              <p>
                Studying Psychology, I have always had a strong interest in helping others. 
                However, during university, I discovered my passion for technology and software engineering. 
                I then realised I would be able to impact more people through technology than I ever thought possible before.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <img className="rounded-lg" src={aImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
