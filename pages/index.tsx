/* eslint-disable @next/next/no-img-element */
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/commons/about/AboutUI";
import ContactMe from "../components/commons/contact/Contact";
import WorkExperience from "../components/commons/experience/WorkExperience";
import HeroUI from "../components/commons/Hero/HeroUI";
import Header from "../components/commons/layout/Header";
import Projects from "../components/commons/projects/Projects";
import SkillUI from "../components/commons/skill/SkillUI";
import {
  Experience,
  PaegInfo,
  Project,
  Skill,
  Social,
} from "../components/lib/typings";
import { fetchExperiences } from "../components/utils/fetchExperiences";
import { fetchPageInfo } from "../components/utils/fetchPageInfo";
import { fetchProjects } from "../components/utils/fetchProjects";
import { fetchSkills } from "../components/utils/fetchSkills";
import { fetchSocials } from "../components/utils/fetchSocials";

type Props = {
  pageInfo: PaegInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6667ab] ">
      <Head>
        <title key="title">{pageInfo.name} - PortFolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <HeroUI pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skill */}
      <section id="skills" className="snap-start">
        <SkillUI skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PaegInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
