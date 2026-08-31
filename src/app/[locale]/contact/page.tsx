import { ContactForm } from "@/components/ui/form";
import { getTranslations } from "next-intl/server";
const ContactPage = async () => {
    const t = await getTranslations("contactPage");
    return (
        <div className="flex flex-col items-center px-5 mt-20 gap-20">
            <div className="w-full items-center sm:px-10">
                <div className="sm:ml-10 lg:ml-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        {t("title")}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {t("description")}
                    </p>
                </div>
                <div className="border-b-2 border-border mt-12"></div>
            </div>
            <div className="sm:px-20 w-screen flex flex-col items-center justify-evenly sm:flex-row">
                <div className="flex sm:w-1/3 flex-col items-center justify-center">
                    <h2 className="text-2xl lg:text-4xl mb-6 sm:max-w-45 lg:max-w-70">
                        {t("touch")}
                    </h2>
                </div>
                <div className="sm:w-2/3 flex w-full max-w-md flex-col justify-center items-center content-center">
                    <div className="w-full  mx-10">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
