import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>;
}) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const lang = locale as "fa" | "en";

    const t = await getTranslations("projectsPage.projectDetails");
    return (
        <div className="px-7">
            <div className="w-full items-center mt-20 px-6 sm:px-20">
                <div className="">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        {t("title")}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {t("subTitle")}
                    </p>
                </div>
                <div className="border-b-2 border-border mt-14 "></div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center my-10">
                    <Image
                        className="rounded-2xl w-[80vw]"
                        src={project.heroImage}
                        alt="image"
                        width={900}
                        height={0}></Image>
                </div>
                <div className="sm:px-20 lg:px-40 my-20">
                    <p className="text-2xl mb-2 sm:text-3xl">
                        {t("story.title")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {t("story.description")}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((image) => (
                            <div className="w-[60vw] md:w-[40vw]" key={image}>
                                <Image
                                    className="rounded-2xl aspect-video"
                                    src={image}
                                    alt="project image"
                                    width={900}
                                    height={0}></Image>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
