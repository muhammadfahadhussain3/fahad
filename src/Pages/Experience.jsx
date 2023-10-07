import React from "react";
import Styled from "./Experience.module.css";
import Bio from "../data";

const Experience = () => {
  return (
    <div className={Styled['section']}>
      <p className={Styled["title1"]}>
        <span className={Styled["title"]}>Experience</span>
      </p>

      <div className={Styled["container"]}>
        {Bio.experience.map((exp, index) => (
          <div className={Styled["card"]} key={index}>
            <h3>{exp.name}</h3>
            <small className={Styled["small"]}>{exp.role}</small>
            <p>{exp.start_date} - {exp.end_date}</p>
            <p className={Styled["description"]}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
