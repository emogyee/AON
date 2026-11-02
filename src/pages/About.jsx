import React from "react";
import PageBanner from "../components/PageBanner";
import OurStory from "../components/about/OurStory";
import OurValue from "../components/about/OurValue";
import WhyChoseUs from "../components/about/WhyChoseUs";
import MeetOurTeam from "../components/about/MeetOurTeam";

const About = () => {
  return (
    <div className="grid-reveal-banner">
      <PageBanner
        title="About us"
        breadcrumb="Home / About us"
        image="images/Chef%2011.jpg"
      />

      <OurStory />
      <OurValue />
      <WhyChoseUs />
      <MeetOurTeam />
    </div>
  );
};

export default About;
