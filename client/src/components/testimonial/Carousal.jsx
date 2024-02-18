import React from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const mentorReviews = [
    {
      username: "User1",
      review: "Great mentor! Helped me a lot with my Python projects.",
      rating: "⭐⭐⭐", // Rating out of 5
      date: "2024-02-15", // Date of the review
    },
    {
      username: "User2",
      review: "Very knowledgeable about Java. Patient and clear explanations.",
      rating: "⭐⭐⭐",
      date: "2024-02-10",
    },
  ];

  return (
    <div className="max-w-[800px]">
      <Slider {...settings}>
        {mentorReviews.map((review, index) => (
          <TestimonialCard
            key={index}
            review={review.review}
            userName={review.username}
            rating={review.rating}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
