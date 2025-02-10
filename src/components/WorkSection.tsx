interface Props {
    time: string;
    title: string;
    company: string;
    description: string[];
}

const WorkSection = (props: Props) => {
    return (
        <div className="relative p-9 border-l border-white z-30">
            <div className="absolute left-[-0.5rem] top-[2.6rem] p-2 bg-gray-500 rounded-full z-30"></div>
            <div className="md:text-[1rem] text-[0.8rem]">{props.time}</div>
            <div className="font-bold md:text-[1rem] text-[0.8rem]">
                {props.title}
            </div>
            {props.description.map((desc, idx) => (
                <li className="md:text-[1rem] text-[0.8rem]" key={idx}>
                    {desc}
                </li>
            ))}
        </div>
    );
}

export default WorkSection;