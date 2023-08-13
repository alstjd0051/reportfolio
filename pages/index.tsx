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
import Head from "next/head";

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

  resume: Resume[];
};

const Home = ({ pageInfo, skills, resume }: Props) => {
  return (
    <>
      <Head>
        <title key="title">Tyler - PortFolio</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Tyler Blog" />
        <meta property="og:description" content="송민성 포트폴리오" />
        <meta name="og:url" content="https://www.tylersong.shop/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <></>

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

  const resume = await fetchResume();

  return {
    props: {
      pageInfo,
      skills,

      resume,
    },
    revalidate: 1000,
  };
};
