import React from "react";
import "./skillCard.css";

const SkillCard = ({ skill }) => {
  console.log("skill:", skill);
  return (
    <div className="skillCard">
      <div className="skillIcon">{skill.img}</div>
      <label className="skillName">{skill.name}</label>
    </div>
  );
};

export default SkillCard;
