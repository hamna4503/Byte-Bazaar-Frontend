import React from "react";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating * totalStars) / totalStars;

  const starIcons = [];
  for (let i = 0; i <= totalStars; i++) {
    if (i < filledStars) {
      starIcons.push(
        <span key={i} className="text-yellow-300 star-filled">
          &#9733;
        </span>
      );
    } else {
      starIcons.push(
        <span key={i} className="star">
          &#9734;
        </span>
      );
    }
  }

  return (
    <div className="text-xl font-semibold text-gray-600 star-rating">
      {starIcons}
    </div>
  );
};

export default StarRating;
