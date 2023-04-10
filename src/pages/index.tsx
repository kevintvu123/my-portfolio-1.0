import Email from '@/components/Email';
import SocialIcons from '@/components/SocialIcons';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Skills';
import React from 'react';

function Index() {
  return (
    <div className="app">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default Index