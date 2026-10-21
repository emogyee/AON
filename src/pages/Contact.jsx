import React from "react";
import SendMessage from "../components/contact/SendMessage";
import FindUs from "../components/contact/FindUs.jsx";
import PageBanner from "../components/PageBanner";

const Contact = () => {
  return (
    <div className="contact">
      <PageBanner
        title="Contact us"
        breadcrumb="Home /Contact us"
        image="public/image/contact-banner.jpg.jpeg"
      />
      <SendMessage />
      <FindUs />
    </div>
  );
};

export default Contact;
