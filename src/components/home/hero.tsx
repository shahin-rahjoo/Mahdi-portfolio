import { getTranslations } from "next-intl/server";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = async () => {
    const t = await getTranslations("homePage");
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                {t("hero.title")}
            </h1>
            <p className="text-muted-foreground text-center mx-6">
                {t("hero.subtitle")}
            </p>
            <Link href={"/projects"}>
                <Button className="font-bold">{t("hero.button")}</Button>
            </Link>
        </div>
    );
};

export default Hero;
