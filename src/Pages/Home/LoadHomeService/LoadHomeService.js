import React from 'react';
import  { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const LoadHomeService = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homeservices")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);
  return (
    <div>
      services:{homeServices.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
        {homeServices.map((service) => (
          <HomeServiceCard
            key={service._id}
            service={service}
          ></HomeServiceCard>
        ))}
      </div>
      <Link className='grid justify-center'>
        <button className="btn btn-primary">See all Service</button>
      </Link>
    </div>
  );
};

export default LoadHomeService;
