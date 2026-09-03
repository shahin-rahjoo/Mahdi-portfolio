import { getTranslations } from "next-intl/server";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const AboutPreview = async () => {
    const t = await getTranslations("homePage");
    return (
        <div className="flex flex-col gap-10 sm:flex-row justify-center items-center w-full">
            <div className="sm:w-2/3 lg:w-3/5 sm:px-4 flex justify-center items-center">
                <div className="max-w-xl gap-6 mb-10 sm:mb-0 sm:gap-10 flex flex-col justify-center items-center sm:items-start">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        {t("aboutPreview.title")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {t("aboutPreview.description")}
                    </p>
                    <Link href={"/about"}>
                        <Button className="font-bold">
                            {t("aboutPreview.button")}
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center py-5 w-[70vw] sm:w-1/3 lg:w-2/5">
                <div className="relative w-fit">
                    <div className="absolute -top-4 right-4 w-20 h-6 rounded-lg border-2 border-primary z-10" />
                    <div className="absolute bottom-4 sm:-left-6 -left-3 w-8 h-26 rounded-lg border-2 border-primary z-10" />
                    <div className="max-w-xs">
                        <Image
                            className="rounded-2xl"
                            src={"/images/imagem.png"}
                            alt="my picture"
                            width={500}
                            height={500}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPreview;
