export type Project = {
    slug: string;
    title: {
        fa: string;
        en: string;
    };
    shortDescription: {
        fa: string;
        en: string;
    };
    fullDescription: {
        fa: string;
        en: string;
    };
    coverImage: string;
    heroImage: string;
    images: string[];
    techStack?: string[];
    featured?: boolean;
};
export const projects: Project[] = [
    {
        slug: "cafe-brand-identity",
        title: {
            fa: "هویت بصری کافه",
            en: "Cafe Brand Identity",
        },
        shortDescription: {
            fa: "طراحی لوگو و هویت بصری کامل برای یک کافه",
            en: "Logo and full brand identity design for a cafe",
        },
        fullDescription: {
            fa: "توضیحات کامل‌تر درباره‌ی فرآیند طراحی...",
            en: "A more detailed description of the design process...",
        },
        coverImage: "/images/projects/prjtst1/cover.webp",
        heroImage: "/images/projects/prjtst1/hero.webp",
        images: [
            "/images/projects/prjtst1/01.webp",
            "/images/projects/prjtst1/02.webp",
            "/images/projects/prjtst1/03.webp",
            "/images/projects/prjtst1/04.webp",
        ],
        techStack: ["Illustrator", "Photoshop"],
        featured: true,
    },
    {
        slug: "poster-series-2024",
        title: {
            fa: "مجموعه پوستر ۲۰۲۴",
            en: "Poster Series 2024",
        },
        shortDescription: {
            fa: "طراحی مجموعه پوستر برای یک رویداد موسیقی",
            en: "A poster series designed for a music event",
        },
        fullDescription: {
            fa: "توضیحات کامل‌تر درباره‌ی مفهوم و فرآیند طراحی این مجموعه...",
            en: "A more detailed description of the concept and design process for this series...",
        },
        coverImage: "/images/projects/prjtst2/cover.webp",
        heroImage: "/images/projects/prjtst2/hero.webp",
        images: [
            "/images/projects/prjtst2/01.webp",
            "/images/projects/prjtst2/02.webp",
            "/images/projects/prjtst2/03.webp",
            "/images/projects/prjtst2/04.webp",
        ],
        techStack: ["Illustrator", "InDesign"],
        featured: true,
    },
];
