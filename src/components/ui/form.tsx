"use client";
import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";

export function ContactForm() {
    const t = useTranslations("contactPage");
    const contactSchema = useMemo(
        () =>
            z.object({
                name: z
                    .string()
                    .min(2, t("form.name.inputErrorMin"))
                    .max(50, t("form.name.inputErrorMax")),
                email: z.string().email(t("form.email.inputError")),
                subject: z
                    .string()
                    .min(5, t("form.subject.inputErrorMin"))
                    .max(80, t("form.subject.inputErrorMax")),
                message: z
                    .string()
                    .min(20, t("form.textArea.inputErrorMin"))
                    .max(500, t("form.textArea.inputErrorMax")),
            }),
        [t],
    );

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        mode: "onSubmit",
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    async function onSubmit(data: z.infer<typeof contactSchema>) {
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send");

            toast.success(t("form.submitSuc"));
            form.reset();
        } catch {
            toast.error(t("form.submitErr"));
        } finally {
            setIsSubmitting(false);
        }
    }

    const watchedValues = useWatch({ control: form.control });
    const isAllFilled = Object.values(watchedValues).every(
        (value) => value.trim().length > 0,
    );

    return (
        <Card className="w-full bg-transparent">
            <CardContent>
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-name">
                                        {t("form.name.title")}
                                    </FieldLabel>
                                    <Input
                                        className="focus-visible:ring-0 focus-visible:ring-offset-0 border-t-0 border-l-0 border-r-0 border-border rounded-none"
                                        {...field}
                                        id="contact-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t("form.name.input")}
                                        autoComplete="name"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-email">
                                        {t("form.email.title")}
                                    </FieldLabel>
                                    <Input
                                        className="focus-visible:ring-0 focus-visible:ring-offset-0 border-t-0 border-l-0 border-r-0 border-border rounded-none"
                                        {...field}
                                        id="contact-email"
                                        type="email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t("form.email.input")}
                                        autoComplete="email"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-subject">
                                        {t("form.subject.title")}
                                    </FieldLabel>
                                    <Input
                                        className="focus-visible:ring-0 focus-visible:ring-offset-0 border-t-0 border-l-0 border-r-0 border-border rounded-none"
                                        {...field}
                                        id="contact-subject"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t("form.subject.input")}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-message">
                                        {t("form.textArea.title")}
                                    </FieldLabel>
                                    <InputGroup className="focus-visible:ring-0 focus-visible:ring-offset-0 border-t-0 border-l-0 border-r-0 border-border rounded-none">
                                        <InputGroupTextarea
                                            className="focus-visible:ring-0 placeholder:text-sm focus-visible:ring-offset-0"
                                            {...field}
                                            id="contact-message"
                                            placeholder={t(
                                                "form.textArea.input",
                                            )}
                                            rows={2}
                                            aria-invalid={fieldState.invalid}
                                        />
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button
                        className="cursor-pointer"
                        type="submit"
                        form="contact-form"
                        disabled={isSubmitting || !isAllFilled}>
                        {isSubmitting
                            ? t("form.submittingBtn")
                            : t("form.submitBtn")}
                    </Button>
                    <Button
                        className="cursor-pointer"
                        type="button"
                        variant="outline"
                        onClick={() => form.reset()}
                        disabled={isSubmitting}>
                        {t("form.clearBtn")}{" "}
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    );
}
