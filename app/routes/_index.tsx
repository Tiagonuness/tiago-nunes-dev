import type { MetaFunction } from "@remix-run/node";
import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Phone } from "lucide-react";
import { FaArrowDown } from "react-icons/fa";
import Experience from "~/components/experience";
import ParticlesBackground from "~/components/particles";
import Projects from "~/components/projects";
import Skills from "~/components/skills";
import { Button } from "~/components/ui/button";

const stats = [
  { value: "4+", label: "Projetos com foco em gestão pública, automação e acompanhamento institucional" },
  { value: "Full Stack", label: "Atuação unindo interface, regras de negócio, dados e integrações" },
  { value: "Dados", label: "Experiência com auditoria, consolidação de informações e apoio gerencial" },
];

const openContact = () => {
  window.open("https://wa.me/5561992451421", "_blank");
};

const openResume = () => {
  window.open("/CV_TIAGO NUNES_PTBR.pdf", "_blank");
};

export const meta: MetaFunction = () => {
  return [
    { title: "Tiago Nunes | Desenvolvedor Full Stack" },
    {
      name: "description",
      content:
        "Portfólio de Tiago Nunes com foco em desenvolvimento full stack, automação de processos, governança de dados e sistemas para contextos institucionais.",
    },
  ];
};

export default function Index() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <ParticlesBackground />
      </div>

      <div className="relative z-10">
        <section
          id="hero"
          className="mx-auto flex min-h-[100dvh] w-full max-w-7xl items-center px-4 pb-8 pt-28 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Tiago Nunes | Desenvolvedor Full Stack | Engenheiro e Cientista de Dados | DBA
              </div>

              <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Desenvolvimento de sistemas com foco em clareza, organização visual e solidez operacional.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Sou Tiago Nunes e atuo na construção de soluções full stack voltadas para automação de processos,
                consolidação de dados e interfaces mais profissionais para ambientes institucionais e gerenciais.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                Meu trabalho combina desenvolvimento, organização de informações e melhoria da experiência visual para
                entregar sistemas mais claros, confiáveis e prontos para uso real.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mx-auto mt-8 flex max-w-4xl flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-cyan-300 px-6 text-slate-950 hover:bg-cyan-200"
                onClick={openContact}
              >
                Falar no WhatsApp
                <Phone className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                onClick={openResume}
              >
                Abrir currículo
                <Download className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
                asChild
              >
                <a href="#projects">
                  Ver projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3"
            >
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="text-xl font-semibold text-white">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col items-center sm:mt-16"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a
                href="#skills"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition hover:bg-cyan-300/20"
                aria-label="Ir para habilidades e experiência"
              >
                <FaArrowDown className="text-xl animate-pulse" />
              </a>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="skills"
          className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Capacidade técnica</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Habilidades e experiência</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Repertório técnico aplicado ao desenvolvimento de sistemas, tratamento de dados e construção de
                interfaces para cenários que exigem consistência, histórico e apoio à tomada de decisão.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-20">
              <Skills />
              <Experience />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Projetos</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Projetos em automação, dados e acompanhamento institucional
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Seleção de entregas que representam minha atuação em sistemas com foco em governança de dados, apoio
                gerencial, automação operacional e acompanhamento de informações estratégicas.
              </p>
            </div>
          </div>

          <Projects />
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-[36px] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.92)_45%,rgba(2,6,23,0.98))] p-8 shadow-[0_20px_80px_rgba(8,15,31,0.45)] sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Contato</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Vamos conversar sobre sistemas, dados e automação para contextos institucionais
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  Se você busca alguém para desenvolver soluções com mais clareza, organização e foco operacional,
                  posso contribuir em projetos de modernização, monitoramento, consolidação de dados e melhoria de
                  processos.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-300 px-6 text-slate-950 hover:bg-cyan-200"
                  onClick={openContact}
                >
                  Conversar agora
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/tiago-nunes-09905724a/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                    <Linkedin className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="https://github.com/Tiagonuness" rel="noopener noreferrer" target="_blank">
                    GitHub
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
