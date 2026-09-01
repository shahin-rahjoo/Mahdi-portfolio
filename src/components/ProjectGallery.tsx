"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
    images: string[];
    alt: string;
};

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    console.log(images);

    const showPrev = () => {
        setActiveIndex((prev) =>
            prev === null ? null : (prev - 1 + images.length) % images.length,
        );
    };

    const showNext = () => {
        setActiveIndex((prev) =>
            prev === null ? null : (prev + 1) % images.length,
        );
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((img, index) => (
                    <button
                        key={img}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="relative w-full aspect-video cursor-pointer">
                        <Image
                            src={img}
                            alt={alt}
                            fill
                            className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                        />
                    </button>
                ))}
            </div>

            <Dialog
                open={activeIndex !== null}
                onOpenChange={(open) => !open && setActiveIndex(null)}>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                    {activeIndex !== null && (
                        <div className="relative w-full aspect-video">
                            <Image
                                src={images[activeIndex]}
                                alt={alt}
                                fill
                                className="object-contain"
                            />

                            <button
                                type="button"
                                onClick={showPrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2">
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                type="button"
                                onClick={showNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
