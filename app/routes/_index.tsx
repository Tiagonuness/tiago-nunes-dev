import type { MetaFunction } from "@remix-run/node";
import { motion } from "motion/react";
import Experience from "~/components/experience";
import Projects from "~/components/projects";
import Skills from "~/components/skills";
import { Button } from "~/components/ui/button";
import Typewriter from "typewriter-effect";
import ParticlesBackground from "../components/particles";
import { UserIcon, Phone } from 'lucide-react';
import { FaArrowDown } from 'react-icons/fa';

const contato = () => {
  window.open("https://wa.me/5561992451421", "_blank");
}

const curriculo = () => {
  window.open("/curriculo - Tiago Nunes.pdf", "_blank");
}

export const meta: MetaFunction = () => {
  return [
    { title: "Tiago Nunes | Dev" },
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
        <ParticlesBackground />
      </div>

      <div className="flex flex-col min-h-[100dvh] z-10 mt-6">
        <section
          id="hero"
          className="h-screen flex flex-col items-center justify-center gap-16 py-20 max-w-7xl mx-auto px-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl text-white">
                  <Typewriter
                      options={{
                          strings: ['Hello World!'],
                          autoStart: true,
                          loop: true,
                      }}
                  />
                </h1>
                <h1 className="text-4xl text-white">
                  I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Tiago Nunes.
                  </span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <span className="text-gray-400">
                  Full-Stack Developer | Cientista de Dados
                </span>
                <p className="text-gray-400 w-96 mt-4">
                Desenvolvedor <b>Full Stack</b> com experiência em criação de sistemas, 
                processamento de dados, além de controle avançado e visualização eficiente das informações.
                Priorizo soluções práticas e eficazes, com foco em resultados claros e objetivos.
                </p>
              </motion.div>
              <div className="flex gap-4 flex-wrap justify-center w-full md:w-max mt-4">
                <Button size="lg" className="group transition-all duration-300 hover:scale-105 bg-gradient-to-b dark:from-blue-300 dark:to-blue-500 text-gray-400" onClick={contato} asChild>
                  <a href="#contact" className="text-black">
                    Contato
                    <Phone className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group transition-all duration-300 hover:scale-105 text-white" onClick={curriculo} asChild>
                  <a href="/Currículo.pdf" target="_blank" rel="noopener noreferrer" download="Currículo Tiago Nunes.pdf">
                    Currículo
                    <UserIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>

            <motion.img
              src="/foto.jpg"
              alt="Tiago Nunes - Desenvolvedor Full Stack"
              className="rounded-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>

          {/* elemento decorativo */}
          <motion.div
            className="p-20 hidden flex-col items-center sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <FaArrowDown className="text-4xl text-blue-600 dark:text-blue-400 animate-pulse" />
          </motion.div>
        </section>

        <motion.section
          id="skills"
          className=" flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl text-center text-white">Habilidades e experiência</h1>

          <div className="flex flex-col gap-28">
            {/* componente de skills */}
            <Skills />

            {/* componente de experiencia */}
            <Experience />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          id="projects"
          className="mt-20 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl text-white">Projetos</h1>

          <Projects />
        </motion.section>
      </div>
    </div>
  );
}
