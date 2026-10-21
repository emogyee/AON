import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
const FindUs = () => {
  return (
    <div className=" text-light" style={{ backgroundColor: "#8b0000" }}>
      <div className=" text-center py-5 ">
        <h1 style={{ fontSize: "60px" }}>
          Order Your <span className="text-warning">Meal</span>
        </h1>
        <p style={{ fontSize: "20px" }}>Find us & connect</p>
      </div>
      <div
        className="row py-5"
        style={{
          marginLeft: "100px",
          marginRight: "100px",
          marginTop: "-60px",
        }}
      >
        <div className="col text-center" style={{ marginRight: "-100px" }}>
          <FaLocationDot />
          <h5> Kitchen & Dispatch Hub</h5>
          <p>
            Kitchen & Dispatch Central, Lagos, Rd, <br />
            AON Road, Lagos, Nigeria
          </p>
          <p> Dispatch Hotline: +234 800 000 0000 </p>
          <p> Support: +234 801 111 1111 </p>
        </div>
        <hr style={{ transform: "rotate(90deg)", width: "200px" }} />

        <div className="col text-center" style={{ marginRight: "-150px" }}>
          <FaRegClock />
          <h4> Opening Hours</h4>
          <p>
            Mon-Sat:
            <br /> 9 AM - 10 PM
          </p>
          <p>
            Sun: <br />
            11 AM - 9 PM
          </p>
        </div>
        <hr style={{ transform: "rotate(90deg)", width: "200px" }} />
        <div className="col text-center">
          <IoIosPeople />
          <h4> Connect With Us</h4>
          <p> 🌐 @AONcuisine </p>
          <p> 📸 @AONcuisine </p>
          <p> 🐦 @AONcuisine </p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
