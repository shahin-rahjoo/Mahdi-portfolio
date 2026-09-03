import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/hero";
import AboutPreview from "@/components/home/about-preview";
import ProjectsHighlight from "@/components/home/projects-highlight";
// import { useTranslations } from "next-intl";

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <div className="felx felx-col justify-center items-center gap-20 px-6">
            <Hero></Hero>
            <AboutPreview></AboutPreview>
            <ProjectsHighlight></ProjectsHighlight>
        </div>
    );
};

export default Home;
