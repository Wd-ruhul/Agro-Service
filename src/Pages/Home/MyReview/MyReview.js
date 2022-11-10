import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
  const { user } = useContext(AuthContext)
  const [myReview, setMyReview] = useState([]);
  
useEffect(() => {
  fetch(`https://assignment-eleven-server-topaz.vercel.app/myreview?email=${user?.email}`)
    .then((res) => res.json())
    .then((data) => setMyReview(data));
}, [user?.email]);

  console.log('er',myReview)

  return (
    <div>
      {myReview.length}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5  ">
        {myReview.map((reviews) => (
          <MyReviewCard key={reviews._id} reviews={reviews}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;