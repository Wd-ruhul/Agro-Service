import React, { useEffect, useState } from 'react';
import ShowReviewCard from './ShowReviewCard';

const ShowReview = () => {
  const [showReview, setShowReview] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/showreview")
        .then((res) => res.json())
        .then((data) => setShowReview(data));
    }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 p-5 max-w-screen-md  ">
        {showReview.map((reviews) => (
          <ShowReviewCard key={reviews._id} reviews={reviews}></ShowReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ShowReview;