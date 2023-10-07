import React from "react";
import Styled from "./About.module.css";

const About = () => {
  return (
    <section>
      <p className={Styled['text']}>Get to know</p>

      <div className={Styled["container"]}>
        
        <div className={Styled["img-container"]}>
          <img src="./Image/fahad2.jpg" alt="" className={Styled["image"]} />
        </div>
        <div className={Styled["about-container"]}>
          <div className={Styled["col-about"]}>
            <small className={Styled["title"]}>
              About <span className={Styled["boder-line"]}></span>
            </small>
            <small className={Styled["titleName"]}>Muhammad Fahad</small>
            <p className={Styled["paragraph"]}>
              As a student pursuing a Bachelor of Science in Computer Science,
              my career goal is to become a skilled developer who can create
              unique Web Development that incorporate AI and Machine learning. I
              am also eager to excel in frontend web development and Backend
              Development using my creativity and technical knowledge to build
              visually appealing and user-friendly interfaces. With a strong
              foundation, i am confident in my ability to contribute to any
              development team and bring innovative ideas to life. I have honed
              my skills in various programming languages and technologies. I am
              excited to bring my expertise and creativity to the table, and
              contribute to any project that challenges me to grow as a
              developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
