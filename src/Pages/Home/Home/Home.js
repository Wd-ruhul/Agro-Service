import React from 'react';
import Banner from '../Banner/Banner';
import LoadHomeService from '../LoadHomeService/LoadHomeService';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LoadHomeService></LoadHomeService>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </div>
  );
};

export default Home;