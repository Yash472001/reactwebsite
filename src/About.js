import React from "react";
import Content from "./Content";
import photo from "./images/photo2.jpg";

function About() {
  return (
    <>
      <Content
        fline="Blockchain Revolution with"
        sline=" BlockEase"
        tline="If you have query about Blockchain Technology then ContactUs"
        b_content="Contactus"
        link="contactus"
        image={photo}
      />
    </>
  );
}

export default About;
