import { SiFigma, SiSketch, SiBlender, SiCoreldraw } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

export const skills: Skill[] = [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Sketch", icon: SiSketch, color: "#F7B500" },
    { name: "Blender", icon: SiBlender, color: "#E87D0D" },
    { name: "CorelDRAW", icon: SiCoreldraw, color: "#7DAB43" },
];
