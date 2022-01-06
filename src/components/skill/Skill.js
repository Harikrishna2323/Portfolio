import React from "react";
import { SkillsData } from "../../skills";
import SkillCard from "./SkillCard";
import "./skill.css";

const Skill = () => {
  const data = SkillsData;
  return (
    <div className="skills" id="skills">
      <label className="sectiontitle">Skills</label>
      <div className="skillsContainer">
        {data.map((skill) => (
          <div classNmae="skillSection">
            <label className="skillsSectionTitle">{skill.type}</label>
            <div className="skillsList">
              {skill.list.map((s) => (
                <SkillCard skill={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
