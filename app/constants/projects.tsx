import type { ElementType } from "react";
import { BsMicrosoftTeams } from "react-icons/bs";
import { DiJqueryLogo, DiMsqlServer } from "react-icons/di";
import { FaBootstrap, FaGitAlt, FaJenkins, FaPhp, FaPython } from "react-icons/fa";
import { FaFileExcel, FaHtml5, FaLaravel } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";

export interface SkillI {
  name: string;
  icon: ElementType;
}

export interface ProjectI {
  title: string;
  enterprise: string;
  department?: string;
  context: string;
  description: string;
  imageUrl: string;
  skills: SkillI[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: ProjectI[] = [
  {
    title: "INFO EMENDAS",
    enterprise: "Presidência da República",
    department: "Secretaria de Relações Institucionais da Presidência da República - SRI/SEAG",
    context: "Gestão orçamentária e acompanhamento da execução governamental",
    description:
      "Sistema voltado ao acompanhamento de pagamentos de emendas parlamentares e de comissões, com rastreabilidade dos fluxos financeiros entre a SRI, o Tesouro Nacional e os ministérios gestores.",
    imageUrl: "/assests/infoEmendas3.png",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "jQuery", icon: DiJqueryLogo },
      { name: "Python", icon: FaPython },
      { name: "PHP", icon: FaPhp },
      { name: "Jenkins", icon: FaJenkins },
      { name: "Git", icon: FaGitAlt },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Server", icon: DiMsqlServer },
      { name: "Teams", icon: BsMicrosoftTeams },
    ],
    highlights: [
      "Controle de emendas RP6, RP7 e RP8 em um fluxo unificado",
      "Visibilidade sobre indicações orçamentárias e execuções ministeriais",
      "Apoio operacional para análise, monitoramento e acompanhamento gerencial",
    ],
  },
  {
    title: "Aplicativo Formatador de Planilhas Excel",
    enterprise: "Uso pessoal",
    context: "Automação desktop para padronização e validação de arquivos",
    description:
      "Aplicação desenvolvida em Python com CustomTkinter para processar múltiplos arquivos .xlsx, aplicar formatações padronizadas e acelerar rotinas de validação operacional.",
    imageUrl: "/assests/aplicativoFormatador.png",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Excel", icon: FaFileExcel },
    ],
    highlights: [
      "Seleção em lote de planilhas para processamento",
      "Aplicação automatizada de regras e formatos",
      "Redução de erros manuais em etapas repetitivas",
    ],
    repoUrl: "https://github.com/Tiagonuness/planilhaFormulas",
  },
  {
    title: "PIGMEO",
    enterprise: "Ministério da Saúde",
    department: "Secretaria-Executiva - SE/MS",
    context: "Painel de Informações Gerenciais para Monitoramento da Execução Orçamentária",
    description:
      "Sistema desenvolvido para a Secretaria-Executiva do Ministério da Saúde com foco no acompanhamento das demandas orçamentárias dos entes federados, automação de processos, governança de dados e apoio gerencial à alta gestão.",
    imageUrl: "/assests/PIGMEO.jpeg",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Laravel", icon: FaLaravel },
      { name: "PHP", icon: FaPhp },
      { name: "Python", icon: FaPython },
      { name: "jQuery", icon: DiJqueryLogo },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "SQL Server", icon: DiMsqlServer },
    ],
    highlights: [
      "Painel de acompanhamento das demandas orçamentárias dos entes federados",
      "Importação e validação de arquivos .xlsx e .csv",
      "Automação de processos e apoio gerencial para a alta gestão",
    ],
  },
  {
    title: "MONITORA SAES",
    enterprise: "Ministério da Saúde",
    department: "Secretaria de Atenção Especializada à Saúde - SAES/MS",
    context: "Sistema integrado de monitoramento da atenção especializada",
    description:
      "Sistema desenvolvido para a Secretaria de Atenção Especializada à Saúde, voltado ao monitoramento de informações estratégicas, consolidação de dados, geração de relatórios e suporte à tomada de decisão.",
    imageUrl: "/assests/MONITORA.png",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Laravel", icon: FaLaravel },
      { name: "PHP", icon: FaPhp },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "SQL Server", icon: DiMsqlServer },
      { name: "Teams", icon: BsMicrosoftTeams },
      { name: "Git", icon: FaGitAlt },
      { name: "Azure DevOps", icon: FaGitAlt },
      { name: "Python", icon: FaPython },
    ],
    highlights: [
      "Monitoramento de dados estratégicos e visões analíticas",
      "Dashboards gerenciais e relatórios para acompanhamento institucional",
      "Organização de informações para suporte à tomada de decisão",
    ],
  },
];
