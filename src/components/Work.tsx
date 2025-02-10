const Work = () => {
  const data = [
    {
      time: "August 2022 - August 2023",
      name: "Retail Sales Associate, Queensland Australia",
      description: [
        "Customer interaction and assistance, understanding diverse preferences and needs",
        "Ensuring a positive and seamless customer experience through effective communication",
        "Integration of technology tools for assisting customers or managing inventory systems",
      ],
    },
    {
      time: "November 2023 -  January 2024",
      name: "Software Engineer Intern, Jakarta Indonesia",
      description: [
        "Material preparation with Java expertise",
        "Guiding students in efficient coding and problem-solving",
        "Effective communication of complex concepts",
      ],
    },
    {
      time: " July 2023 - Current",
      name: "Academic Tutor, University of Queensland",
      description: [
        "Gaining hands-on experience in coding, testing, and debugging front-end codebases",
        "Learning and adapting to new technologies or frameworks under mentorship",
        "Exposure to Ruby and their frameworks",
      ],
    },
  ];
  return (
    <div className="bg-black w-full">
      <div
        id="work"
        className=" w-[40%] md:w-[15%] flex justify-center shadow-md font-bold  text-white text-xl  shadow-gray-500 rounded-full p-4 z-30"
      >
        Work Experience
      </div>
      
      <div className=" text-white md:mt-[3.2rem] mb-[5rem] mt-[5rem] pl-10 flex justify-center flex-col z-30">
        {data.map((item) => {
          return (
            <div className=" relative p-9 border-l border-white z-30">
              <div className="absolute left-[-0.5rem] top-[2.6rem] p-2 bg-gray-500 rounded-full z-30"></div>
              <div className="md:text-[1rem] text-[0.8rem]">{item.time}</div>
              <div className="font-bold md:text-[1rem] text-[0.8rem]">
                {item.name}
              </div>
              {item.description.map((desc, idx) => (
                <li className="md:text-[1rem] text-[0.8rem]" key={idx}>
                  {desc}
                </li>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
