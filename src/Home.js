import React from "react";
import Content from "./Content";
import photo from "./images/photo1.jpg";

function Home() {
  return (
    <>
      <Content
        fline="Blockchain Revolution with"
        sline=" BlockEase"
        tline="We can provide the knowledge about Blockchain Technology"
        b_content="Get Started"
        link="service"
        image={photo}
      />
    </>
  );
}

export default Home;
