import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { _id, title, url, price, info } = useLoaderData();
  return (
    <div>
      <div className="text-4xl text-center m-5">
        <h2>Service Details</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-rows-2 lg:grid-cols-2'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={url} alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{info}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Price</div>
              <div className="badge badge-outline">${price}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-4xl text-center">
            <h2>Add Review For This Service</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;