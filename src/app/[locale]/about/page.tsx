import Description from "./_components/description";
import SkillsAndTools from "./_components/skills-and-tools";
import { setRequestLocale } from "next-intl/server";

const About = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <div>
            <Description />
            <SkillsAndTools />
        </div>
    );
};

export default About;
