// import Image from "next/image";

const SkillsAndTools = () => {
    const skills = [
        { id: 0, name: "photoshop" },
        { id: 1, name: "figma" },
        { id: 2, name: "blender" },
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 max-w-7xl mx-auto">
            <h2 className="font-bold text-primary text-3xl sm:text-4xl lg:text-5xl mb-20">
                Tech Stack
            </h2>
            <div
                className="grid
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    gap-26">
                {skills.map((skill) => (
                    <span
                        className="bg-background rounded-2xl flex flex-col items-center w-26"
                        key={skill.name}>
                        <p className="text-primary mt-3 text-2xl font-bold">
                            {skill.name}
                        </p>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsAndTools;
