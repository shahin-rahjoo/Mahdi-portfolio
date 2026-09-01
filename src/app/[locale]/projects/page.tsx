import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { get } from "http";

const ProjectsPage = async ({
    params,
}: {
    params: Promise<{ locale: string }>;
}) => {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("projectsPage");

    return (
        <div>
            <div className="w-full items-center mt-20 px-6 sm:px-20">
                <div className="">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        {t("title")}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {t("description")}
                    </p>
                </div>
                <div className="border-b-2 border-border mt-14 "></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-20 mt-20">
                {projects.map((project) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                        <div className="flex flex-col justify-center items-center mx-4 sm:mx-0 gap-2">
                            <div className="relative w-full max-w-sm aspect-video">
                                <Image
                                    className="rounded-2xl"
                                    src={project.coverImage}
                                    alt={project.title[locale as "fa" | "en"]}
                                    fill></Image>
                            </div>
                            <p className="mt-4">
                                {project.title[locale as "fa" | "en"]}
                            </p>
                            <p>
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

export default ProjectsPage;
