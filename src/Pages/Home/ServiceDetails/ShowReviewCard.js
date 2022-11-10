import React from 'react';

const ShowReviewCard = ({ reviews }) => {
  const { serviceName, persion, email, review } = reviews;
  return (
    <div>
      <div className="card w-96 mr-5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{persion}</h2>
          <small>{email}</small>
          <div className="divider">Review</div>
          <h2 className="card-title">{serviceName}</h2>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowReviewCard;