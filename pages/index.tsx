import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

import Skills from "../components/Skills/Skills";
import WorkExperiences from "../components/WorkExperiences/WorkExperiences";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white
     h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden
     scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#f7ab0a]/70">
      <Head>
        <title>Ruan Tiengo's Portfolio</title>
      </Head>
      {/**
       * HEADER
       * HERO
       * ABOUT
       * EXPERIENCE
       * SKILLS
       * PROJECTS
       * CONTACT ME
       */}
      <Header/>
      <section  id="hero" className="snap-start">
        <Hero />
      </section>

      <section  id="about" className="snap-center">
        <About />
      </section>

      <section  id="experience" className="snap-center">
        <WorkExperiences />
      </section>
      
      <section  id="skills" className="snap-center">
        <Skills />
      </section>

      <Link href={"#hero"}>
        <footer className="sticky bottom-5 w-full cursor-pointer animate-bounce">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="profile.jpg">
            </img>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
