import { IoIosSchool as Faculdade } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { education, experiences } from "../constants/experiences";

const renderDescription = (description: string | string[]) => {
  if (Array.isArray(description)) {
    return description.map((paragraph) => (
      <p key={paragraph} className="text-sm leading-7 text-slate-300">
        {paragraph}
      </p>
    ));
  }

  if (!description) {
    return null;
  }

  return <p className="text-sm leading-7 text-slate-300">{description}</p>;
};

const TimelineCard = ({
  company,
  period,
  role,
  description,
  icon: Icon,
  showConnector,
}: {
  company: string;
  period: string;
  role: string;
  description: string | string[];
  icon: React.ElementType;
  showConnector: boolean;
}) => {
  return (
    <div className="relative grid gap-5 md:grid-cols-[72px_1fr]">
      <div className="relative flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_10px_30px_rgba(34,211,238,0.12)]">
          <Icon className="text-2xl" />
        </div>
        {showConnector && (
          <div className="absolute top-16 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/40 via-white/10 to-transparent md:block" />
        )}
      </div>

      <article className="rounded-[28px] border border-white/10 bg-slate-950/55 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:border-cyan-300/30 hover:bg-slate-900/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">{company}</h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">{role}</p>
          </div>
          <span className="inline-flex w-fit whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
            {period}
          </span>
        </div>

        <div className="mt-5 space-y-4">{renderDescription(description)}</div>
      </article>
    </div>
  );
};

export default function ExperienceEducation() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      {experiences.map((exp, index) => (
        <TimelineCard
          key={`${exp.company}-${exp.period}`}
          company={exp.company}
          period={exp.period}
          role={exp.role}
          description={exp.description}
          icon={MdWork}
          showConnector={index !== experiences.length - 1 || education.length > 0}
        />
      ))}

      {education.map((exp, index) => (
        <TimelineCard
          key={`${exp.company}-${exp.period}`}
          company={exp.company}
          period={exp.period}
          role={exp.role}
          description={exp.description}
          icon={Faculdade}
          showConnector={index !== education.length - 1}
        />
      ))}
    </div>
  );
}
