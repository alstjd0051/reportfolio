import type { GetStaticProps } from "next";
import About from "../components/commons/about/AboutUI";
import ContactMe from "../components/commons/contact/Contact";
import HeroUI from "../components/commons/Hero/HeroUI";
import Header from "../components/commons/layout/Header";
import Projects from "../components/commons/projects/Projects";
import SkillUI from "../components/commons/skill/SkillUI";
import {
  PageInfo,
  Project,
  Resume,
  Skill,
  Social,
} from "../components/lib/typings";
import fetchPageInfo from "../components/utils/fetchPageInfo";
import fetchProjects from "../components/utils/fetchProjects";
import fetchSkills from "../components/utils/fetchSkills";
import fetchSocials from "../components/utils/fetchSocials";
import Loading from "../components/loading";
import fetchResume from "../components/utils/fetchResume";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  resume: Resume[];
};

const Home = ({ pageInfo, projects, skills, socials, resume }: Props) => {
  return (
    <div className="">
      <Header pageInfo={pageInfo} contact socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <HeroUI pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} resume={resume} />
      </section>

      {/* Experience */}
      {/* <section id="experience" className="snap-center">
        <WorkExperience experiences={experience} />
      </section> */}

      {/* Skill */}
      <section id="skills" className="snap-start hidden md:block">
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
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();
  const resume = await fetchResume();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
      resume,
    },
    revalidate: 1000,
  };
};
