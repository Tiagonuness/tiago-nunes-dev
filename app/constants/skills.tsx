import { 
    FaHtml5 as Html,
} from "react-icons/fa6";

import { IoLogoCss3 as CssIcon } from "react-icons/io";

import {
    DiJavascript as Javascript,
    DiJqueryLogo  as JQuery,
    DiMsqlServer as SqlServer
} from "react-icons/di";

import { FaReact as ReactIcon,
        FaBootstrap as Bootstrap,
        FaPhp as PHP,
        FaPython as Python,
        FaJenkins as Jenkins
 } from "react-icons/fa";

import {
    SiTypescript as Typescript,
    SiCplusplus as cplusplus,
    SiNotepadplusplus as Notepad,
    SiPostgresql as Postgresql,
    SiPycharm as PyCharm,
    SiCodeblocks as CodeBlocks,
    SiTailwindcss as Tailwindcss
} from "react-icons/si";

import { BsMicrosoftTeams as Teams } from "react-icons/bs";

import {
    FaGitAlt as Git,
    FaFigma as Figma,
    FaAngular as Angular,
    FaRust as Rust
} from "react-icons/fa";

import { VscVscode as VsCode } from "react-icons/vsc";

import { TbBrandCSharp } from "react-icons/tb";

export interface SkillI {
  name: string;
  icon: React.ElementType;
}

interface SkillsI {
    title: string,
    skills: SkillI[],
}


export const skills: SkillsI[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: Html },
            { name: "CSS", icon: CssIcon },
            { name: "JavaScript", icon: Javascript },
            { name: "React", icon: ReactIcon },
            { name: "Bootstrap", icon: Bootstrap },
            { name: "Typescript", icon: Typescript },
            { name: "JQuery", icon: JQuery },
            { name: "Tailwindcss", icon: Tailwindcss },
            { name: "Angular", icon: Angular },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "PHP", icon: PHP },
            { name: "Python", icon: Python },
            { name: "C++", icon: cplusplus },
            { name: "SQL Server", icon: SqlServer },
            { name: "PostgreSQL", icon: Postgresql},
            { name: "C#", icon: TbBrandCSharp },
            { name: "Rust", icon: Rust },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { name: "Git", icon: Git },
            { name: "Jenkins", icon: Jenkins },
            { name: "Microsoft Teams", icon: Teams },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "VS Code", icon: VsCode },
            { name: "Figma", icon: Figma }, 
            { name: "Notepad++", icon: Notepad }, 
            { name: "PyCharm", icon: PyCharm }, 
            { name: "CodeBlocks", icon: CodeBlocks }, 
        ],
    },
];