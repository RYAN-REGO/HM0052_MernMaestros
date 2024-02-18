import React from "react";
import ProfilePhoto from "../../assets/mentor.png";

const TestimonialCard = ({ userName, rating, review }) => {
  return (
    <div className="bg-white shadow-md p-6 w-[349px]  border border-gray-300 rounded-lg">
      <div className="flex  flex-col justify-center items-center">
        <img
          src={ProfilePhoto}
          className="rounded-full h-12 w-12"
          alt="profile"
        />
        <h1 className="font-semibold">{userName}</h1>
        <span>{rating}</span>
      </div>
      <p className="text-sm my-4 text-slate-500 text-center">{review}</p>
    </div>
  );
};

export default TestimonialCard;
