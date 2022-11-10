import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
  const { _id, title, url, price, info } = service;
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{ info.slice(0,100)}...</p>
          <h4>price: ${price}</h4>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">CheckOut</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;