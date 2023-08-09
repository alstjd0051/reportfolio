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

import fetchSkills from "../components/utils/fetchSkills";
import fetchSocials from "../components/utils/fetchSocials";
import fetchResume from "../components/utils/fetchResume";
import dynamic from "next/dynamic";

const Loading = <div>Loading...</div>;

const GameComponent = dynamic(
  () => import("../components/commons/game/gameContainer"),
  {
    ssr: false,
    loading: () => Loading,
  }
);

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];

  socials: Social[];
  resume: Resume[];
};

const Home = ({ pageInfo, skills, socials, resume }: Props) => {
  return (
    <>
      <>
        <Header skill={skills} pageInfo={pageInfo} contact socials={socials} />
      </>

      {/* Hero */}
      <section id="hero" className="snap-start sm">
        <HeroUI pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} resume={resume} />
      </section>

      {/* Skill */}
      <section id="skills" className="snap-start block">
        <SkillUI skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {
        <section id="contact" className="snap-start">
          <ContactMe pageInfo={pageInfo} />
        </section>
      }

      <section id="game" className="hidden md:block">
        <GameComponent />
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();

  const socials = await fetchSocials();
  const resume = await fetchResume();

  return {
    props: {
      pageInfo,
      skills,

      socials,
      resume,
    },
    revalidate: 1000,
  };
};
