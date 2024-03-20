import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating * totalStars) / totalStars;

  const starIcons = [];
  for (let i = 0; i <= totalStars; i++) {
    if (i < filledStars) {
      starIcons.push(<span key={i} className="star-filled text-yellow-300">&#9733;</span>);
    } else {
      starIcons.push(<span key={i} className="star">&#9734;</span>);
    }
  }

  return <div className="star-rating text-xl text-gray-600 font-semibold mt-3">Rating: {starIcons}</div>;
};

export default StarRating;
