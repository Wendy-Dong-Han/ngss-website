import React from 'react';
import '../../App.css';
import HomeText from '../HomeText';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <style>{'body { background-color: black; }'}</style>
      <HeroSection />
      <HomeText />
    </>
  );
}

export default Home;