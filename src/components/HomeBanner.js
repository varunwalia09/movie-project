import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Redirect to the Sign In page when "Get Started" is clicked
    navigate("/login");
  };

  return (
    <div className="home-banner">
      <div className="our-story">
        <h1 className="our-story-card-title" data-uia="hero-title">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="email-form-title">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Email Address" />
          <button className="input-group-button btn-danger btn btn-outline-dark text-black" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      ></img>
    </div>
  );
};

export default HomeBanner;
