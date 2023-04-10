import Loader from '@/components/Loader';
import Email from '@/components/Email';
import SocialIcons from '@/components/SocialIcons';
import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Skills';
import React, { useState } from "react";
import Head from "next/head";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Kevin Vu Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}

export default Index