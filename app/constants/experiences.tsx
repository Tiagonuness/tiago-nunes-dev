export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string | string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Ministério da Saúde",
    period: "Junho 2025 - Presente",
    role: "Desenvolvedor Full Stack | Engenheiro de Software | Cientista de Dados | DBA",
    description: [
      "Atuo no desenvolvimento do Sistema de Acompanhamento das Demandas Orçamentárias dos Entes Federados, integrando informações às dotações orçamentárias para fortalecer o monitoramento e a governança dos recursos públicos. Minha atuação envolve a construção de pipelines de dados, validações automatizadas, regras de negócio, rastreabilidade das informações e geração de relatórios gerenciais e dashboards utilizados pela alta gestão.",
      "Também atuo no desenvolvimento de um sistema estratégico na Secretaria de Atenção Especializada à Saúde, utilizando Laravel para consolidação e análise de dados assistenciais. O sistema contempla a geração de notas informativas automatizadas, dashboards analíticos, relatórios dinâmicos, integração entre bases distintas e mecanismos de auditoria e rastreabilidade.",
    ],
  },
  {
    company: "Presidência da República",
    period: "Abril 2024 - Junho 2025",
    role: "Desenvolvedor Full Stack | Engenheiro de Dados | DBA",
    description:
      "Atuei no desenvolvimento de sistemas web com foco na organização, controle e visualização de dados governamentais, utilizando PHP, jQuery e SQL. Fui responsável pela modelagem e otimização de bancos de dados, além da implementação de automações para ganho de eficiência operacional. Desenvolvi soluções para gestão de emendas parlamentares, acompanhando fluxos entre a SRI, o Tesouro Nacional e ministérios gestores, contribuindo para maior transparência, controle e apoio à tomada de decisão estratégica.",
  },
];

export const education: ExperienceItem[] = [
  {
    company: "Universidade de Brasília - UnB",
    period: "Março 2020 - Presente",
    role: "Curso: Engenharia da Computação",
    description: "",
  },
];
