import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from './ServicesCard';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://assignment-eleven-server-topaz.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
         <h2 className='text-4xl text-center text-primary m-3'> services</h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
     
      </div>
     
    </div>
  );
};

export default Services;