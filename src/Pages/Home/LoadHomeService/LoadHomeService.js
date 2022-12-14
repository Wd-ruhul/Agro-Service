import React from 'react';
import  { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const LoadHomeService = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("https://assignment-eleven-server-topaz.vercel.app/homeservices")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);
  return (
    <div>
      <h2 className='text-4xl text-center text-primary m-3'>services </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
        {homeServices.map((service) => (
          <HomeServiceCard
            key={service._id}
            service={service}
          ></HomeServiceCard>
        ))}
      </div>
      <Link to="/services" className="grid justify-center">
        <button className="btn btn-primary m-3">See all Service</button>
      </Link>
    </div>
  );
};

export default LoadHomeService;
