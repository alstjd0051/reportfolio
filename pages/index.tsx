/* eslint-disable @next/next/no-img-element */
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
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
  PageInfo,
  Project,
  Skill,
  Social,
} from "../components/lib/typings";
import { fetchExperiences } from "../components/utils/fetchExperiences";
import fetchPageInfo from "../components/utils/fetchPageInfo";
import fetchProjects from "../components/utils/fetchProjects";
import fetchSkills from "../components/utils/fetchSkills";
import fetchSocials from "../components/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experience, projects, skills, socials }: Props) => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[#242424] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6667ab] ">
      <Header pageInfo={pageInfo} socials={socials} />

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
        <WorkExperience experiences={experience} />
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
  const pageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },
    revalidate: 100,
  };
};
