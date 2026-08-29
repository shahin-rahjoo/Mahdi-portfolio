import { getTranslations } from "next-intl/server";
import { skillsIconsArray } from "@/components/skillsIcons";

const SkillsAndTools = async () => {
    const t = await getTranslations("aboutPage");
    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 max-w-7xl mx-auto">
            <h2 className="font-bold text-primary text-3xl sm:text-4xl lg:text-5xl mb-20">
                {t("skillsAndTools.title")}{" "}
            </h2>
            <div
                className="grid
                    grid-cols-2
                    sm:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    gap-16
                    gap-x-24
                    sm:gap-x-34
                    lg:gap-x-44">
                {skillsIconsArray.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <span
                            className="bg-background rounded-2xl flex flex-col items-center w-6"
                            key={skill.id}>
                            <Icon className="w-12 sm:w-14 xl:w-16"></Icon>
                            <p className="text-primary mt-3 text-sm lg:text-lg flex flex-row text-nowrap">
                                {skill.name}
                            </p>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsAndTools;
