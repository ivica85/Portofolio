import React from "react";

const index = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11572.868983714818!2d16.434814174206554!3d43.51866226805174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea1d37942d1ea3f4!2sStadion%20Poljud!5e0!3m2!1sen!2shr!4v1585920174149!5m2!1sen!2shr"
        width="100%"
        height="500px"
        frameBorder="none"
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default index;
