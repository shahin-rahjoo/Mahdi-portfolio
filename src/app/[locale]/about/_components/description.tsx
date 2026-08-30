import Image from "next/image";
import { getTranslations } from "next-intl/server";

const description = async () => {
    const t = await getTranslations("aboutPage");
    return (
        <div
            className="flex 
                flex-col
                lg:flex-row
                px-10
                lg:px-20
                justify-evenly
                items-center
                my-10">
            <div
                className="
                mb-8
                    lg:w-1/2
                    flex
                    justify-center
                    lg:shrink-0
                    w-full">
                <Image
                    src="/images/imagem.png"
                    width={300}
                    height={300}
                    priority={true}
                    alt="picture"
                    title="picture"
                    className="w-full max-w-fit object-cover rounded-2xl"
                />
            </div>
            <div className="lg:px-0 sm:px-20 md:px-30">
                <h2
                    className="font-bold
                        text-primary
                        text-2xl
                        md:text-4xl
                        lg:text-5xl
                        lg:mb-10">
                    {t("aboutMe.title")}
                </h2>
                <p>{t("aboutMe.description")}</p>
            </div>
        </div>
    );
};

export default description;
