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
    SiCodeblocks as CodeBlocks
} from "react-icons/si";

import { BsMicrosoftTeams as Teams } from "react-icons/bs";

import {
    FaGitAlt as Git,
    FaFileExcel as Excel
} from "react-icons/fa";

export interface SkillI {
    name: string;
    icon: React.ElementType;
}

export interface ProjectI {
    title: string;
    description: string;
    imageUrl: string;
    skills: SkillI[];
    liveUrl?: string;
    repoUrl?: string;
};


export const projects: ProjectI[] = [
    {
        title: "INFO EMENDAS",
        description:
            "Sistema de gestão de pagamentos de emendas parlamentares (RP6, RP7) e emendas de comissões (RP8), acompanhando fluxos financeiros entre a SRI e o Tesouro Nacional, execuções por Ministérios Gestores e indicações orçamentárias do Congresso.",
        imageUrl: "/assests/infoEmendas3.png",
        skills: [
            { name: "HTML", icon: Html },
            { name: "CSS", icon: CssIcon },
            { name: "Bootstrap", icon: Bootstrap },
            { name: "JQuery", icon: JQuery },
            { name: "Python", icon: Python },
            { name: "PHP", icon: PHP },
            { name: "Jenkins", icon: Jenkins },
            { name: "Git", icon: Git },
            { name: "PostgreSQL", icon: Postgresql },
            { name: "SQL Server", icon: SqlServer },
            { name: "Teams", icon: Teams },
        ],
        liveUrl: "",
        repoUrl: "",
    },
    {
        title: "Aplicativo Formatador de Planilhas Excel para Controle de Validação",
        description:
            "Aplicação gráfica desenvolvida em Python, utilizando a biblioteca CustomTkinter, que permite ao usuário selecionar múltiplos arquivos .xlsx e aplicar formatações e regras específicas a cada planilha.",
        imageUrl: "/assests/aplicativoFormatador.png",
        skills: [
            { name: "Python", icon: Python },
            { name: "Excel", icon: Excel }
        ],
        liveUrl: "",
        repoUrl: "https://github.com/Tiagonuness/planilhaFormulas",
    },
    {
        title: "EM BREVE",
        description:
            "",
        imageUrl: "/assests/images.png",
        skills: [
        ],
        liveUrl: "",
        repoUrl: "",
    },
];
