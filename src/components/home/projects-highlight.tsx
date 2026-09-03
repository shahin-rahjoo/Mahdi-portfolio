import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

const ProjectsHighlight = async () => {
    const locale = await getLocale();
    const t = await getTranslations("homePage");
    const highlighted = projects.filter((p) => p.featured).slice(0, 4);
    return (
        <div className="my-50">
            <div className="flex flex-col gap-8 justify-center items-center">
                <p className="text-2xl font-bold">
                    {t("projectsHighlight.title")}
                </p>
                <Link href={"/projects"}>
                    <Button variant={"outline"} className="p-5">
                        {t("projectsHighlight.button")}
                        <MoveRight />
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:px-20 mt-20">
                {highlighted.map((project) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                        <div className="flex flex-col justify-center items-center mx-4 sm:mx-0 gap-2">
                            <div className="relative w-full max-w-[80vw] md:max-w-[40vw] aspect-video">
                                <Image
                                    className="rounded-2xl"
                                    src={project.coverImage}
                                    alt={project.title[locale as "fa" | "en"]}
                                    fill></Image>
                            </div>
                            <p className="mt-4">
                                {project.title[locale as "fa" | "en"]}
                            </p>
                            <p className="text-xs">
                                {
                                    project.shortDescription[
                                        locale as "fa" | "en"
                                    ]
                                }
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectsHighlight;
