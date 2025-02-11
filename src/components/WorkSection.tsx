interface Props {
  time: string;
  title: string;
  company: string;
  logo: string;
  description: string[];
}

const WorkSection = (props: Props) => {
  return (
    <div className="flex flex-row items-start">
      <div className="flex-1 mt-3rem items-center justify-center">
        <img src={props.logo} className="w-full h-full object-contain aspect-square" />
      </div>
      <div className="relative p-9 mw-5rem w-[80%] border-l border-black z-10">
        <div className="absolute left-[-0.5rem] top-[2.6rem] p-2 bg-gray-500 rounded-full z-30"></div>
        <div className="font-bold md:text-[1.5rem] text-[1.2rem]">
          {props.company}
        </div>
        <div className="md:text-[1rem] text-[0.8rem]">{props.time}</div>
        <div className="font-bold md:text-[1rem] text-[0.8rem] italic">
          {props.title}
        </div>
          {props.description.map((desc, idx) => (
            <li className="md:text-[1rem] text-[0.8rem]" key={idx}>
              {desc}
            </li>
          ))}
      </div>
    </div>
  );
};

export default WorkSection;
