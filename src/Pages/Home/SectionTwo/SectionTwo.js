import React from 'react';
import sp from '../SectionTwo/sp.png'

const SectionTwo = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-green-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Trusted Company </h1>
          
            <div>
            <img src={sp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;