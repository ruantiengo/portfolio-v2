import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

import Skills from "../components/Skills/Skills";
import WorkExperiences from "../components/WorkExperiences/WorkExperiences";
import _ from 'lodash'
import { scrollSmooth } from "../helpers/scroolSmooth";
import { DefaultSeo } from "next-seo";
import { AppConfig } from "../helpers/AppConfig";
const Home: NextPage = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const handleEndScroll = useMemo(
    () =>
      _.debounce(() => setIsScrolling(false), 2000),
    []
  );

  const handleScroll = (e: any) => {
    setIsScrolling(true)
    handleEndScroll();
  };
  
  const appConfig = AppConfig();
  return (
    <div 
    onScroll={handleScroll}
    
      className="bg-[rgb(36,36,36)] text-white
     min-w-[320px] min-h-screen h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden
     scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#f7ab0a]/70">
      <Head>
        <title>Ruan Tiengo</title>
      </Head>
      <DefaultSeo {...appConfig}/>
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

   
       {isScrolling ? ( <Link href={"#hero"} onClick={e => scrollSmooth(e,"#hero")}>
        <footer className="fixed top-24 right-0 md:right-56 w-full cursor-pointer animate-bounce z-20">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="profile.jpg" alt="image to start section">
            </img>
          </div>
          <span className="flex items-center justify-center">TOP</span>
        </footer>
        </Link>) : ''}
        
      

     
    </div>
  );
};

export default Home;
